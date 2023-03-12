
let active = false;

const btn_caption = document.getElementById("active-livecaption")

async function getTabId() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    return tab.id;
}


async function setCaption(e) {
    e.preventDefault();
    active = !active;
    if (active === true) {
        btn_caption.classList.add("active");
       chrome.scripting.executeScript({
            target: { tabId: await getTabId() },
            files: ["livecaption.bundle.js"]
        })
        chrome.scripting.insertCSS({
            target: { tabId: await getTabId() },
            files: ["styles.css"]
        })
        
    } 
}

function main() {
     chrome.scripting.registerContentScripts([
            {
                id: "live-caption-extension",
                js: ["livecaption.bundle.js"],
                matches: ["*://meet.google.com/*"],
                persistAcrossSessions: false,
            }
        ])
}


btn_caption.addEventListener("click", setCaption)


main();