//manipulate DOM emlements
import * as dotenv from "dotenv";
import interact from 'interact';
import axios from 'axios';

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
        fetchData(word).then((res) => {
            console.log(res)
        }).catch((err) => { console.log(err)});
        
    })
})

async function fetchData(req, res, next) { 
    await axios.post(process.env.ADRESS, { data: req }, {
        headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
        },
        mode: "cors"
    });
}


mutationObserver.observe(captionText, config)
