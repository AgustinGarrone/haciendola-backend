import axios from 'axios';

export const downloadExcel = async (filePath: string) => {
  const response = await axios.get(filePath, { responseType: 'arraybuffer' });
  const buffer = Buffer.from(response.data);

  return buffer;
};
