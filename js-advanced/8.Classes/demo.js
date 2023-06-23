class Person {
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
    sayHello(){
        console.log(`${this.name} says hi`)
    }
}
let guy1 = new Person('Peter',23);
guy1.sayHello();