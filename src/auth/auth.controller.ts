import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto, AuthSession, Credentials } from '../models/auth';
import { Request } from '../models/request';

@Controller('/auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Post('/login')
  getHello(@Body() credentials: Credentials): Promise<Request<AuthSession | null>> {
    return this.appService.login(credentials);
  }
}
