function town(arr){
    let towns = {};
    for(let i = 0; i < arr.length; i++){
        let [name,population] = arr[i].split(" <-> ");
        if(towns.hasOwnProperty(name)){
           towns[name] +=  +population
        }else{
            towns[name] =  +population
        }
        
    }
    
    for(let [name,pop] of Object.entries(towns)) {
        console.log(`${name} : ${pop}`)
    }

}
town(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)