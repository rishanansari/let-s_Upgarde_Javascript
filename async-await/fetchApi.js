// method 1 to get data from local txt File. 
//target the button
let btn = document.getElementById("button1");
btn.addEventListener("click", getText);

function getText(){
    fetch("test.txt")
    .then(res=>res.text())
    .then((data)=>{
        console.log(data);
        document.getElementById("output").innerHTML = data
    })
}

// method 2 to get data from internal server json file 

let btn2 = document.getElementById("button2").addEventListener("click",getPostsData);

function  getPostsData(){
    fetch("posts.json")
    .then(res=>res.json())
    .then((data)=>{
        // console.log(data)
        let output="";
        data.map((posts)=>{
            output+=`<li><strong>${posts.title} :</strong> ${posts.body}</li>`
            
        })
        document.getElementById("output").innerHTML=output;
        
    })
    .catch(err=>console.log(err));
}

//method 3 to get data from an API
document.getElementById("button3").addEventListener("click", getApiData);

function getApiData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json()
    .then((apiData)=>{
        console.log(apiData);
        let output="";
        apiData.map((posts)=>{
            output+=`<li><strong>ID : ${posts.id} - </strong> ${posts.title}</li>
            <pre>${posts.body}</pre>`
            
        })
        document.getElementById("output").innerHTML=output;
    }))
    .catch(err=>console.log(err));
}

// method 4 Random dog fetch from API 
let dogResult = document.getElementById("dog_result")

document.getElementById("dog_btn").addEventListener("click",getDogData);

function getDogData(){
    fetch("https://random.dog/woof.json")
    .then(res=>res.json())
    .then((data)=>{
console.log(data);
if(data.url.includes("mp4")){
    dogResult.innerHTML= `
    <video width="400" controls>
    <source src="${data.url}" type="video/mp4">
    <source src="${data.url}" type="video/ogg">
    Your browser does not support the video tag.
  </video>`
}else{
    dogResult.innerHTML =`
    <img src="${data.url}" alt="dogImage" width="400"/>
    `
}


    })
    .catch((err)=>{
        console.log(err);
    })
}