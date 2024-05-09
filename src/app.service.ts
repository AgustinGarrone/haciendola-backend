import { Injectable } from '@nestjs/common';
import { OnApplicationBootstrap } from '@nestjs/common/interfaces';
import { ProductService } from './product/product.service';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private productService: ProductService) {}

  async onApplicationBootstrap(): Promise<any> {
    const productsCount = await this.productService.getProductsCount();

    if (productsCount === 0) {
      await this.productService.addFromExcel();
    }
  }
}
