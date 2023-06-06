let button = document.getElementById('lengthbtn');
button.addEventListener('click', function(){
//logic here

let length = document.getElementById('name').value;
console.log(length);

let wordCount = length.length;
console.log(wordCount);
document.getElementById('counting').innerHTML = `<em><b>Word length is : ${wordCount}</b></em>`;


})