// MAP METHOD 
// Repalcement of loops

// FOR EACH LOOP 
// not return value and can to use for chaining operations

let employee = [
    {
        id : 101,
        name : 'jhon',
        designation : 'web developer',
        salary : 15000,
    },
    {
        id : 102,
        name : 'jenny',
        designation : 'react developer',
        salary : 25000,
    },
    {
        id : 103,
        name : 'jam',
        designation : 'FS developer',
        salary : 45000,
    },
    {
        id : 104,
        name : 'julia',
        designation : 'web designer',
        salary : 35000,
    },
    {
        id : 105,
        name : 'jim',
        designation : 'angular developer',
        salary : 30000,
    },
]

// FOR EACH 
let data = []
let empName = employee.forEach((emp)=>{
    // return emp.name not applicable to forEach()
data.push(emp.name)

})
console.log(empName); //undefined 
console.log(data); //['jhon', 'jenny', 'jam', 'julia', 'jim']


// MAP METHOD  it return the new/modified/updated/tranformed/mutated array
let empName2 = employee.map((emp)=>emp.name) //here is single value it return value without writting retun word. if there will be multiple value so should write return.

console.log(empName2) //['jhon', 'jenny', 'jam', 'julia', 'jim']
console.log(empName2.reverse()) //['jim', 'julia', 'jam', 'jenny', 'jhon']
console.log(empName2.sort()) //['jam', 'jenny', 'jhon', 'jim', 'julia']

// here we can write multiple method in a chaining vut in FOR EACh we can not write. 