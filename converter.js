// Convert thai bath to us dolar
function converter(currency) {
  return "$" + currency * exchangeRate('th', 'usd')
}

function exchangeRate(from, to) {
  return 0.03
}

module.exports = {
  converter: converter,
  exchangeRate: exchangeRate
}
