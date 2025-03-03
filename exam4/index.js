let count = 0;
let interval;

const counterDisplay = document.getElementById("counter");

const startfunction = () => {
    if (!interval) {
        interval = setInterval(() => {
            count++;
            counterDisplay.textContent = count;
        }, 1000);
    }
};

const stopfunction = () => {
    clearInterval(interval);
    interval = null;
};

const restefunction = () => {
    clearInterval(interval);  // Stop counting on reset
    interval = null;
    count = 0;
    counterDisplay.textContent = count;
};

document.getElementById("start").addEventListener("click", startfunction);
document.getElementById("stop").addEventListener("click", stopfunction);
document.getElementById("reste").addEventListener("click", restefunction);
