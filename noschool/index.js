document.addEventListener("DOMContentLoaded", async () => {

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    let hkodata;
    let warndata;
    await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en').then(response => response.json()).then(async data => {warndata = data.warningMessage});
    await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en').then(response => response.json()).then(async data => {hkodata = data});
    fetch('https://api.weatherapi.com/v1/forecast.json?key=43218fe8c7054f2aa3245222231009&q=Hong%20Kong&days=3&aqi=no&alerts=yes').then(response => response.json()).then(async data => {
        let averagewindspeed = 0;
        let averagerainfall = 0;
        let noschool = false;
        let warnings = document.getElementById('warnings');
        for(var i = 0; i < warndata.length; i++){
            if((warndata[i].includes("No. 8") || warndata[i].includes("No. 9") || warndata[i].includes("No. 10") 
            || warndata[i].includes("Red Rainstorm") || warndata[i].includes("Black Rainstorm"))){
                noschool = true;
                
            }
            // put warnings in warnings element
            if(warndata[i].includes("No. 1")){
                warnings.innerHTML += "<li>Signal No. 1</li>";
            }
            if(warndata[i].includes("No. 3")){
                warnings.innerHTML += "<li>Signal No. 3</li>";
            }
            
            if(warndata[i].includes("No. 8")){
                warnings.innerHTML += "<li>Signal No. 8</li>";
            }
            if(warndata[i].includes("No. 9")){
                warnings.innerHTML += "<li>Signal No. 9</li>";
            }
            if(warndata[i].includes("No. 10")){
                warnings.innerHTML += "<li>Signal No. 10</li>";
            }
            if(warndata[i].includes("Yellow Rainstorm")){
                warnings.innerHTML += "<li>Yellow Rainstorm</li>";
            }
            if(warndata[i].includes("Red Rainstorm")){
                warnings.innerHTML += "<li>Red Rainstorm</li>";
            }
            if(warndata[i].includes("Black Rainstorm")){
                warnings.innerHTML += "<li>Black Rainstorm</li>";
            }


        }
        let rate = 0;
        let rateobv = 0;
        for(let i = 0; i < 2; i++){
            let foredata = data.forecast.forecastday[i]
            averagerainfall += (foredata.day.totalprecip_mm)/4;
            averagewindspeed += (foredata.day.maxwind_kph);
        }
        averagewindspeed = Math.round((averagewindspeed/2+ Number.EPSILON) * 100)/100;
        averagerainfall = Math.round((averagerainfall/2+ Number.EPSILON) * 100)/100;
        if(averagerainfall >= 65){
            rate += 2;
        } else if(averagerainfall >= 45){
            rate += 1;
        };

  
        for(let i = 0; i < 2; i++){
            const numbers = (hkodata.weatherForecast[i].forecastWind).match(/\d+/g).map(Number);
            const largestNumber = Math.max(...numbers);
            
            if(largestNumber >= 10){
                rateobv += 2;

            } else if(largestNumber >= 7){
                rateobv += 1;
            }
        }
        let temp = 0;
        if(averagewindspeed >= 115){
            temp += 2;
        } else if(averagerainfall >= 75){
            temp += 1;
        };
        if(rate + rateobv > rate + temp) rate += rateobv;
        else rate += temp;
        
        const chanceElement = document.getElementById('chance');
        const chancePercentElement = document.getElementById('chanceper');
        if(noschool){
            chanceElement.textContent = "No School";
            chancePercentElement.textContent = "100%";
            return;
        }
        
        if(rate == 0){
            chanceElement.textContent = "Not likely";
            chancePercentElement.textContent = "<25%";
        } else if(rate == 1){
            chanceElement.textContent = "Maybe";
            chancePercentElement.textContent = "25%";
        } else if(rate == 2){
            chanceElement.textContent = "Likely";
            chancePercentElement.textContent = "50%";
        } else if(rate == 3){
            chanceElement.textContent = "Very likely";
            chancePercentElement.textContent = "75%";
        } else if(rate >= 4){
            chanceElement.textContent = "Extremely likely";
            chancePercentElement.textContent = ">75%";
        }
        
    })

})