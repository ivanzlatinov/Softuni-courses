function fruit(type,weighGr,priceKg){
console.log(`I need $${((weighGr / 1000) * priceKg).toFixed(2)} to buy ${(weighGr / 1000).toFixed(2)} kilograms ${type}.`)
}
fruit('orange', 2500, 1.80)