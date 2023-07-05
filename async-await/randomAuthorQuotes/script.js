//here we use ASYNC AWAIT for the fecthing the data with try catch blocks.

let authorName = document.getElementById("author_name")
let authorQuote = document.getElementById("author_quote")
let btn = document.getElementById("btn")

let url="https://api.breakingbadquotes.xyz/v1/quotes";

btn.addEventListener("click",async function(e) {
    authorName.innerHTML = "Loding....";
    authorQuote.innerHTML = "Quote is Loding....";
    // here we use try catch block for fetching  
    try{
        let res=  await fetch(url)
        let resObj = await res.json()
        console.log(resObj);
        resObj.forEach(data => {
        authorName.innerHTML = `${data.author}`;
        authorQuote.innerHTML = `${data.quote}`;
   });
    }catch(err){
        console.log(err);
    }
 
})