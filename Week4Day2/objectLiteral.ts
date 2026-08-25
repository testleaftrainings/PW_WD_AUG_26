// let firstname = 'yuvarani'
// let lastName ='s'
// let mobNumber = 5670987659

/* object literal is the simplest way to create object in TS, it's
collection of key-value pairs enclosed within curly braces{} */

//impliclit inference

let user1 ={ //user1 is the object
    firstName: 'Yuvarani', //firstName is key and 'yuvarani -->value
    lastName: 's',
    mobNumber : 8908567979
}

console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.mobNumber);

//explicit inference in object

let user2 :{
    firstName: string, //firstName is key and string -->value
    lastName: string,
    mobNumber : number
}={
   firstName:'Yuvarani',
   lastName:'s',
   mobNumber:809856789 
}
console.log(user2.firstName);

let user3 :{
    firstName: string, //firstName is key and string -->value
    lastName: string,
    "#mobNumber" : number
}={
   firstName:'Yuvarani',
   lastName:'s',
   "#mobNumber":809856789 
}

console.log(user3["#mobNumber"]);


