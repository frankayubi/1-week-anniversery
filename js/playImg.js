var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;

function play() {
    // Toggles visibility: 1 - 1 = 0 (hides text), 1 - 0 = 1 (shows media)
    flag = 1 - flag; 
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;
}

function buttonFadeIn() {
    if (btnVal < 1) {
        btnVal += 0.025;
        btn.style.opacity = btnVal;
    } else {
        clearInterval(buttonInterval);
    }
}

function event() {
    // Monitors the typewriter progress (ok variable)
    imgInterval = setInterval(function () {
        if (ok == 3) {
            setTimeout(function() {
                buttonInterval = setInterval(buttonFadeIn, 50);
            }, 1500);
            clearInterval(imgInterval);
        }
    }, 50);
}

var imgInterval;
var buttonInterval;

event();