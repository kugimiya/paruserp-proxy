import { Request } from './request';

export type AuthSession = {
  accessToken: string,
  refreshToken: string,
  expireAt: number,
  phpSession: string
}

export type Credentials = {
  login: string;
  password: string;
}

export type AuthDto = {
  authorized: boolean;
}

export type AuthRequestDto = Request<AuthDto>;

