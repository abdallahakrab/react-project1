"use strict";

// arrow functions challenge parrt 2 : 

var newObject = {
    numbers: [2, 4, 6],
    multiplier: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (result) {
            return result * _this.multiplier;
        });
    }
};

console.log(newObject.multiply());
