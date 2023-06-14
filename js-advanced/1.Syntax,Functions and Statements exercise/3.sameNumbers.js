function sameNumbers(num){
let areSame = true;
let splited = num.toString().split("").map(Number);
let sum = 0;
for(let i = 0; i < splited.length;i++){
if(splited[i] !== splited[0]) {
areSame = false;
break;
}
}
for(let el of splited) {
    sum += el;
}
if(areSame) {
    console.log('true')
}else {
    console.log('false')
}
console.log(sum)
}
sameNumbers(2222222)