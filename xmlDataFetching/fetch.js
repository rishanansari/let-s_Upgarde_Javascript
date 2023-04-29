//here the updation XHR method that will be called fetch method to call api.
// json placeholder webiste = https://jsonplaceholder.typicode.com/


//here same URL used as in XHR method  
//reduced the code  in just 3 lines.

fetch('https://jsonplaceholder.typicode.com/users') //return promise that handle by response 
      .then(response => response.json()) //return again promise that handle by json
      .then(json => {
        console.log(json); //all dtaa
        for(let i=0 ; i<json.length ; i++) {
            console.log(
                `USER ID: ${json[i].id}
                 User name: ${json[i].username}
                 User email: ${json[i].email}`
            )
        }
      }) //print the data returned.