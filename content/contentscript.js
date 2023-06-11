
// let youtubepanel = document.getElementById("panels");//[0].parentElement.nodeName;

let youtubeRightControls = document.getElementsByClassName("ytp-right-controls");

// ============= Add Button to the Right control panel =================== //
const switchBtn = document.createElement("button");
switchBtn.className = "ytp-subtitles-button ytp-button ytp-danmaku-button";
switchBtn.setAttribute("aria-keyshortcuts", "c");
switchBtn.setAttribute("data-title-no-tooltip", "Subtitles/closed captions");
switchBtn.setAttribute("aria-pressed", "false");
switchBtn.setAttribute("aria-label", "Subtitles/closed captions keyboard shortcut c");
switchBtn.setAttribute("title", "Subtitles/closed captions (c)");

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

svg.setAttribute("height", "100%");
svg.setAttribute("version", "1.1");
svg.setAttribute("viewBox", "0 0 36 36");
svg.setAttribute("width", "100%");
svg.setAttribute("fill-opacity", "1");

const useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");

useElement.setAttribute("xlink:href", "#ytp-id-09808");

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "m9.25,11.75a1.25,1.25 0 1 0 0,2.5a1.25,1.25 0 0 0 0,-2.5zm3.75,0.25a1,1 0 0 0 0,2l12,0a1,1 0 1 0 0,-2l-12,0zm0,5a1,1 0 1 0 0,2l14,0a1,1 0 1 0 0,-2l-14,0zm-1,6a1,1 0 0 1 1,-1l10,0a1,1 0 1 1 0,2l-10,0a1,1 0 0 1 -1,-1zm-4,-5a1.25,1.25 0 1 1 2.5,0a1.25,1.25 0 0 1 -2.5,0zm1.25,3.75a1.25,1.25 0 1 0 0,2.5a1.25,1.25 0 0 0 0,-2.5z");
path.setAttribute("fill", "#fff");
path.setAttribute("id", "ytp-id-09808");

svg.appendChild(useElement);
svg.appendChild(path);
switchBtn.appendChild(svg);


youtubeRightControls[0].insertBefore(switchBtn, youtubeRightControls[0].firstElementChild);

// ============= Add Button to the Right control panel above =================== //

//const element = document.querySelector('.ytp-subtitles-button.ytp-button.ytp-danmaku-button');

// ======== Change icon color ======== //
let defaultcolor = 0;
switchBtn.onclick = () => {

    let svg = switchBtn.querySelector('svg');
    let path = svg.querySelector('path');
    
    if (defaultcolor === 0) {
        path.setAttribute('fill', 'green');
        defaultcolor = 1;
        update_comment_block(defaultcolor);
    } else {
        path.setAttribute('fill', '#fff');
        defaultcolor = 0;
        update_comment_block(defaultcolor);
    }
    
    
}

//======== Inject Comment Block ===========//
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
// let youtubepanel = document.getElementById("page-manager").childNodes[-2].childNodes;
let youtubepanel = waitForElm('#secondary.style-scope.ytd-watch-flexy').then(function (result){  
            console.log(result);
            return result;
        }
    );//.then(() => {//document.getElementById("page-manager").childNodes[-2].childNodes;
// let childnode = youtubepanel[0];
// for (let i = 0; i < youtubepanel.length; i += 1) {
//     let childnode = youtubepanel[i]
//     if (childnode.id == 'columns') {
//         youtubepanel = childnode;
//         break;
//     }
// }
// // youtubepanel = youtubepanel.
// youtubepanel = youtubepanel.querySelector("#secondary");//[0].parentElement.nodeName;

function update_comment_block(defaultcolor) {
    let switchon = defaultcolor;
    if (switchon) {
        console.log("on")
        console.log(youtubepanel)
        console.log(chatbox1)
    } else {
        console.log("off")
    }
}

