
let active = false;

async function getTabId() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    console.log(tab)
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

document.getElementById("active-livecaption").addEventListener("click", setCaption)