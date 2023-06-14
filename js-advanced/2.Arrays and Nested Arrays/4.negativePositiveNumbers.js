function numbers(arr){
let result = [];
for(let num of arr) {
    if(num >= 0) {
        result.push(num)
    }else {
        result.unshift(num)
    }
}
for(let num of result) {
console.log(num)
}
}
numbers([7, -2, 8, 9])
