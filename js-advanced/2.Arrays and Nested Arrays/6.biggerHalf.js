function biggerHalf(arr){
let sorted = arr.sort((a,b) => a - b);
let result = arr.splice((arr.length / 2), arr.length);
return result
}
biggerHalf([4, 7, 2, 5])