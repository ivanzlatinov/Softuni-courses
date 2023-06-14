function list(arr){
let sorted = arr.sort((a,b) => a.localeCompare(b));
for(let i = 1; i <= sorted.length;i++){
    console.log(`${i}.${sorted[i - 1]}`);
}
}
list(["John", "Bob", "Christina", "Ema"])