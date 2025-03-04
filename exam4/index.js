let count = 0;
let interval;



const startfunction = () => {
    if (!interval) {
        interval = setInterval(() => {
            count++;
            document.getElementById("counter").innerHTML  = count;
        }, 500);
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
    document.getElementById("counter").innerHTML  = count;
};

document.getElementById("start").addEventListener("click", startfunction);
document.getElementById("stop").addEventListener("click", stopfunction);
document.getElementById("reste").addEventListener("click", restefunction);
