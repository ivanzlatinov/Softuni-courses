function magic(matrix){
let isMagical = true;
let firstRow = 0;
for(let i = 0; i < matrix.length; i++){
firstRow += matrix[0][i]
}
for(let row = 0; row < matrix.length; row++){
    let rowSum = matrix[row].reduce((a,b) => a + b,0);
    if(rowSum != firstRow){
isMagical = false;
break;
    }
    let collumSum = 0;
    for(let collum = 0; collum < matrix[row].length; collum++){
      collumSum += matrix[collum][row];
        console.log(collumSum)
       
    }
    if(collumSum != firstRow){
        isMagical = false;
        break;
    }
}
console.log(isMagical)
}
magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )