import { square, add } from  './utils.js';  // ./ brings us to the current file directory 

import {isAdult, canDrive} from './person.js';

console.log("from app.js");

console.log(square(3));

console.log(add(100,23));

console.log(isAdult(22));
console.log(canDrive(15));