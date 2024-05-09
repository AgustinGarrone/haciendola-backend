import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import { downloadExcel } from 'src/helpers/excel-downloader';
import { ProductDTO } from './dto/product.dto';
import { customParseFloat } from 'src/helpers/number.helper';

@Injectable()
export class ExcelService {
  async readExcel(
    filePath = 'https://docs.google.com/spreadsheets/d/1Puy7ZwVWkri384hMg5EYVga7uaVNjIHM/export?format=xlsx',
  ): Promise<ProductDTO[]> {
    const buffer = await downloadExcel(filePath);
    if (!buffer) return [];

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);

    const worksheet = workbook.worksheets[0];
    const productsToSave: ProductDTO[] = [];

    worksheet.eachRow(async (row) => {
      const productData: ProductDTO = {
        handle: row.getCell(1).text,
        title: row.getCell(2).text,
        description: row.getCell(3).text,
        SKU: row.getCell(4).text,
        grams: customParseFloat(row.getCell(5).text),
        stock: customParseFloat(row.getCell(6).text),
        price: customParseFloat(row.getCell(7).text),
        comparePrice: customParseFloat(row.getCell(8).text),
        barcode: row.getCell(9).text,
        updatedAt: new Date(),
        createdAt: new Date(),
      };
      productsToSave.push(productData);
    });
    return productsToSave;
  }
}
