//callback function : a function which is passed as an argument to another function.
// one of the way which can help to perfom async programming in javascript.

// function callbackfunction(){
//     console.log("callback function called");
// }

// function myFun(){
    
//     console.log("My function called");
//     callbackfunction(); //if it is above then callbackfunction will execute first the myFun console
    
// }
    
// myFun(callbackfunction);

// EXPAMLE 2 : 
// function getData(){
//     setTimeout(()=>{
//         const data={massage : "Hello World!"};
//         dataProcessed(data);
//     },4000)
// }

// function dataProcessed(data){
//     console.log(data.massage);
// }

// getData(dataProcessed);

// EXAMPLE 3 : 
// const computeData =(num1 , num2 , callbackData)=>callbackData(num1, num2)

// const add = (num1 , num2)=>num1+num2;
// const sub = (num1 , num2)=>num1-num2;
// const mul = (num1 , num2)=>num1*num2;
// const div = (num1 , num2)=>num1/num2;

// console.log(computeData(10, 20, add));
// console.log(computeData(10, 20, sub));
// console.log(computeData(10, 20, mul));
// console.log(computeData(10, 20, div));

// EXAMPLE 4:
//  const array = ["apples", "banana", "orange", "mushrooms"];
// array.map(function(item){
//     return console.log(item);
// })

// map is taking a function as an argument which is another function (callback)

// Exampe  5 :

// function myFun1(){
//     console.log("i am first function");

//     setTimeout(() => {
//         console.log("i am settimeout function invoked after 1 s.");
//     }, 1000);
// }

// function myFun2(){
//     console.log("i am second function");
// }

// myFun1();
// myFun2();
//i am first function
//i am second function
//i am settimeout function invoked after 1 s.




