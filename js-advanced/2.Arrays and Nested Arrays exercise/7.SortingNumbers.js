/*function sorting(arr){
let result = [];
for(let i = 0; i < arr.length;i++){
    let smallestNum = arr.reduce(function (accumulatedValue, currentValue) {
        return Math.min(accumulatedValue, currentValue);
      });
      result.push(smallestNum);
      let indSmallest = arr.indexOf(smallestNum);
      arr.splice(indSmallest,1);

    let largestNum = arr.reduce(function (accumulatedValue, currentValue) {
    return Math.max(accumulatedValue, currentValue);
  });
  result.push(largestNum);
  let ind = arr.indexOf(largestNum);
  arr.splice(ind,1);
  
}
result.push(arr[0]);
result.push(arr[1]);
return result
}
*/
function sorting1(arr){
let result = []
    let sorted = arr.sort((a,b) => a - b);
while(arr.length != 0) {
    let small = arr.shift();
    result.push(small)
    let big  = arr.pop();
    result.push(big);
}
return result
}
sorting1([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
