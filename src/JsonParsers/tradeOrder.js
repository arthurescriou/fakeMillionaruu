module.exports = {
  addOrder: function(buy, id, qte, price, currency) {
    return {
      params: {
        id: id,
        buy: buy,
        currency: currency,
        price: price,
        quantity: qte
      }
    };
  }
}
