export const formatPrice = (price: number) => {
  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 3,
    maximumSignificantDigits: 3,
  }).format(price);

  return { formattedPrice: `${formattedPrice}.000` };
};
