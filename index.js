//const jokeElement = document.getElementById("newJoke");

async function getIP() {
    // const flag = await fetch("https://ip-api.io/")
    // const flagObj = await flag.json();
    // let flagUrl = flagObj.flagUrl;
    // console.log(flagUrl);

    const item = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const obj = await item.json();
    const latitude = obj.latitude;
    const longitude = obj.longitude;

    console.log(latitude);
    console.log(longitude);
    console.log("region " + obj.region);
    console.log("city " + obj.city);

    const weather = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true&hourly=temperature_2m");
    const weatherObj = await weather.json();


    // console.log(weatherObj.current_weather);
    console.log("current temperature: " + weatherObj.current_weather.temperature);
    console.log("windspeed " + weatherObj.current_weather.windspeed);
    const currentWeather = weatherObj.current_weather.weathercode;
    let textWeather = "";

    switch (weatherObj.current_weather.weathercode) {
        case 0:// console.log("Clear(No cloud at any level)");
            textWeather = "Clear(No cloud at any level)";
            break;

        case 1: //console.log("Partly cloudy(Scattered or broken)"); 
            textWeather = "Partly cloudy(Scattered or broken)";
            break;

        case 2:
            //console.log("Continuous layer(s) of blowing snow");
            textWeather = "Continuous layer(s) of blowing snow";
            break;
        case 3:
            // console.log("Sandstorm, duststorm, or blowing snow");
            textWeather = "Sandstorm, duststorm, or blowing snow";
            break;

        case 4:
            console.log("Fog, thick dust or haze");
            textWeather = "Fog, thick dust or haze";
            break;

        case 5:
            console.log("Drizzle");
            textWeather = "Drizzle";
            break;

        case 6: console.log("Rain");
            textWeather = "Rain";
            break;
        case 7:
            console.log("Snow, or rain and snow mixed");
            textWeather = "Snow, or rain and snow mixed";
            break;

        case 8:
            console.log("Shower(s)");
            textWeather = "Shower(s)";
            break;

        case 9:
            console.log("Thunderstorm(s)");
            textWeather = "Thunderstorm(s)"; 
            break;
    }
    document.getElementById("city").innerHTML = obj.city;
    document.getElementById("current_temperature").innerHTML = weatherObj.current_weather.temperature;
    document.getElementById("region").innerHTML = obj.region;
    document.getElementById("windspeed").innerHTML = weatherObj.current_weather.windspeed;
    document.getElementById("currentWeather").innerHTML = textWeather;
    document.getElementById("country").innerHTML = obj.country;





}

getIP();