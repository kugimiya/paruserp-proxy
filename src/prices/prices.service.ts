import { HttpService, Injectable } from '@nestjs/common';
import { ProductsDto } from './prices.model';
import { Request } from '../models/request';
import { AuthService } from '../auth/auth.service';
import { BACKEND_URI } from '../constants';

@Injectable()
export class PricesService {
  constructor(private httpService: HttpService, private authService: AuthService) {}

  async getProducts(accessToken: string): Promise<Request<ProductsDto> | any> {
    const session = this.authService.getPhpSession(accessToken);

    const response = await this.httpService.request<Request<ProductsDto>>({
      method: 'GET',
      url: `${BACKEND_URI}/prices/products`,
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
