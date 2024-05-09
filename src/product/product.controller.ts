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
import { Query } from '@nestjs/common';

@ApiTags('Product')
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(
    @Query('page') page = 1,
    @Query('limit') limit = 35,
  ): Promise<Product[]> {
    const offset = (page - 1) * limit;
    return this.productService.getAll(limit, offset);
  }

  @UseGuards(JwtAuthGuard)
  @Get('count')
  async countAll(): Promise<number> {
    return this.productService.countAll();
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
