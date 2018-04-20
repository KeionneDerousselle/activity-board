export const toCurrency = (price, locale, currency) =>
  new Intl.NumberFormat(
    (locale || 'en-US'),
    {
      style: 'currency',
      currency: (currency || 'USD')
    }
  ).format(price);

export const toNumber = (currency) => currency.replace(/[^0-9\.-]+/g, '');
