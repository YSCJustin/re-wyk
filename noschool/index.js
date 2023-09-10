document.addEventListener("DOMContentLoaded", async () => {

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;


    fetch('https://api.weatherapi.com/v1/forecast.json?key=43218fe8c7054f2aa3245222231009&q=Hong%20Kong&days=3&aqi=no&alerts=yes').then(response => response.json()).then(async data => {
        let averagewindspeed = 0;
        let averagerainfall = 0;
        for(let i = 0; i < 2; i++){
            let foredata = data.forecast.forecastday[i]
            averagerainfall += (foredata.day.totalprecip_mm)/24;
            averagewindspeed += (foredata.day.maxwind_kph);
        }
        averagewindspeed = Math.round((averagewindspeed/2+ Number.EPSILON) * 100)/100;
        averagerainfall = Math.round((averagerainfall/2+ Number.EPSILON) * 100)/100;

        
    })

})