//multiple then/catch called promises chain.

const prmoise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let data = 10;
        resolve(data);
    }, 2000);
})

prmoise.then((result)=>{
    console.log(result); //10
    return result*2;
}).then((result)=>{
    console.log(result);//20
    return result*2;
}).then((result)=>{
    console.log(result);//40
    return result*2;
}).then((result)=>{
    console.log(result);//80
    return result*2;
}).then((result)=>{
    console.log(result);//160
    return result*2;
}).catch((error)=>{
    console.log(error); //if any eeror comes
}).finally(()=>{
    console.log("finally promise chain ended sucessfully");
});



// Example 2 :
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
 
doProject.then((msg)=>{
    let themsg=`${msg}`;
    attendTechnical.then((msg)=>{
        themsg+=`${msg}`;
        attendHrRound.then((msg)=>{
            themsg+=`${msg}`;
            console.log(`${themsg} . Finally You have completed all ROunds.Please wait for results...`)   
        })
        .catch((msg)=>{
            console.log(`${msg}`)
        })
        .catch((msg)=>{
            console.log(`${msg}`)
        })
        .catch((msg)=>{
            console.log(`${msg}`)
        });
    });
});



// ASSIGNMENT

// Create 3 promises
// 1.roomclean->5000
// 2.removeGarbage->3000
// 3.getPrize->2000

// promise 1 
let roomClean = new Promise((resolve , reject)=>{
    setTimeout(() => {
        let isRoomClean = true;
        if (isRoomClean) {
            resolve("Room Clean Completed");
        }else{
            reject("Room Clean is not completed");
        }
    }, 5000);
})

// prmoise 2

let removeGarbage = new Promise((resolve , reject)=>{
    setTimeout(() => {
        let isRemoveGarbage = true;
        if (isRemoveGarbage) {
            resolve("Garbages Clean Completed");
        }else{
            reject("Garbages Clean is not completed");
        }
    }, 3000);
})

// promise 3

let getPrize = new Promise((resolve , reject)=>{
    setTimeout(() => {
        let isGetPrize = true;
        if (isGetPrize) {
            resolve("Won the Prize");
        }else{
            reject("Prize not available");
        }
    }, 2000);
})

//Call the promise and chained this promised one inside other
 
roomClean.then((msg)=>{
 let newMsg = `${msg}`;
    removeGarbage.then((msg)=>{
        newMsg += ` ${msg}`;
            getPrize.then((msg)=>{
                newMsg += ` ${msg}`;
                console.log(`${newMsg}...finally I got the prize...wow!`);
            })
            .catch((msg)=>{
                console.log(`${msg}`)
            })
            .catch((msg)=>{
                console.log(`${msg}`)
            })
            .catch((msg)=>{
                console.log(`${msg}`)
            });
    })
})
