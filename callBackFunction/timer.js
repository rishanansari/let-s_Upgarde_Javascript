//select an element h1 with 
const countdown=document.querySelector(".countDown")

let time=10;//initalized variable with initail as 5
let delay = 1000; // timer delay by 1000ms;

///Logic to Decrement timer by 1 for 1 second 

countdown.innerHTML=time--;
setTimeout(() => {
    countdown.innerHTML=time--;
    setTimeout(()=>{
        countdown.innerHTML=time--;
        setTimeout(()=>{
            countdown.innerHTML=time--;
            setTimeout(()=>{
                countdown.innerHTML=time--;
                setTimeout(() => {
                    countdown.innerHTML=time--;
                    setTimeout(() => {
                        countdown.innerHTML=time--;
                        setTimeout(() => {
                            countdown.innerHTML=time--;
                            setTimeout(() => {
                                countdown.innerHTML=time--;
                                setTimeout(() => {
                                    countdown.innerHTML=time--;
                                    setTimeout(() => {
                                        countdown.innerHTML=time--;
                                        countdown.innerHTML= "Hey Folks!";
                                    }, delay);
                                }, delay);
                            }, delay);
                        }, delay);
                    }, delay);
                }, delay);
            },delay);
        },delay);
    },delay);
},delay);