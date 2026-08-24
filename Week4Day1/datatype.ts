//undefined

let success:undefined
console.log(success);


//any : it accepts any datatype

let value:any = 1234
value = 'welcome'
value = true
console.log(typeof value);

//unknown : this also accepts all datatype and checks the type 
// before performing any operation

let info:unknown

info = 'playwright'
info = 100

//console.log(info+30);


if(typeof info === 'number'){
    console.log(info+20);
    
}else{
    console.log('info is not a number');
    
}
//never
function infiniteLoop(): never{
    while(true){
        console.log('Running..');
        
        
    }
}
//infiniteLoop()

//tuple - it's a fixed length of array  with specified datatype for each element

let coursedetails:[string,number,boolean]=['playwright',100,true]
console.log(coursedetails[0]);
//coursedetails.push('selenium',100)
coursedetails.pop()
console.log(coursedetails);
console.log(coursedetails[2]);


// console.log(coursedetails);
// console.log(coursedetails[3]);


