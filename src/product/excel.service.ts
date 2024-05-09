import { Injectable } from '@nestjs/common';

import * as ExcelJS from 'exceljs';
import { downloadExcel } from 'src/helpers/excel-downloader';

@Injectable()
export class ExcelService {
  async readExcel(
    filePath = 'https://docs.google.com/spreadsheets/d/1Puy7ZwVWkri384hMg5EYVga7uaVNjIHM/export?format=xlsx',
  ): Promise<any[][]> {
    const buffer = await downloadExcel(filePath);

    if (!buffer) return [];

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);

    const worksheet = workbook.worksheets[0];
    const rows: any[][] = [];

    worksheet.eachRow((row, rowNumber) => {
      const rowData: any[] = [];
      row.eachCell((cell) => {
        rowData.push(cell.value);
      });
      rows.push(rowData);
    });

    return rows;
  }
}
