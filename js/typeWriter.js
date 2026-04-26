var i = 0;
var ok = 0; // Start at 0 for typing
var text1 = "Hey! Adeline.";
var text2 = "Happy 1 weekiversary!";

function typeWriter(text, para) {
    if (i < text.length) {
        document.getElementById(para).innerHTML += text.charAt(i);
        i++;
    } else {
        i = 0;  // Reset character index for the next line
        ok += 1; // Move to the next state
    }
}

var typeInterval = setInterval(function() {
    if (ok == 0) {
        typeWriter(text1, "txt1");
    } else if (ok == 1) {
        typeWriter(text2, "txt2");
    } else if (ok == 2) {
        clearInterval(typeInterval);
        // This is where your timer/fade-in script from earlier can take over!
    }
}, 100);