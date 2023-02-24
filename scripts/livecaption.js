//manipulate DOM emlements

const video = document.getElementById('player');

const testScript = document.createTextNode(`Hi How are you?`);
const injectScript = document.createElement('div')
injectScript.classList.add('caption-container')
injectScript.appendChild(testScript);

video.after(injectScript);

//test code

// function injectLiveCaption() {
//     alert("hellow worldwide")
// }

// injectLiveCaption();