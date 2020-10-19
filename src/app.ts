import { Module } from '@nestjs/common';
import { RequestProxyModule } from './requestProxy/requestProxy.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, RequestProxyModule],
  controllers: [],
  providers: []
})
export class AppModule {}
