function processOdd(arr){
let filtered = arr.filter((x,i) => i % 2 != 0);
let  doubled = filtered.map(x => x * 2);
console.log( doubled.reverse().join(" "));
}
processOdd([3, 0, 10, 4, 7, 3])