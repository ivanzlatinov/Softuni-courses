function days(month,year){
let result = new Date(year,month,0).getDate();
console.log(result)
}
days(1, 2012)