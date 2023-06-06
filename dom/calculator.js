function add(){
    let num1 = document.getElementById('first').value;
    let num2 = document.getElementById('second').value;
    let total = parseInt(num1)+parseInt(num2);
    
    let inputTotal = document.getElementById('total');
    inputTotal.value = `The sum of the numbers are ${total}`
}
function subs(){
    let num1 = document.getElementById('first').value;
    let num2 = document.getElementById('second').value;
    let total = parseInt(num1)-parseInt(num2);
    
    let inputTotal = document.getElementById('total');
    inputTotal.value = `The subs of the numbers are ${total}`
}
function mul(){
    let num1 = document.getElementById('first').value;
    let num2 = document.getElementById('second').value;
    let total = parseInt(num1)*parseInt(num2);
    
    let inputTotal = document.getElementById('total');
    inputTotal.value = `The mul of the numbers are ${total}`
}
function div(){
    let num1 = document.getElementById('first').value;
    let num2 = document.getElementById('second').value;
    let total = parseInt(num1)/parseInt(num2);
    
    let inputTotal = document.getElementById('total');
    inputTotal.value = `The div of the numbers are ${total}`
}



