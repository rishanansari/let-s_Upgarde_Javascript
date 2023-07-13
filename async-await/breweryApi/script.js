document.body.innerHTML=`
<div class="heading-container">
<h1>Brewery List</h1>
<div id="mainContainer" class="main-container"></div>
</div>
`

//Get the brewery data 
const getBreweriesData=async()=>{
    try{
        //Fetch the Data from the api
        const data=await fetch("https://api.openbrewerydb.org/v1/breweries");
        //convert the dat into JSOn format
        const brewerys=await data.json();
        // console.log(brewerys);
        mainContainer.innerHTML="";
        brewerys.forEach((brewery)=>{
            // console.log(brewery);
            displayBrweryData(brewery);
        })

    }catch(error){

        console.log(error);
        mainContainer.innerHTML=error.message;

    }

}

getBreweriesData();


//Display the data 
const displayBrweryData=(obj)=>{
    mainContainer.innerHTML+=`
    <div  class="container">
    <h3 class="test">Name:<span>${obj.name}</span></h3>
    <p class="para test">Type:<span>${obj.brewery_type}</span></p>
    <p class="para test">City:<span>${obj.city}</span></p>
    <p class="para test">Type:<span>${obj.street}</span></p>
    <p class="para test">Type:<span>${obj.state}</span></p>
    <p class="para test">Type:<span>${obj.phone}</span></p>
    <p class="para test">Type:<span>${obj.country}</span></p>
    </div>
    `
}
