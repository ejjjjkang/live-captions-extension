// //manipulate DOM emlements
// import * as dotenv from "dotenv";

// dotenv.config();

// //fetch wether
// const captionInfo = process.env.DEEPL;

// const weatherInfo = process.env.WEATHER;
// const video = document.getElementById('player');
// const captionContainer = document.getElementById('caption-window-1')

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${weatherInfo}`)
//     .then(response => response.json())
//     .then(data => {
//         const weatherData = data.weather[0].description
//         const testScript = document.createTextNode(weatherData);
//         const injectScript = document.createElement('div');
//         injectScript.classList.add('caption-container');
//         injectScript.appendChild(testScript);
//         video.after(injectScript);

//     }).catch(err => console.log(err));   


// const recognition = new SpeechRecognition();    
// const speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);

// recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;
