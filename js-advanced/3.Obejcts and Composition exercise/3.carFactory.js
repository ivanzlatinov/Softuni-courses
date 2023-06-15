function carFactory(car){
let result = {}
result.model = car.model    
let power = car.power
if(power <= 90){
result.engine = {power: 90,volume: 1800}
    }else if(power > 90 && power <= 120){
        result.engine = {power: 120,volume: 2400}
    }else if(power > 120){
        result.engine = {power: 200,volume: 3500}
    }
    let type = car.carriage;
    let color = car.color;
    result.carriage = {type: type,color: color};
    let wheelsize = +car.wheelsize
    wheelsize % 2 == 0 ? wheelsize -= 1 : wheelsize;
    result.wheels = Array(4).fill(wheelsize);
    
    return result
    
}
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

)