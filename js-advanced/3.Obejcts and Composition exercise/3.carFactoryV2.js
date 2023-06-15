function carFactory(car){
let engines = [{power: 90, volume: 1800},{power: 120,volume: 2400},{power: 200,volume:3500 } ];
let carriages  = [{type: 'hatchback', color: car.color},{type: "coupe",color: car.color}];
let wheelsize = +car.wheelsize
    wheelsize % 2 == 0 ? wheelsize -= 1 : wheelsize;
    return {
        model: car.model,
        engine: engines.filter(e => e.power >= car.power)[0],
        carriage: carriages.filter(c => c.type == car.carriage)[0],
        wheels: Array(4).fill(wheelsize),
    }
}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }

  )