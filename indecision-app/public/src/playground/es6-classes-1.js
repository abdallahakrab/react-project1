class Person {
    constructor(name, age=0){
        this.name = name;
        this.age = age;
    } 
      methodTrial() {
        return "hello";
    }
     getDescription(){
         return `My name is ${this.name} and my age is ${this.age}`;
     }

};  

const me = new Person("Andrew");
console.log(me.getDescription());