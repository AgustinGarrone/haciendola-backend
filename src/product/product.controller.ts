import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { Product } from 'src/models/product.model';
import { ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Post()
  async create(
    @Body(ValidationPipe) createProductDto: CreateProductDto,
  ): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return this.productService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProductDto: CreateProductDto,
  ) {
    return this.productService.update(id, updateProductDto);
  }
}
