function tickets(arr,criteria){
class Ticket {
    constructor(destination,price,status){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    compareTo(other,criteria){
    if(typeof this[criteria] === 'string'){
        return this[criteria].localeCompare(other[criteria])
    }else {
        return this[criteria] - other[criteria];
    }
    }
}
let result = []
for(let entry of arr){
   let [destination,price,status] = entry.split("|");
   price = Number(price);
   result.push(new Ticket(destination,price,status))
}
result.sort((a,b) => a.compareTo(b,criteria));
return result
}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)
