// Store all your messages in one list
const messages = [
    "Hey! Adeline",
    "Happy 1 week .",
    "You're sooooo cute!!!" // You can add as many as you want now!
];

let i = 0;
let ok = 0; // The index of the message we are currently typing

function typeWriter() {
    let currentText = messages[ok];
    let elementId = "txt" + (ok + 1); // Looks for txt1, txt2, etc.

    if (i < currentText.length) {
        document.getElementById(elementId).innerHTML += currentText.charAt(i);
        i++;
    } else {
        i = 0;
        ok++; // Move to the next message index
        
        // Stop everything when we run out of messages
        if (ok >= messages.length) {
            clearInterval(typeInterval);
            // Optional: Trigger your timer/fade-in here
            startFadeIn(); 
        }
    }
}

var typeInterval = setInterval(typeWriter, 100);