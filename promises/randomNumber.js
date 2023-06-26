
// function keypress(){
//     let number = document.getElementById("value")
//     console.log(number.value);
// }

// let number = prompt("Enter the Number ");
// let guess  = document.getElementById("value");
// guess.innerHTML = number;
// console.log(number);

let GuessNum  = document.getElementById("value")
let Number = prompt("Enter Your Number between 1-10");
GuessNum.innerHTML = `Your Number is ${Number}`
    // create  a promise construction

const promise = new Promise((resolve , reject)=>{
//logic here.......
// let Number  = document.getElementById("value")
let randomSpan = document.getElementById("randomSpan")
const RandomNumber = Math.floor(Math.random()*10);
randomSpan.innerHTML = RandomNumber;
console.log(RandomNumber);

if (RandomNumber === Number) {
    resolve("Hurray! Your Number is guessed correctly")
} else{
    reject("Uh oh! Wrongly Gussed...")
}

})

let result = document.getElementById("result")
console.log(promise);
promise.then((res)=>{
    console.log(res);
    result.innerHTML = res;
    result.style.color = "green";
}).catch((error)=>{
console.log(error);
result.innerHTML = error;
result.style.color = "red";
})






