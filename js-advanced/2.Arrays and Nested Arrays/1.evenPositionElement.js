function evenPos(arr){
let final = []
    for(let i = 0; i < arr.length;i++){
if(i % 2 == 0) {
    final.push(arr[i]);
}
}
console.log(final.join(" "))
}
evenPos(['20', '30', '40', '50', '60'])