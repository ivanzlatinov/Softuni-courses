function increase(arr){
let  result = []
    let currentBiggest = Number.MIN_SAFE_INTEGER;
for(let a of arr){
    if(a >= currentBiggest) {
        result.push(a);
        currentBiggest = a;
    }
}
 return result
}
increase([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )