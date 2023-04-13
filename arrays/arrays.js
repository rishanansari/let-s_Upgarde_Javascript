// ARRAYS : are the object type data type / refernece data type which store the collection of data of dirrefent or simillar data type.

// SYNTAX : var/let/const array = ['vale', 'value', ...]; 
// value depends on data type , if string  ' ' , if number so without quotes. 

// To findout the length of the array = arrayName.length

// size of an array = arrayName.length -1 ********************************

// ********** HOW TO CREATE ARRAY ***************

// There are 3 way to create an array.

// 1. tradional method (array literals)

// let cities = ['Mumabi', 'Delhi', 'pune', 'Thane'];

// 2. Array Instance Methods (new keyword)

// let cities = new Array();
// cities[0]='Mumbai';
// cities[1]='Delhi';
// cities[2]='Pune';
// cities[3]='Thane';

// here in this method to read the array , create LOOOOP.
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// };

// 3. ARRAY CONSTRUCTORS
// same as Instance.
// here we pass the value/elements as an arguments to the constructor.

// let cities = new Array("Mumbai",'Pune', 'Punjab', 'Delhi');
// console.log(cities);


// ************* ARRAY METHODS ************

// 1. SORT : it sort the data in the array auotomatically and return array.

// exapmle
// let number= [40,20,30,10,50];
// console.log(number.sort()); //[10,20,30,40,50]

// 2. REVERSE : it reverse the given array.

// example:
// let names = ['a', 'b', 'c', 'd', 'e']
// console.log(names.reverse()); // => ['e', 'd', 'c', 'b', 'a']

// here some chaining function/ methods  like we can write more than 1 function/ method in series.
// example : 
// console.log(number.sort().reverse()); // [50,40,30,20,10] CHAINING OF AN ARRAY

// here this will sort first 10, 20, 30 , 40 , 50 => the reverse => 50, 40 , 30 ,20 10.

// 3. SHIFT : to remove first position from array and return it.
// example:
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// numbers.shift();
// console.log(numbers) // => [2,3,4,5,6,7,8,9,10];

// 4.UNSHIFT : to add an element to the first position of the array and return it. 
// example:
// let num =[2, 3, 4, 5];
// numbers.unshift(1);
// console.log(num); // => [1, 2, 3, 4, 5];

// 5. POP : to remove last element from an array. 
// example:
// let names = ['abid','smair','adil','alice','cool'];
// names.pop();
// console.log(names); // => ['abid','smair','adil','alice'];

// 6.PUSH : to add last element from an array. 
// example:
// let names = ['abid','smair','adil'];
// names.push('hello');
// console.log(names); // => ['abid','smair','adil','hello'];

// 7.SPLICE :  function to remove all element of any specific element from an array. 
// splice() -> remove all elements
// splice(index , no of elements to remove from marked) -> remove specific element
// splice(index , no of elements to remove from , add elements) -> add elements. 

// example:
// let colors=['red','green','blue','yellow','orange','voilet','black'];
// let spliceall = colors.splice()
// console.log(spliceall) // [empty array]

// let splicespecific = colors.splice(2 , 2);
// console.log(splicespecific) // ['blue', 'yellow']
// console.log(colors) // ['red', 'green', 'orange', 'voilet', 'black']

// let spliceadd = colors.splice(2 , 0 , 'hello','world')
// console.log(spliceadd) // [empty]
// console.log(colors); // ['red', 'green', 'hello', 'world', 'orange', 'voilet', 'black']

// 8.JOIN : join the array elemt and convert into string with specific symbols -> "", " ", "-", ","

let city = ['mumbai', 'thane', 'pune', 'panvel', 'gujrat'];
let newcity = city.join()
console.log(newcity); // mumbai,thane,pune,panvel,gujrat
let quotescity = city.join('');
console.log(quotescity); //mumbaithanepunepanvelgujrat

let spacecity = city.join(' ');
console.log(spacecity); //mumbai thane pune panvel gujrat




















