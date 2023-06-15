function store(arr){
    let obj = {};
    for(let item of arr){
        let [product,price] = item.split(" : ");
      let letter = product[0]
       if(obj.hasOwnProperty(letter) == false){
           obj[letter] = {}  //pri iterirane vliza pri purvata bukva
       }
        obj[letter][product] = price;
    }
let sortedLetters = Object.keys(obj).sort((a,b) => a.localeCompare(b));
for(const letter of sortedLetters){
    console.log(letter);
    let sortedProducts = Object.keys(obj[letter]).sort((a,b) => a.localeCompare(b))
    for(let sorted of sortedProducts){
        console.log(`  ${sorted}: ${obj[letter][sorted]}`)
    }
}

}
store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)