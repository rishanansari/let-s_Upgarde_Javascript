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

}





