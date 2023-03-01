//manipulate DOM emlements
import * as dotenv from "dotenv";

dotenv.config();

//fetch wether
const weatherInfo = process.env.WEATHER;
console.log(weatherInfo)
const video = document.getElementById('player');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${weatherInfo}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.weather[0].description)
    
    })
    .catch(err => console.log(err));   

    

const testScript = document.createTextNode(`Hi How are you?`);
const injectScript = document.createElement('div');
injectScript.classList.add('caption-container');
injectScript.appendChild(testScript);


video.after(injectScript);
