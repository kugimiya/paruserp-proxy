import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto, AuthSession } from '../models/auth';
import { Request } from '../models/request';

@Controller('/auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Get('/login')
  getHello(): Promise<Request<AuthSession | null>> {
    return this.appService.login({
      login: 'admin',
      password: 'admin'
    });
  }
}
