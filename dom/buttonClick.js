var toggler = true;
function ChangeHandler(){
    
    if(toggler){
        toggler = !true;
        // console.log(toggler);
    var content = document.getElementById("contentChange")
    content.innerHTML = "Hey... you changed Me!";
    content.style.color = "red";
    content.style.fontFamily = "Helvetica";
    }else{
        var content = document.getElementById("contentChange")
        content.innerHTML = "<h2>Hello World</h2>";
        content.style.color = "black";
        toggler = true;
    }
    
}