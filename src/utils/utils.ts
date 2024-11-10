export const stringToRupiah = (value: string) => {
  return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
};
