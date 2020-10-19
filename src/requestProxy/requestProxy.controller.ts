import { Controller, Get, Req } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { RequestProxyService } from './requestProxy.service';

@Controller('api')
export class RequestProxyController {
  constructor(private readonly requestProxyService: RequestProxyService) {}

  @Get('*')
  getHello(@Req() request: ExpressRequest) {
    const [, proxyPath] = /\/api\/(.*)/.exec(request.url);

    return this.requestProxyService.get(request.header('Bearer'), `/${proxyPath}`);
  }
}
