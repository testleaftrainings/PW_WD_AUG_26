// scope defines where a variable is accessible in your code

//global scope can be accesed anywhere

let y = 60
const a = 10
function test(){
    console.log('Accessing global variable inside the function' ,y);
    console.log('Accessing global variable inside the function' , a);
    
    }
    test()
    console.log('outside the function accessing global variable', a);

// function scope
//var is function scope

function demo(){
    var x = 20
    console.log('Accessing var inside the function ', x);

    if(true){
        let z = 50
        console.log('Accessing var inside the block' , x);
        console.log('Accessing let inide the block' , z);
        
        
    }
    console.log('Accessing z inside the function and outside the block' , z);
    
    
}
demo()
//console.log('Accessing var outside the function ' , x); //ReferenceError: x is not defined
//let and const is block scoped
//block {}


    