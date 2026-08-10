//string literal

let companyName = 'Testleaf'
let firstName = 'Testleaf'

console.log(typeof companyName);


console.log(companyName == firstName);
console.log(companyName === firstName);


//object literal

let companyObj = new String('Testleaf')
let firstObj = new String('Testleaf')

console.log(typeof companyObj);


console.log(companyName == companyObj);


console.log(companyObj == firstObj);
console.log(companyObj === firstObj);

//Escape sequence
/* \' - single quote
\n - new line 
\t - tab space */
let testEsc = 'it\'s a \n regression \t testing \"double quote\"'
console.log(testEsc);

//concatenation

let testCase = 'Create a new Lead'
let testCaseId = 123

let result = testCase + "-" + testCaseId
//console.log(result);

//Template literal

// `${}`

let result1 = `${testCase} - ${testCaseId}`
console.log(result1);

//string properties and methods

let course = 'Playwright'
console.log(`The length of the string is ${course.length}`);

//charAt()
console.log(`The charAt of 3 of the string is ${course.charAt(3)}`);

//indexof()
console.log(`The index of 'y' of the string is ${course.indexOf('w')}`);

let company = 'testleaf'
console.log(`The index of 't' of the string is ${company.indexOf('t',2)}`);







