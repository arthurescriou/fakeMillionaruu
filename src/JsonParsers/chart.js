module.exports = {
  requestChart: function (pair_currency, period, start, end) {
    return {
      params: {
        pair_currency:pair_currency,
        period:period,
        start:start,
        end:end
      }
    };
  }
}
