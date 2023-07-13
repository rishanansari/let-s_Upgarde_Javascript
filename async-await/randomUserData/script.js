//define all the vaiable with respect to thier id and classes.

// let imgCard = document.getElementById("img_card");
let img  = document.getElementById("img");
let subTitle = document.getElementById("sub_title");
let content = document.getElementById("title_content");
let getUsetBtn = document.getElementById("getUser");

//different button to show the different content 
let personBtn = document.getElementById("person");
let mailBtn  = document.getElementById("mail");
let calendarBtn = document.getElementById("calendar");
let mapBtn = document.getElementById("map");
let phoneBtn = document.getElementById("phone");
let lockBtn = document.getElementById("lock");

let gender = prompt("Please Enter the Gender male/female.If not it will show random user").toLocaleLowerCase();
let url = `https://randomuser.me/api/?gender=${gender}`;



//here we added the on window load event that will load all the functionality 
window.addEventListener("DOMContentLoaded",async()=>{
    try{
    let res = await fetch(url);
    let jsonObj = await res.json();
    let results = jsonObj.results;

    results.map((data)=>{
        img.src = `${data.picture.large}`;
        subTitle.innerHTML = `<h4>Hi, My name is</h4>`;
        content.innerHTML = `<h1>${data.name.first} ${data.name.last}</h1>`;

        personBtn.addEventListener('mouseover',async function(e) {
                subTitle.innerHTML = `<h4>Hi, My name is</h4>`;
                content.innerHTML = `<h1>${data.name.first} ${data.name.last}</h1>`;
        })
        mailBtn.addEventListener('mouseover',async function(e) {
                subTitle.innerHTML = `<h4>My email address is</h4>`;
                content.innerHTML = `<h1>${data.email}</h1>`; 
        })
        calendarBtn.addEventListener('mouseover',async function(e) {
                let date = new Date(data.dob.date)
                let dob = date.toLocaleDateString();
                subTitle.innerHTML = `<h4>My birthday is</h4>`;
                content.innerHTML = `<h1>${dob}</h1>`; 
        })
        mapBtn.addEventListener('mouseover',async function(e) {
                subTitle.innerHTML = `<h4>My address is</h4>`;
                content.innerHTML = `<h1>${data.location.street.number} ${data.location.street.name}</h1>`; 
        })
        phoneBtn.addEventListener('mouseover',async function(e) {
                subTitle.innerHTML = `<h4>My phone number is</h4>`;
                content.innerHTML = `<h1>${data.phone}</h1>`; 
        })
        lockBtn.addEventListener('mouseover',async function(e) {
                subTitle.innerHTML = `<h4>My password is</h4>`;
                content.innerHTML = `<h1>${data.login.password}</h1>`; 
        })
    })
    }catch(err){
       console.log(err); 
    }
})

//here onclick on the get user button all functionaloity 

getUsetBtn.addEventListener("click",async function(){
    
    try{
        let res = await fetch(url);
        let jsonObj = await res.json();
        let results = jsonObj.results;
        // console.log(results);

        results.map((data)=>{
            console.log(data);
            img.src = `${data.picture.large}`;
            subTitle.innerHTML = `<h4>Hi, My name is</h4>`;
            content.innerHTML = `<h1>${data.name.first} ${data.name.last}</h1>`;

            personBtn.addEventListener('mouseover',async function(e) {
                    subTitle.innerHTML = `<h4>Hi, My name is</h4>`;
                    content.innerHTML = `<h1>${data.name.first} ${data.name.last}</h1>`;
            })
            mailBtn.addEventListener('mouseover',async function(e) {
                    subTitle.innerHTML = `<h4>My email address is</h4>`;
                    content.innerHTML = `<h1>${data.email}</h1>`;  
            })
            calendarBtn.addEventListener('mouseover',async function(e) {
                    let date = new Date(data.dob.date)
                    let dob = date.toLocaleDateString();
                    subTitle.innerHTML = `<h4>My birthday is</h4>`;
                    content.innerHTML = `<h1>${dob}</h1>`;
            })
            mapBtn.addEventListener('mouseover',async function(e) {
                    subTitle.innerHTML = `<h4>My address is</h4>`;
                    content.innerHTML = `<h1>${data.location.street.number} ${data.location.street.name}</h1>`;
            })
            phoneBtn.addEventListener('mouseover',async function(e) {
                    subTitle.innerHTML = `<h4>My phone number is</h4>`;
                    content.innerHTML = `<h1>${data.phone}</h1>`; 
            })
            lockBtn.addEventListener('mouseover',async function(e) {
                    subTitle.innerHTML = `<h4>My password is</h4>`;
                    content.innerHTML = `<h1>${data.login.password}</h1>`;
            })   
        });

    }catch(err){
        console.log(err);
    }
});


