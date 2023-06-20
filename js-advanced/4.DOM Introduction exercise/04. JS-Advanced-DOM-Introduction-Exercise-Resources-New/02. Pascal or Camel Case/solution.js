function solve() {
  let input = document.getElementById('text').value;
  let wantedCase = document.getElementById('naming-convention').value;
let text = input.toLowerCase();
  if(wantedCase == 'Camel Case'){
    let res = text.split(/\s/g);
let result = [res[0]]
for(let i = 1; i < res.length;i++){
    let splited = res[i].split("")
    splited[0] = splited[0].toUpperCase();
    let joined = splited.join("");
    result.push(joined)
}
document.getElementById('result').textContent = result.join("")
  }else if(wantedCase == 'Pascal Case'){
    let res = text.split(/\s/g);
    let result = [];
    for(let i = 0; i < res.length;i++){
        let splited = res[i].split("")
        splited[0] = splited[0].toUpperCase();
        let joined = splited.join("");
        result.push(joined)
    }
    document.getElementById('result').textContent = result.join("");
  }else {
 document.getElementById('result').textContent = 'Error!'
  }

}