const person = {
    name: "peter",
    age(myAge){
        return `${this.name} ${this.lastName}'s age is ${myAge}`
    }


}
let lastName  = 'petrov'
person.lastName = lastName
console.log(person.name);
console.log(person.age(20))

const dictionary = {
    'bill' : '123435454',
    'john' : '1234243435',
    'bob' : '5456657542343'
}
for(let key in dictionary) {
    console.log(`${key} -> ${dictionary[key]}`)
}