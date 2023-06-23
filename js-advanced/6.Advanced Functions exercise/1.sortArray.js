function sortArr(arr,str){
    str == 'asc'? arr.sort((a,b) => a - b): arr.sort((a,b) => b - a);
    return arr
}
sortArr([14, 7, 17, 6, 8], 'desc')