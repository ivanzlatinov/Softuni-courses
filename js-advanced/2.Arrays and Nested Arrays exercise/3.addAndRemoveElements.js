function addAndRemove(arr){
let current = 0;
let result = [];
for(let i = 0; i < arr.length;i++){
    if(arr[i] == 'add'){

        current++;
     result.push(current);
    }else if(arr[i] == 'remove'){
        current++;
        result.pop();
    }
}
if(result.length >= 1) {
for(let a of result) {
    console.log(a);
}
}else {
    console.log(`Empty`);
}
}
addAndRemove(['remove', 
'add', 
'add', 
'add']
)