function attachEvents() {
    let buttonEl = document.getElementById('submit');
    let inputEl = document.getElementById('location');
    let divDisplay = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    let sunny = '&#x2600';
    let partlySunny = '&#x26C5';
    let overcast = '&#x2601';
    let rain = '&#x2614';
    let degrees = '&#176';
    let code = '';
    let divUpcoming = document.createElement('div');
    let divCurrent = document.createElement('div');

    buttonEl.addEventListener('click', (e) => {
    divUpcoming.innerHTML = '' ;
    divCurrent.innerHTML = '';
    
    divUpcoming.setAttribute('class', 'forecast-info');
    divCurrent.setAttribute('class', 'forecasts');

    divDisplay.style.display = 'inline';

    fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
    .then(res => res.json())
    .then(data => {
        let wanted = data.find(x => x.name == inputEl.value);
          code = wanted.code;
          
          
        fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
    .then(res => res.json())
    .then(data => {
        let spanGroup = document.createElement('span');
        let conditionSpan = document.createElement('span');
        let temperatureSpan = document.createElement('span');
        let locationSpan = document.createElement('span');
        let spanWithIcon = document.createElement('span');
        
        spanWithIcon.setAttribute('class', 'condition symbol');
        spanGroup.setAttribute('class', 'condition');
        locationSpan.setAttribute('class', 'forecast-data');
        temperatureSpan.setAttribute('class', 'forecast-data');
        conditionSpan.setAttribute('class', 'forecast-data')
              
        locationSpan.textContent = data.name;
        temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
        conditionSpan.textContent = data.forecast.condition;

        if(data.forecast.condition == 'Sunny'){
            spanWithIcon.innerHTML = sunny;
        }else if(data.forecast.condition == 'Partly sunny'){
            spanWithIcon.innerHTML = partlySunny;
        }else if(data.forecast.condition == 'Overcast'){
            spanWithIcon.innerHTML = overcast;
        }else if(data.forecast.condition == 'Rain'){
            spanWithIcon.innerHTML = rain;
        }
       spanGroup.appendChild(locationSpan);
       spanGroup.appendChild(temperatureSpan);
       spanGroup.appendChild(conditionSpan);
       divCurrent.appendChild(spanWithIcon);
       divCurrent.appendChild(spanGroup);

       currentDiv.appendChild(divCurrent);
    })
   
    fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
    .then(res => res.json())
    .then(data => {
        let nextDays = data.forecast;
        nextDays.forEach(x => {
            let spanGroup = document.createElement('span');
        let conditionSpan = document.createElement('span');
        let temperatureSpan = document.createElement('span');
        
        let spanWithIcon = document.createElement('span');
        
        spanWithIcon.setAttribute('class', 'symbol');
        spanGroup.setAttribute('class', 'upcoming');
        
        temperatureSpan.setAttribute('class', 'forecast-data');
        conditionSpan.setAttribute('class', 'forecast-data')

        
        temperatureSpan.innerHTML = `${x.low}${degrees}/${x.high}${degrees}`;
        conditionSpan.textContent = x.condition;

        if(x.condition == 'Sunny'){
            spanWithIcon.innerHTML = sunny;
        }else if(x.condition == 'Partly sunny'){
            spanWithIcon.innerHTML = partlySunny;
        }else if(x.condition == 'Overcast'){
            spanWithIcon.innerHTML = overcast;
        }else if(x.condition == 'Rain'){
            spanWithIcon.innerHTML = rain;
        }
       spanGroup.appendChild(spanWithIcon);
       spanGroup.appendChild(temperatureSpan);
       spanGroup.appendChild(conditionSpan);
        divUpcoming.appendChild(spanGroup);
        upcomingDiv.appendChild(divUpcoming);

            
        });
    })
        
    })
    .catch(err => console.log(err))

    });
    
    
}

attachEvents();