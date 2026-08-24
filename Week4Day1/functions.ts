/* 
Function in typescript is a reusable block of code used to perform 
a specific task in TS allows us to define the data types of parameter 
and the return value its provides type safety and helps to catch the error
during compile time*/

function add(a:number,b:number):number{
    let c = a+b
    //console.log(c);
    return c
    
}

console.log(add(12,54))