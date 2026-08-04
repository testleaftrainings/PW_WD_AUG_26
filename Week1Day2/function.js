// function is a reusable block of code
// that performs a specific task
//when it's called

function greet(){
    let a = 3
    let b = 5
    console.log(a+b);
    
}
greet()

let num = 7;
let result = num.toString().padStart(2, "0");

console.log(result); // 07

//More examples:

let num = 45;

console.log(num.toString().padStart(4, "0")); // 0045
console.log(num.toString().padStart(6, "0")); // 000045