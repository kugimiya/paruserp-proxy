import { Controller, Get, Req } from '@nestjs/common';
import { Request } from '../models/request';
import { Request as ExpressRequest } from 'express';
import { PricesService } from './prices.service';
import { ProductsDto } from './prices.model';

@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Get('/products')
  getHello(@Req() request: ExpressRequest) {
    return this.pricesService.getProducts(request.header('Bearer'));
  }
}
