let button = document.getElementById('lengthbtn');
button.addEventListener('click', function(){
//logic here

let length = document.getElementById('name').value;
console.log(length);

let wordCount = length.length;
console.log(wordCount);
document.getElementById('counting').innerHTML = `<em><b>Word length is : ${wordCount}</b></em>`;


})

let reset = document.getElementById('resetCount');
reset.addEventListener('click', ()=>{

     document.getElementById('name').value='';
     document.getElementById('counting').innerHTML='<b><em>Count is : 0</em></b>';
     
})