// FILTER :  It works as it name sound. 

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

let data = employee.filter((data)=>{
    return data.exp>4
    })
    console.log(data);
    
    // {id: 101, name: 'jhon', designation: 'web developer', salary: 15000, exp: 12}
    
    // {id: 104, name: 'julia', designation: 'web designer', salary: 35000, exp: 7}
    
    // {id: 105, name: 'jim', designation: 'angular developer', salary: 30000, exp: 10}
    
    let data1 =employee.filter((data)=>{return data.exp >= 10}).map((data)=>{return data.name})
    console.log(data1); //['jhon', 'jim']
    
    // also we can write like 
    data.map((data)=>{
        return console.log(`
        ID : ${data.id}
        Name : ${data.name}
        Salary : ${data.salary}
        `);
    })
        // ID : 101
        // Name : jhon
        // Salary : 15000
    
    
        // ID : 104
        // Name : julia
        // Salary : 35000
    
    
        // ID : 105
        // Name : jim
        // Salary : 30000