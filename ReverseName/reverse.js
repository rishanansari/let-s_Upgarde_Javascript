// Write a program to find the reverse of your name i.e abid ansari -> irasna diba 

let arr=['abid ansari'];

let arraystring = arr.toString();
console.log(arraystring); //abid ansari

let splitarraystring = arraystring.split("");
console.log(splitarraystring); //['a', 'b', 'i', 'd', ' ', 'a', 'n', 's', 'a', 'r', 'i']

let reversearray =splitarraystring.reverse();
console.log(reversearray); //['i', 'r', 'a', 's', 'n', 'a', ' ', 'd', 'i', 'b', 'a']

let joinarray = reversearray.join("");
console.log(joinarray); //irasna diba


// shorthand 

// console.log(arr.toString().split("").reverse().join(""));