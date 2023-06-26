function solve() {

let infoBox = document.querySelector('.info');
let departBtn = document.getElementById('depart');
let arriveBtn = document.getElementById('arrive');

    let busStop = {
        next: `depot`
    }
    
    function depart() {
        departBtn.disabled = true;
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`)
        .then(response => response.json())
        .then(data => {
            busStop = JSON.parse(JSON.stringify(data));
            infoBox.textContent = `Next stop ${busStop.name}`
        }).catch(err => {
            infoBox.textContent = `Error`;
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        })

        arriveBtn.disabled = false;

    }


    function arrive() {
        arriveBtn.disabled = true;
        infoBox.textContent = `Arriving at ${busStop.name}`;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();