export default function (integer, pdf) {
  let formatter = '';
  if (pdf) {
    formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });
  } else {
    formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2,
    });
  }
  const currency = formatter.format(integer);
  return currency;
}
