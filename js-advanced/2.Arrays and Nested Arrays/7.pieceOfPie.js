function pieceOfPie(arr,start,end){
let startInd = arr.indexOf(start);
let endInd = arr.indexOf(end);
return arr.slice(startInd,endInd + 1);
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)