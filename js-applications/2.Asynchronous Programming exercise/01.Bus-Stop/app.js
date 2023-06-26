function getInfo() {
    let inputEl = document.getElementById('stopId');
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let stopNameEl = document.getElementById('stopName');
    let bussesUl = document.getElementById('buses');

      fetch(`${baseUrl}/${inputEl.value}`)
    .then(res => res.json())
    .then(data => {
        let buses = data.buses;
        let name  = data.name;
        stopNameEl.textContent = name;
        bussesUl.innerHTML = '';
        Object.keys(buses).forEach(bus => {
            let liEl = document.createElement('li');
            liEl.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
            bussesUl.appendChild(liEl);
        })
    })
    .catch(err => {
     stopNameEl.textContent = `Error`;
     bussesUl.innerHTML = '';
    })
}