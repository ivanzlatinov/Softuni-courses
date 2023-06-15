 function collectTaxes(){
    this.treasury = Math.floor(this.treasury += this.population * this.taxRate)
}
function applyGrowth(percentage){
  this.population = Math.floor(this.population + (this.population * (percentage/ 100)))
}
 function applyRecession(percentage){
this.treasury = Math.floor(this.treasury - (this.treasury * (percentage / 100)));
}

function cityTaxes(name,population,treasury){
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession 
    }
    return city;
}
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
