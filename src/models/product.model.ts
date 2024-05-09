import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'products' })
export class Product extends Model<Product> {
  @Column({ primaryKey: true, autoIncrement: true })
  @ApiProperty()
  id: number;

  @Column({ allowNull: false })
  @ApiProperty()
  handle: string;

  @Column({ allowNull: false })
  @ApiProperty()
  title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  @ApiProperty()
  description: string;

  @Column({ allowNull: false })
  @ApiProperty()
  SKU: string;

  @Column({ allowNull: false, type: DataType.DECIMAL(20, 2) })
  @ApiProperty()
  grams: number;

  @Column({ allowNull: false })
  @ApiProperty()
  stock: number;

  @Column({ allowNull: false, type: DataType.DECIMAL(20, 2) })
  @ApiProperty()
  price: number;

  @Column({ allowNull: false, type: DataType.DECIMAL(20, 2) })
  @ApiProperty()
  comparePrice: number;

  @Column({ allowNull: false })
  @ApiProperty()
  barcode: string;
}

export const productProvider = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];
