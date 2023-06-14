function cooking(num,op1,op2,op3,op4,op5,op6){
let numb = +(num);
let arr = [op1,op2,op3,op4,op5,op6];
for(let el of arr) {
    if(el === 'chop') {
        numb /= 2;
        console.log(numb);
    }else if(el === 'dice') {
        numb = Math.sqrt(numb);
        console.log(numb);
    }else if(el === 'spice') {
        numb += 1;
        console.log(numb);
    }else if(el === 'bake') {
        numb *= 3;
        console.log(numb);
    }else if(el === 'fillet') {
        numb -= (numb / 5);
        console.log(numb);
    }
}
}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')