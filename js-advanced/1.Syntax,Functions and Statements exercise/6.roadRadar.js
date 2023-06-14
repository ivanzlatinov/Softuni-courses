function radar(speed,area){
    switch(area) {
    case "motorway":
    if(speed > 130) {
    let overLimit = speed - 130;
    let status = '';
    if(overLimit  <= 20 ) {
        status = 'speeding'
    }else if(overLimit <= 40) {
       status = 'excessive speeding';
    }else if(overLimit > 40) {
        status = 'reckless driving';
    }
    console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 130 - ${status}`) 
    }else{
console.log(`Driving ${speed} km/h in a 130 zone`)
    }
    break;
    case "interstate":
    if(speed > 90) {
        let overLimit = speed - 90;
        let status = '';
        if(overLimit  <= 20 ) {
            status = 'speeding'
        }else if(overLimit <= 40) {
           status = 'excessive speeding';
        }else if(overLimit > 40) {
            status = 'reckless driving';
        }
        console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 90 - ${status}`)  
    }else{
        console.log(`Driving ${speed} km/h in a 90 zone`)
    }
    break;
    case "city":
        if(speed > 50) {
            let overLimit = speed - 50;
            let status = '';
            if(overLimit  <= 20 ) {
                status = 'speeding'
            }else if(overLimit <= 40) {
               status = 'excessive speeding';
            }else if(overLimit > 40) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 50 - ${status}`) 
        }else{
            console.log(`Driving ${speed} km/h in a 50 zone`) 
        }
    break;
    case "residential":
        if(speed > 20) {
            let overLimit = speed - 20;
            let status = '';
            if(overLimit  <= 20 ) {
                status = 'speeding'
            }else if(overLimit <= 40) {
               status = 'excessive speeding';
            }else if(overLimit > 40) {
                status = 'reckless driving';
            }
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 20 - ${status}`) 
        }else{
            console.log(`Driving ${speed} km/h in a 20 zone`)  
        }
    break;
    
}
}
radar(40, 'city')