
// // Example 1 : 
// // REVERSE A STRING ========= BETTER TO USE FUNCTION ALWAYS
// let str = "hello, world!";
// let revstr = '';
// for(let i=str.length-1; i>=0; i--){
//     console.log(str[i]);
//     revstr += str[i]
// }
// console.log(revstr);

// // method 2 

// let string = "hello, world!";
// let strsplit = string.split('')
// console.log(strsplit)

// let reversestr = strsplit.reverse();
// console.log(reversestr);

// let joinstr = reversestr.join('');
// console.log(joinstr);

// // method 3 //methos it preferable to use function
// function getreversestring(str) {
//     let revstr= '';
//     for(let i=str.length-1; i>=0; i--) {
//         revstr += str[i]
//     }
//     return revstr;
// }
// let givenstring = "hello, world!";
// let result = getreversestring(givenstring)
// console.log(result);

// // EXAMPLE 2 
// // write a program to find the given number is present or not 
// let arr = [2,4,6,8,1];
// let key = 1;
// let flag = 0; //here i am raising the flag which shows the number does not present.

// for(let i=0; i<arr.length; i++) {
//     if(arr[i] === key){
//         console.log("key is present")   
//     }else{
//         flag++;
//     }
// }
// if(flag === arr.length){
//     console.log("key is not present")
// }


// // METHOD 2  //function

// function valuepresnet(array, value){
//     for(let i=0; i<array.length; i++){
//         if(array[i] === value){
//             console.log("value is present")
//             return;
//         }
//     }
//     console.log("Value is not present")
// }


// const array = [1,4,8,9,3]
// const value = 0;
// valuepresnet(array, value);


// EXAMPLE 3

// only the differnec is  variable  block and global

for(let i = 0; i<3; i++) {
    // debugger
setTimeout(() => {
    console.log(i); // 0,1,2 
}, 5000);
}


for(var i = 0; i<3; i++) {
    // debugger
setTimeout(() => {
    console.log(i); // 3, 3, 3
}, 5000);
}

// Example 4
// print the X pattern 

var size = 5;

for(let i = 0; i < size; i++) {
    let row = "";

    for(let j = 0; j < size; j++){
        if(i===j || j===(size-1-i)){
            row += "X";
        }else{
            row += " ";
        }
    }
    console.log(row);

}

