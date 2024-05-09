export function customParseFloat(cellValue: string | number): number {
  if (typeof cellValue === 'number') {
    return cellValue;
  }

  const numericValue = parseFloat(String(cellValue).replace(/[^\d.-]/g, ''));
  return isNaN(numericValue) ? 0 : numericValue;
}
