// template for XHR http request

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {

    if(xhr.readyState==4 && xhr.status==200 ){
        //data is available (logic here)
        var response = xhr.responseText;
        var data = JSON.parse(xhr.responseText); //formated data / readable data
        console.log(data);
        // console.log(response);

        //access the data with loooooooppppppp

        for(let i=0; i<data.length; i++){
            console.log(`user id : ${data[i].id}`);
            console.log(`username : ${data[i].username}`);
            console.log(`user email : ${data[i].email}`);
        }
        
    }
}

xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.send();

//here we can sort the data with respect to the users name and the fetcing can done................................................................by sort method.