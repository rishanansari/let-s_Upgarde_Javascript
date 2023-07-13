async function getData(){
    try {
        //Get the input data from the user and validate it
        let code=document.getElementById("num").value;//223443
        if(code.length>6||code.length<6){
            alert("Please Enter a 6 Digit pincode number only")
        }
        //Get the api url 
        let response=await fetch(`https://api.postalpincode.in/pincode/${code}`)
        let data=await response.json();

        // console.log(data[0].PostOffice[0].State);
        // console.log(data[0].PostOffice[0].District);
        // console.log(data[0].PostOffice[0].Name);

        if(data[0].PostOffice[0]===null){
            alert("You have entered a wrong pincode .Try Agin!!")

        }else{
            //display the data 
         document.getElementById("state").value= data[0].PostOffice[0].State;
         document.getElementById("district").value=data[0].PostOffice[0].District;
         document.getElementById("area").value=data[0].PostOffice[0].Name;
        }
        
        document.getElementById("num").value="";//set the value to empty string
    } catch (error) {
        console.log(error);
    }
}