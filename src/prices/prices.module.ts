import { HttpModule, Module } from '@nestjs/common';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [PricesController],
  providers: [PricesService]
})

export class PricesModule {}
