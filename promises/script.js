// Promise : it is a better approach in step to avoid async programming.Promiseinternally it uses callback paeameter function as an argument.

// states of promises
// 1.initial -> promise is niether fulfilled nor rejected.
// 2.fulfilled
// 3.rejected

// EXAMPLE 1:

const promiseObject = new Promise ((resolve , reject)=>{
    //logic here .........
    setTimeout(() => {
        const array = ["apples", "banana", "mango", "strawberry", "orange"];

        console.log(array.length);
        if (array.length==5){ //==0 the reject promise
            resolve(array)
        }else{
            reject("somethig went wrong");
        }
    }, 3000);

})


// console.log(promiseObject); //fullfiled ->

// there are method to handle the promise object
promiseObject.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

// .then is for printing the result and .catch is for printing the error. 








