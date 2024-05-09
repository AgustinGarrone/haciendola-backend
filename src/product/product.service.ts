import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';
import { ExcelService } from './excel.service';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: typeof Product,
    private excelService: ExcelService,
  ) {}

  async read() {
    await this.excelService.readExcel();
    return true;
  }
}
