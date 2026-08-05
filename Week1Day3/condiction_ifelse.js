//if statement : execute a block of code only if condiction is true

let a = 10
if(a==10){
    console.log('statement 1 is executed');
    
}

// if_else : executes one block of code if the condiction is true 

let age = 15

if(age>18){
    console.log('Eligible to vote');
    
}else{
    console.log('Not eligible to vote');
    
}

//else if : used to check multiple condiction

function student(marks){
    if(marks>80){
        console.log('distinction');
        
    }
    else if(marks>60){
        console.log('First class');
        
    }
    else{
        console.log('second class');
        
    }
}

student(40)