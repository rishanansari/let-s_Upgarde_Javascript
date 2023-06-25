// make a pizza with functions.
// steps : 1 - Raise a dough
// 2- roll dough 
// 3- pour sauce
// 4- add toppings
// 5- bake pizza
// 6- deliver pizza

// pizza delivered successfully

const time = 1000;

function  raiseDough(callbcak){
    console.log("Waiting for Dough...");
    setTimeout(() => {
        console.log("Dough is ready....");
        callbcak();
    }, 4*time);
}
function  rollDough(callbcak){
    console.log("Waiting for Rolling Dough...");
    setTimeout(() => {
        console.log("Rolled is ready....");
        callbcak();
    }, 3*time);
}


function  pourSauce(callbcak){
    console.log("Waiting for sauce to be poured...");
    setTimeout(() => {
        console.log("sauce is poured....");
        callbcak();
    }, 2*time);
}


function  addToppings(callbcak){
    console.log("Waiting to add toppings...");
    setTimeout(() => {
        console.log("topping is added....");
        callbcak();
    }, 3*time);
}


function  bakePizza(callbcak){
    console.log("Baking the pizza...");
    setTimeout(() => {
        console.log("baking successful....");
        callbcak();
    }, 6*time);
}


function  pizzaDeliver(callbcak){
    console.log("Waiting for Delivery...");
    setTimeout(() => {
        console.log("Delivery successful....");
        callbcak();
    }, 5*time);
}

// callbackhell created here 

raiseDough(()=>{
    rollDough(()=>{
        pourSauce(()=>{
            addToppings(()=>{
                bakePizza(()=>{
                    pizzaDeliver(()=>{
                        console.log("pizza is delivered to the client successfully");
                    });
                });
            });
        });
    });
})