function aggr(arr) {
let sum = 0;
let concat = '';
let inverseSum = 0;
for(let el of arr) {
    sum += el; 
    concat += (el.toString());
}
for(let i = 0; i< arr.length;i++){
    inverseSum += 1 / arr[i];
}
console.log(sum);
console.log(inverseSum);
console.log(concat);


}
aggr([1, 2, 3])