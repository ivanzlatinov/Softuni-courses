function argument(...params){
let types = {}
    for(let arg of params){
    let  type = typeof arg
        console.log(`${type}: ${arg}`);
    if(types[type] == undefined){
        types[type] = 1
    }else {
        types[type] += 1;
    }
}
let final = Object.entries(types).sort((a,b) => b[1] - a[1]);
for(let x of final){
    console.log(`${x[0]} = ${x[1]}`)
}

}
argument(1,2,3,'c','d')