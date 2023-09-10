document.addEventListener("DOMContentLoaded", async () => {

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    let hkodata;
    await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en').then(response => response.json()).then(async data => {hkodata = data});
    fetch('https://api.weatherapi.com/v1/forecast.json?key=43218fe8c7054f2aa3245222231009&q=Hong%20Kong&days=3&aqi=no&alerts=yes').then(response => response.json()).then(async data => {
        let averagewindspeed = 0;
        let averagerainfall = 0;
        let rate = 0;
        let rateobv = 0;
        for(let i = 0; i < 2; i++){
            let foredata = data.forecast.forecastday[i]
            averagerainfall += (foredata.day.totalprecip_mm)/24;
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
        if(rate == 0){
            chanceElement.textContent = "Not likely";
            chancePercentElement.textContent = "0%";
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