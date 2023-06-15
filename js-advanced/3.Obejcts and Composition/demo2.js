let count = 5;
const parser = {
 increment() { count++; },
 decrement() { count--; },
 reset() {count = 0; },
 default() {console.log('default case')}
}
const command = 'asdasd'
parser[command] ? parser['increment']() : parser.default(); //default case


const action = parser['increment'];
if(typeof action === 'function') {
    parser['increment']();
}else {
    // default case
}
console.log(count)