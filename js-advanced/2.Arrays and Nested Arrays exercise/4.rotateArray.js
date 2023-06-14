function rotate(arr,num){
for(let i = 0; i < num;i++){
    let lastTofirst = arr.pop();
    arr.unshift(lastTofirst);
}
console.log(arr.join(" "))
}
rotate(['1', 
'2', 
'3', 
'4'], 
2
)