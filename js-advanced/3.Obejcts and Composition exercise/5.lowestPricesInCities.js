function lowestPrice(arr){
    let result = {};
    for(let item of arr){
        let [town,product,price] = item.split(" | ");
        price = +price;
        if(result.hasOwnProperty(product)){
         if(price < result[product].price) {  //current price < already existing price for product
             result[product].price = price;
             result[product].town = town;
         }
        }else {
            result[product] = {price,town};
            
        }
    }
for(let key in result){
    console.log(`${key} -> ${result[key].price} (${result[key].town})`)
}
}
lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)