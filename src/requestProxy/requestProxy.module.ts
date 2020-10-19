import { HttpModule, Module } from '@nestjs/common';
import { RequestProxyController } from './requestProxy.controller';
import { RequestProxyService } from './requestProxy.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [RequestProxyController],
  providers: [RequestProxyService]
})

export class RequestProxyModule {}
