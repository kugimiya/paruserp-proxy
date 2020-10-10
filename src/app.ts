import { Module } from '@nestjs/common';
import { PricesModule } from './prices/prices.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, PricesModule],
  controllers: [],
  providers: []
})
export class AppModule {}
