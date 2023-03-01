//manipulate DOM emlements
import * as dotenv from "dotenv";

dotenv.config();

//fetch wether
const weatherInfo = process.env.WEATHER;
const video = document.getElementById('player');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${weatherInfo}`)
    .then(response => response.json())
    .then(data => {
        const weatherData = data.weather[0].description
        const testScript = document.createTextNode(weatherData);
        const injectScript = document.createElement('div');
        injectScript.classList.add('caption-container');
        injectScript.appendChild(testScript);
        video.after(injectScript);

    }).catch(err => console.log(err));   


    

