function createNode(element){
    return document.createElement(element);
}

function append(parent,el){
    return parent.appendChild(el);
}

//select the element and url 
const ul=document.getElementById("imglst");
const url="https://randomuser.me/api/?gender=male&results=100";



async function fetchData(){
    try {
        const response=await fetch(url);
        const data=await response.json();
        let nesteddata=data.results;
        console.log(nesteddata);
        nesteddata.forEach((obj)=>{
            let li=createNode("li");
            let img=createNode("img");
            let h1element=createNode("h3");
            let  h4element=createNode("h4");
            img.src=obj.picture.large;
            h1element.innerHTML=`${obj.name.first} ${obj.name.last}`;
            h4element.innerHTML=`${obj.email}`
            append(li,img);
            append(li,h1element);
            append(ul,li);
            append(li,h4element);
        })
    } catch (error) {
        console.log(error);
    }
}
fetchData();