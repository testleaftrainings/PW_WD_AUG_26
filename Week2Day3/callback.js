
function greet(name, x,y){
    console.log('Hello' + name);
    x()
    y('successfully')
    
}

function done(status){
    console.log('Task is completed ' + status);
    //y()
    
}

function saveHistory(){
    console.log('History saved successfully');
    
}

greet('Testleaf',saveHistory,done)