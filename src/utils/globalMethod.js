export const handleCurrencyFormat = (currency) => {
  const currencyFormat = new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
  }).format(currency);
  return currencyFormat;
};
