// OBJECT : Collection of data in form of key and value pairs. 
// it is a special type of data type which is bit complex.

//syntax
// let objName ={
//     'key':'value',
// }

// traditional approach 

let object ={};

object.name = 'abid';
object.gender = 'male';
object.age = 28;

console.log(object); //{name: 'abid', gender: 'male', age: 28}

//FULLY LOADED OBJECT

let person ={
    'name': 'adil',
    'gender': 'male',
    'age': 28,
}
console.log(person); //{name: 'adil', gender: 'male', age: 28}

// ACCESS THE OBJECT.
// 1. DOT NOTATION.

console.log(person.name); //adil
console.log(object.age); //28


// 2. BRACKET NOTATION.
console.log(person['name']);//adil
console.log(object['age']); //28


// THREE ways to define objects - 
// 1.simple object

let employee  = {
    name: 'John',
    age: 28,
    email : 'john@example.com',
    address : 'mumbai',
    salary : 200000,
}
// access 

console.log(employee); //{name: 'John', age: 28, email: 'john@example.com', address: 'mumbai', salary: 200000}

//Tamplate Literals
console.log(
    `Name : ${employee.name}
    Age : ${employee.age}
    Email : ${employee.email}`
); 
//Name : John
// Age : 28
// Email : john@example.com

// 2.Array of objects

let emp = [
    {
        name:'abid',
        age: 28,
        desination : 'dev'
    },
    {
        name:'adil',
        age: 28,
        desination : 'developer'
    },
    {
        name:'samir',
        age: 29,
        desination : 'web developer'
    },
]
// access the data  
// here the array comes then we have to iterate the data with the help of loop

for(let i=0 ; i<emp.length ; i++){
    console.log(`
    Name = ${emp[i].name}
    Age = ${emp[i].age}
    desination = ${emp[i].desination}
    `);
}

// Name = abid
//     Age = 28
//     desination = dev
    
// object.js:87 
//     Name = adil
//     Age = 28
//     desination = developer
    
// object.js:87 
//     Name = samir
//     Age = 29
//     desination = web developer


// 3. Nested objects 
// object within the object hierarchy

let student= {
    name: 'Student',
    age: 29,
    course :{
        courseName: 'FSdev',
        platform : 'lets Upgarde',
        duration : '6 months',
        rank : 2,

    },
    college :{
        name: 'mumbai University',
        city : 'mumbai',
        estd :1927,
    },
    address : {
        city:'mumbai',
        state:'maharashtra',
        country:'india',
    },
}

// Access the data present 

console.log(student.address.country); //india
console.log(student.age); // 29


// 4 .  OBJECT ARRAY OBJECT

let data  = {
    apples : [
        {color : "red", quanity : 2},
        {color : "green", quanity : 5},
        {color : "black", quanity : 3},
    ],
    banana : [
        {color : "yellow", quanity : 7},
        {color : "green", quanity : 5},
    ],
    orange : [
        {color : "yellow", quanity : 12},
        {color : "orange", quanity : 15},
    ],
}

console.log(data); //gives full object

// key in object 
// for(let fruit in data){
//     console.log(fruit); //apple banana orange type string gives keys
// }

// for(let fruit in data){
//     console.log(data[fruit]); //value of every fruits (means all arrays )
// }

for(let fruit in data){
    for(let i=0 ; i<data[fruit].length ; i++){
        console.log(data[fruit][i]);
        // console.log(data[fruit][i].color);
        // console.log(data[fruit][i].quanity);
    }
}

// console.log(data[fruit][i]);
// output
// {color: 'red', quanity: 2}
// {color: 'green', quanity: 5}
// {color: 'black', quanity: 3}
// {color: 'yellow', quanity: 7}
// {color: 'green', quanity: 5}
// {color: 'yellow', quanity: 12}
// {color: 'orange', quanity: 15}

// console.log(data[fruit][i].color/quantity);
// red
// green
// black
// yellow
// green
// yellow
// orange

// 2
// 5
// 3
// 7
// 5
// 12
// 15







