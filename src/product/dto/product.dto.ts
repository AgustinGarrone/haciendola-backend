import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export type ProductDTO = {
  handle: string;
  title: string;
  description: string;
  SKU: string;
  grams: number;
  stock: number;
  price: number;
  comparePrice: number;
  barcode: string;
  createdAt: Date;
  updatedAt: Date;
};

export class LoadExcelDto {
  @IsString()
  filePath: string;
}

export class CreateProductDto {
  @IsString({ message: 'El campo "handle" debe ser una cadena de caracteres.' })
  @IsNotEmpty({ message: 'El campo "handle" es obligatorio.' })
  handle: string;

  @IsString({ message: 'El campo "title" debe ser una cadena de caracteres.' })
  @IsNotEmpty({ message: 'El campo "title" es obligatorio.' })
  title: string;

  @IsString({
    message: 'El campo "description" debe ser una cadena de caracteres.',
  })
  @IsNotEmpty({ message: 'El campo "description" es obligatorio.' })
  description: string;

  @IsString({ message: 'El campo "SKU" debe ser una cadena de caracteres.' })
  @IsNotEmpty({ message: 'El campo "SKU" es obligatorio.' })
  SKU: string;

  @IsNumber({}, { message: 'El campo "grams" debe ser un número.' })
  @Min(0, { message: 'El campo "grams" no puede ser menor que 0.' })
  grams: number;

  @IsNumber({}, { message: 'El campo "stock" debe ser un número.' })
  @IsNotEmpty({ message: 'El campo "stock" es obligatorio.' })
  @Min(0, { message: 'El campo "stock" no puede ser menor que 0.' })
  stock: number;

  @IsNumber({}, { message: 'El campo "price" debe ser un número.' })
  @IsNotEmpty({ message: 'El campo "price" es obligatorio.' })
  @Min(0, { message: 'El campo "price" no puede ser menor que 0.' })
  price: number;

  @IsNumber({}, { message: 'El campo "comparePrice" debe ser un número.' })
  @IsNotEmpty({ message: 'El campo "comparePrice" es obligatorio.' })
  @Min(0, { message: 'El campo "comparePrice" no puede ser menor que 0.' })
  comparePrice: number;

  @IsString({
    message: 'El campo "barcode" debe ser una cadena de caracteres.',
  })
  @IsNotEmpty({ message: 'El campo "barcode" es obligatorio.' })
  barcode: string;
}
