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

class Traveller extends Person {
    constructor(name, age, homelocation){
        super(name,age);
        this.homelocation = homelocation;
    }
    getDescription(){

        let Description = super.getDescription();

        if(!!this.homelocation){
            Description =  `${this.name}, ${this.age} years old lives in ${this.homelocation}.`
        }
        
        return Description;

    }
}
const me = new Traveller("Andrew",23);
console.log(me.getDescription());