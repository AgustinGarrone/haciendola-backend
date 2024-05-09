import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'products' })
export class Product extends Model<Product> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  handle: string;

  @Column({ allowNull: false })
  title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @Column({ allowNull: false })
  SKU: string;

  @Column({ allowNull: true })
  grams: number;

  @Column({ allowNull: false })
  stock: number;

  @Column({ allowNull: false })
  price: number;

  @Column({ allowNull: false })
  comparePrice: number;

  @Column({ allowNull: false })
  barcode: string;
}

export const productProvider = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];
