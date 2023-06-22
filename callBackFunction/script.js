//callback function : a function which is passed as an argument to another function.
// one of the way which can help to perfom async programming in javascript.

// function callbackfunction(){
//     console.log("callback function called");
// }

// function myFun(){
    
//      callbackfunction();
//     console.log("My function called");
    
// }
    
// myFun(callbackfunction);


function getData(){
    setTimeout(()=>{
        const data={massage : "Hello World!"};
        dataProcessed(data);
    },4000)
}

function dataProcessed(data){
    console.log(data.massage);
}

getData(dataProcessed);