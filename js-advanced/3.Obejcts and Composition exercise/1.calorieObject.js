function calorieObject(arr){
let result = {};
for(let i = 0; i< arr.length;i++){
    if(i % 2 == 0){
    result[arr[i]] = +arr[i + 1];
    }
     
}
console.log(result)
}
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);