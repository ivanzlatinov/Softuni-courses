function extract(content) {
const text = document.getElementById(content).textContent;
let result = '';
const pattern = /\(([A-Za-z ]*)\)/g;
let match = pattern.exec(text)
while(match != null){
result += match[1] + '; ';

match = pattern.exec(text)
}
return result;
}