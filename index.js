
let active = false;
const btn_caption = document.getElementById("active-livecaption")

async function getTabId() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    return tab.id;
}

async function setCaption(e) {
    e.preventDefault();
    active = !active;
    if (active) {
            chrome.scripting.executeScript({
            target: { tabId: await getTabId() },
            files: ["scripts/livecaption.js"]
            })
               chrome.scripting.insertCSS({
                target: { tabId: await getTabId() },
                files:["styles.css"]
            })
    
    } 
}

btn_caption.addEventListener("click", setCaption)