// REDUCE METHOD 
// IT USER CALLBACK MACHANISM INTERNALLY & REDUCED THE ARRAY/OBJECT DATA INTO A SINGLE Uint16Array. 

let employee = [
    {
        id : 101,
        name : 'jhon',
        designation : 'web developer',
        salary : 15000,
        exp : 12,
    },
    {
        id : 102,
        name : 'jenny',
        designation : 'react developer',
        salary : 25000,
        exp : 2,
    },
    {
        id : 103,
        name : 'jam',
        designation : 'FS developer',
        salary : 45000,
        exp :1,
    },
    {
        id : 104,
        name : 'julia',
        designation : 'web designer',
        salary : 35000,
        exp :7,
    },
    {
        id : 105,
        name : 'jim',
        designation : 'angular developer',
        salary : 30000,
        exp : 10,
    },
]

// IF YOU WANT TO TOTAL SALARY OF EMPLOYEe . (looping machanism also worl here)
//2 paramete with callback and initial value
let totalSalray = employee.reduce((prev, currVal)=>{
    return prev + currVal.salary;
},0) //0 is optional which is prev value or initial value .
console.log(totalSalray); //150000

// example 2 
// if you want to find highest salary/exp of employee

let heighestExp = employee.reduce((prev, currVal)=>{
    // debugger
    // if(prev.exp > currVal.exp){
    //     return prev
    // }else{
    //    return currVal
    // }
    return prev.exp > currVal.exp ? prev : currVal     //ternary operator
},0)

console.log(heighestExp); //{id: 101, name: 'jhon', designation: 'web developer', salary: 15000, exp: 12}





