// Here 3 method to overcome the promise chaining problem that :
// 1.promise.all
// 2.promise.allSettled
// 3.promise.race

//Promise Chaining with dependent events->
// 1.project round->
// 2.Technical Round
// 3.Hr Round 
// Finally ->You will be getting offer 


// 1.Project Round
let doProject=new Promise((resolve, reject) =>{
    //Doing the project 
    let isProjectDone=true;
    if(isProjectDone){
        resolve("Project is Done")
    }else{
        reject("Project is Not done")
    }
});

//2.Technical Round->create a promise 
let attendTechnical=new Promise((resolve,reject)=>{
    let isAttendingTechround=true;
    if(isAttendingTechround){
        resolve("Technical ROund is completed successfully")
    }else{
        reject("Technical ROund is Not completed ")
    }
})


//3rd promise->
let attendHrRound=new Promise((resolve,reject)=>{
   //Attending Hr round
   let isAttendingHrround=true;
   if(isAttendingHrround){
    resolve("HR Round is completed successfully")
   }else{
    reject("HR Round is not completed successfully")
   }
})


//Call the promise and chained this promised one inside other
 
// doProject.then((msg)=>{
//     let themsg=`${msg}`;
//     attendTechnical.then((msg)=>{
//         themsg+=`${msg}`;
//         attendHrRound.then((msg)=>{
//             themsg+=`${msg}`;
//             console.log(`${themsg} . Finally You have completed all ROunds.Please wait for results...`)   
//         })
//         .catch((msg)=>{
//             console.log(`${msg}`)
//         })
//         .catch((msg)=>{
//             console.log(`${msg}`)
//         })
//         .catch((msg)=>{
//             console.log(`${msg}`)
//         });
//     });
// });


// these are the caling is replaceed with a single prmoise.all...
// 1.
const promiseCollection = Promise.all([doProject, attendTechnical, attendHrRound]);
console.log(promiseCollection);
// it returns a new array with all value if any of one rejected then overall prmoise will be reject. 


// 2.
const promiseCollectionSeteled = Promise.allSettled([doProject, attendTechnical, attendHrRound]);
console.log(promiseCollectionSeteled);
//it gives the return data with status -fulfilled or rejected and value of array 

// 3.
const racepromiseCollection = new Promise.race([doProject, attendTechnical, attendHrRound])
console.log(racepromiseCollection);
// it depends on time delay to execute the function that wich ever function execute first whether it is fulfilled or rejected will be execeute first and exit immediately.