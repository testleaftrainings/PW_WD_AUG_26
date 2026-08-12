//promise is used when a task takes time to finish

let myPromise = new Promise((resolve,reject)=>{

    let success = true

    if(success){
        resolve('Task completed successfully')
    }else{
        reject('Task failed')
    }
})

myPromise.then((message)=>{
    console.log(message);
    //console.log(error);
    
    
}).catch((error)=>{
    console.log(error);
    
})