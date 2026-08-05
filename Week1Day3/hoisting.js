/* 
hoisting is js default behaviour where variable and functions are moved 
top of their scope before the code is executed
 */


//var is hoisted and if you access it before initialization, js returns undefined
console.log(x);

var x = 10
console.log(x);

/* internally
var x
console.log(x);
x = 10 */

// let is histed but cant accessed before initialization, resulting in reference error
//console.log(y);

let y = 20 //ReferenceError: Cannot access 'y' before initialization
console.log(y);
y = 21
//(Temporal dead zone) : time period btw variable declaration and value assignment 

//const 

console.log(z);

const z = 30 //ReferenceError: Cannot access 'z' before initialization

/* 
internally
let z 
console.log(z)
z = 30 */