let arr = [1,2,3,4,5,6]
let [a,b,c,...rest] = arr;
console.log(a,b,c);
console.log(rest);




let arr2 = [10,20,30,40,50]
let ab = arr2.find(x => x > 25);
console.log(ab)


let arr3 =[10,20,30,40,50,60] 
let reduce = arr3.reduce((acc,val) => acc + val,0);
console.log(reduce)