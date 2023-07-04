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