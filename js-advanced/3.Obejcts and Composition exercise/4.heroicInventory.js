function heroicInv(arr){
let heroes = []
    for(let hero of arr){
        let tokens = hero.split(" / ");
        let currentHero = {};
        currentHero.name = tokens[0];
        currentHero.level = Number(tokens[1]);
        let items = tokens[2];
        if(items === undefined){
        currentHero.items = [];
        }else {
            items = items.split(", ");
            currentHero.items = items;
        }
    heroes.push(currentHero);
    }
console.log(JSON.stringify(heroes));
}
heroicInv(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)