export const calcTotalPrice = cart => {
  return cart.reduce((talle, cartItem) => {
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
};
