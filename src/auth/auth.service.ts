import { createHash } from 'crypto';
import { HttpService, Injectable } from '@nestjs/common';
import { AuthRequestDto, AuthSession, Credentials } from '../models/auth';
import { BACKEND_URI } from '../constants';
import { Request } from '../models/request';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  backendSessions: AuthSession[] = [];

  getPhpSession(accessToken: string): string {
    const session = this.backendSessions.find((session) => session.accessToken === accessToken);
    return session.phpSession;
  }

  startSession(phpSession: string): AuthSession {
    const accessToken = createHash('md5').update(phpSession).digest('base64');
    const refreshToken = createHash('md5').update(`${accessToken}-${phpSession}`).digest('base64');

    const session: AuthSession = {
      accessToken,
      refreshToken,
      phpSession,
      expireAt: Date.now() + 15 * 60 * 1000, // minutes * seconds * ms
    };

    this.backendSessions.push(session);
    return session;
  }

  async login(credentials: Credentials): Promise<Request<AuthSession | null>> {
    const response = await this.httpService.request<AuthRequestDto>({
      method: 'POST',
      url: `${BACKEND_URI}/auth/login`,
      params: credentials
    }).toPromise();

    const { headers, data } = response;
    const { error } = data;

    if (error === null) {
      const [, phpSession] = /(.*);.*/.exec(headers['set-cookie'][0]);
      const session: AuthSession = this.startSession(phpSession);

      return {
        error: null,
        payload: session
      };
    }

    return {
      error,
      payload: null,
      version: '2'
    };
  }
}
