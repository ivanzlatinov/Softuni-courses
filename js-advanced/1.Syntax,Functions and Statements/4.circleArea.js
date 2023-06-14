function circleArea(input){

    if(typeof(input) != 'number') {
    console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
}else {
    let result = (Math.pow(input,2) * Math.PI).toFixed(2);
    console.log(result)
}
}
circleArea(5);




