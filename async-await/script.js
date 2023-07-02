//Async Await is a advanced method to handel the asynchronous programming in javascript.
// Async -> return promise only 
// and promise need to be handel by await.


// making a cocktail juice : example 
// steps : buy a fruits , wash it , cut and peel , add it in mixer , process it , and deliver it.  

function buyFruits(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(console.log("But APPLE , MANGO , STRAWBERRY for juice"));
        }, 3000);
    })
}
function washTheFruits(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(console.log("Wash the fruits properly before cutting them"));
        }, 1000);
    })
}
function cutAndPeel(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(console.log("Cut and Peel the Fruits!"));
        }, 4000);
    })
}
function addToMixer(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(console.log("add pieces into the mixer for process"));
        }, 1000);
    })
}
function process(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(console.log("ON the mixer and make it juicyyy!!"));
        }, 8000);
    })
}
function deliverJuice(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(console.log("Fill the glass and deliver it 🧃"));
        }, 3000);
    })
}

async function executeProcess(){
    //here all the function will execute
    await buyFruits();
    await washTheFruits();
    await cutAndPeel();
    await addToMixer();
    await process();
    await deliverJuice();
}

executeProcess();

// if we won't use Async Await so it will console randomly according to the set time out....