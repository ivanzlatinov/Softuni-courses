function biggestElement(matrix) {
let biggest = Number.MIN_SAFE_INTEGER;
    for(let row of matrix) {
    for(let element of row) {
        if(element > biggest) {
            biggest = element;
        }
    }
}
return biggest;
}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )