

//variable declaration
//var companyName
//value assigning to the variable
//companyName = 'Testleaf'

//var-> can be redeclared and reassigned

var companyName = "Testleaf"
var companyName = "qeagle" //redeclared
companyName = 'HCL' //reassigned
companyName = 345678 //js is dynamic typing
console.log(companyName); 

// let-> cannot be redeclared but can be reassigned

let course = 'Selenium'

course =  'playwright' //reassigned

//let course = 'playwright' //redeclared
console.log(course); //SyntaxError: Identifier 'course' has already been declared


//const -> cannot be redeclared and cannot be reassigned

const num = 3.14
//num = 2.75 //TypeError: Assignment to constant variable.

console.log(num);


