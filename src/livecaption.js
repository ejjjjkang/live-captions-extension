//manipulate DOM emlements
import * as dotenv from "dotenv";
import interact from './lib/interact.min.js';

dotenv.config();

const captionText = document.querySelector('div.a4cQT')

const config = {
  characterData: true,
  childList: true,
  subtree: true,
}

const mutationObserver = new MutationObserver((mutation) => { 
    mutation.forEach((mutation) => {
        const word = mutation.addedNodes[0].data
        const testScript = document.createTextNode(word);
        const injectScript = document.createElement('div');
        injectScript.classList.add('caption-container');
        injectScript.appendChild(testScript);
        captionText.after(injectScript);
    })
})
mutationObserver.observe(captionText, config)

// // Get the element with the class name 'example-class'
// const element = document.querySelector('.example-class');

// // Get the computed style of the element
// const styles = getComputedStyle(element);

// // Check the value of the 'color' property
// const colorValue = styles.getPropertyValue('color');

// // Output the value to the console
// console.log(colorValue);

