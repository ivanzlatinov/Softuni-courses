let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let row of matrix) {
  for (let collum of row) {
    console.log(collum);
  }
}
    console.log( '\n' +'----------------------' + '\n')
for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
  
    for (let collum = 0; collum < matrix[rowIndex].length; collum++) {
    console.log(matrix[rowIndex][collum]);
  }
}
