import { HttpService, Injectable } from '@nestjs/common';
import { Request } from '../models/request';
import { AuthService } from '../auth/auth.service';
import { BACKEND_URI } from '../constants';

@Injectable()
export class RequestProxyService {
  constructor(private httpService: HttpService, private authService: AuthService) {}

  async get(accessToken: string, proxyPath: string): Promise<Request<any> | any> {
    const session = this.authService.getPhpSession(accessToken);

    const response = await this.httpService.request<Request<any>>({
      method: 'GET',
      url: `${BACKEND_URI}${proxyPath}`,
      params: {
        extended: true
      },
      headers: {
        'Cookie': session
      }
    }).toPromise();

    return response.data;
  }
}
