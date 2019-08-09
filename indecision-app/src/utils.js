//will contain utility functions 

// will not be seen if:
//not picked up because its not the entry point of our webpack app
//not imported from that entry point or any file this entry point imports 


console.log("utils.js is running");

const square = x => x * x ;
const add = (a,b) => a + b;
const subtract = (a,b) => a-b;

export { square, add, subtract as default  }; // 1st way for default 