function towns(arr){
let legend = arr.shift();
let result = [];
for(let item of arr){
    let current = {};
    let [twn,latitude,lngtd] = item.split(" | ");
    let town = twn.split("| ")[1];
    let longitude = Number(lngtd.split(" |")[0]);
    latitude = + latitude
current.Town = town;
current.Latitude = +(latitude.toFixed(2));
current.Longitude = +(longitude.toFixed(2));
result.push(current);
}
console.log(JSON.stringify(result))
}
towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)