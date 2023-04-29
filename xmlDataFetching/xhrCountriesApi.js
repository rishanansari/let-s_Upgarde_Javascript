//Assignment based on XHR method 
// URL - https://restcountries.com/v3.1/all 

// fetch the data by xhr approach for the country india 
// 1. country name
// 2. currency
// 3. capital
// 4. region
// 5. language
// 6. population
// 7. flag - png image url only

var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();

xhr.onreadystatechange = function() {

    if(xhr.readyState==4 && xhr.status==200){
        const data = JSON.parse(xhr.responseText);
        // var ccn3 = prompt("Enter the country ccn3 Number (for INDIA type 356)")
        for(let i=0; i<data.length; i++){

            const currency = data[i].currencies;
            const lang = data[i].languages;
            for (const key in currency) {
                var countryCurrency = currency[key].name;
                // console.log(currency[key].name);
            }
            for (const key in lang) {
                // console.log(lang[key])
                
                var countryLang = lang[key];
                
            }
            // for all countries 
            // console.log(
            //     `COUNTRY NAME : ${data[i].name.common}
            //      Currencies : ${data[i].currencies}
            //      Capital : ${data[i].capital}
            //      Languages : ${data[i].languages}
            //      Populations : ${data[i].population}
            //      region : ${data[i].region}
            //      Falg : ${data[i].flags.png}
            //     `
            // )

            // document.getElementsByClassName("cName")[i].innerHTML = `${data[i].name.common}`;
            // document.getElementsByClassName("cCapital")[i].innerHTML = `<i>${data[i].capital}</i>`;
            // document.getElementsByClassName("cPopulation")[i].innerHTML = `<b>Population :</b> ${data[i].population}`;
            // document.getElementsByClassName("cFlag")[i].src =  `${data[i].flags.png}`;

            
            // console.log(data[i]);

            //for india

            if(data[i].capital == "New Delhi"){
                document.getElementById("cName").innerHTML = `${data[i].name.common}`;
                document.getElementById("cCapital").innerHTML = `${data[i].capital}`;
                document.getElementById("cPopulation").innerHTML = `Population : ${data[i].population}`;
                document.getElementById("cFlag").src =  "https://flagcdn.com/w320/in.png";
                console.log(data[i]);

                console.log(
                    `COUNTRY NAME : ${data[i].name.common}
                     Currencies : ${countryCurrency}
                     Capital : ${data[i].capital}
                     Languages : ${countryLang}
                     Populations : ${data[i].population}
                     region : ${data[i].region}
                     Falg : ${data[i].flags.png}
                    `
                )
            }
            
        }
    }
}

