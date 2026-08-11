//named function

launchApp()
function launchApp(){
    console.log('App launched');
    
}

//Function Expression

//login()
//console.log(login)
var login = function (){
    console.log('Login successful');
    
}
login()

//arrow function

let funArrow = () =>{
    console.log('Hello Team I am an arrow function');
    
}

funArrow()

const getTotalPrice = (price, tax)=> price+tax

const add =(a,b)=>{
    return a+b
}
console.log(add(15,25));


let priceValue = Number(process.argv[2])
let taxValue = Number(process.argv[3])

console.log(getTotalPrice(priceValue,taxValue));

//console.log(typeof funArrow());
