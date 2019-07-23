// arrow functions challenge parrt 2 : 

const newObject = {
    numbers: [2,4,6],
    multiplier: 2,
    multiply() {
        return this.numbers.map((result) =>  result * this.multiplier )
    
}
}


console.log(newObject.multiply());






    