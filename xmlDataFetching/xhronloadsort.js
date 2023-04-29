
var xhr = new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.send();


xhr.onload=function(){
    if(xhr.status==200){
        const users = JSON.parse(xhr.responseText); //only response we can use
        console.log(users); //all data
        //HERE SORT THE DATA BASED ON Eamil 
        users.sort((a,b)=>{
            const name1 = a.email.toUpperCase(); //wrt to email  can change  a.name
            const name2 = b.email.toUpperCase(); //b.name 

            if(name1<name2){
                return -1;
            }
            if(name1>name2){
                return 1;
            }
            return 0;
        })
 //above code sort the data wrt email the return the data for foreach function.
        users.forEach(user => {
            console.log(`${user.name} ${user.email}`);
        });
    }else{
        console.log(`ERROR : ${xhr.status}`);    
    }
}

