function neighbours(matrix){
let pairs = 0;

for(let row = 0; row < matrix.length;row++) {
    for(let c = 0; c < matrix[row].length - 1;c++){
        if(matrix[row][c] === matrix[row][c + 1]) {
            pairs++
        }
    }
}


const rowSize = matrix[0].length

for(let colIndex = 0; colIndex < rowSize ; colIndex++){
    for(let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++){
        if(matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
            pairs++
        }
    }
}

console.log(pairs)
}
neighbours([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)