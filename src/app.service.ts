import { Injectable } from '@nestjs/common';
import { OnApplicationBootstrap } from '@nestjs/common/interfaces';
import { Product } from './models/product.model';
import { Inject } from '@nestjs/common/decorators';
import { ExcelService } from './product/excel.service';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: typeof Product,
    private excelService: ExcelService,
  ) {}

  async onApplicationBootstrap(): Promise<any> {
    const productsCount = await this.productRepository.count();

    if (productsCount === 0) {
      const productsToSave = await this.excelService.readExcel();

      await this.productRepository.bulkCreate(productsToSave);
    }
  }
}
