function smallest(arr) {
let result = []
for(let i = 0; i < 2; i++) {   
let min = Math.min(...arr);
let indexSmallest = arr.indexOf(min);
arr.splice(indexSmallest,1);
result.push(min)
}
console.log(result.join(" "))
}
smallest([30, 15, 50, 5])