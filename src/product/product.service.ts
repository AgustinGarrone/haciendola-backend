import { HttpException, Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';
import { ExcelService } from './excel.service';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: typeof Product,
    private excelService: ExcelService,
  ) {}

  async addFromExcel(): Promise<Product[]> {
    const productsToSave = await this.excelService.readExcel();

    return await this.productRepository.bulkCreate(productsToSave);
  }

  async getAll(limit: number, offset: number): Promise<Product[]> {
    return this.productRepository.findAll({
      limit,
      offset,
    });
  }

  async countAll(): Promise<number> {
    return this.productRepository.count();
  }

  async getProductsCount(): Promise<number> {
    return this.productRepository.count();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.create(createProductDto);
  }

  async update(
    id: number,
    updateProductDto: CreateProductDto,
  ): Promise<Product> {
    const product = await this.productRepository.findByPk(id);
    if (!product) {
      throw new HttpException(`Product with id ${id} not found`, 404);
    }

    await product.update(updateProductDto);
    return product;
  }
  async delete(id: number): Promise<boolean> {
    await this.productRepository.destroy({ where: { id } });
    return true;
  }
}
