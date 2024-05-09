import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProvider } from 'src/models/product.model';
import { ExcelService } from './excel.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ...productProvider, ExcelService],
})
export class ProductModule {}
