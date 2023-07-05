//define all the vaiable with respect to thier id and classes.

let imgCard = document.getElementById("img_card");
let img  = document.getElementById("img");
let subTitle = document.getElementById("sub_title");
let content = document.getElementById("title_content");
let getUsetBtn = document.getElementById("getUser");

let url = "https://randomuser.me/api/";

getUsetBtn.addEventListener("click",async function(){
    imgCard.innerHTML = `<h3>Loding...</h3>`;
});