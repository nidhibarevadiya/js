let interval
let countdown1

const countwork = () => {


    let countdown11 = document.getElementById("inputnumber").value
    countdown1= localStorage.getItem("keycount") || countdown11 || 0
    document.getElementById("show").innerHTML = countdown1;

    interval=setInterval(() => {

        if (countdown1 > 0) {
            countdown1--;
            document.getElementById("show").innerHTML = countdown1;
            localStorage.setItem("keycount",countdown1)
        } else {
            clearInterval(); // Stop countdown at 0
            // alert("Countdown finished!");
        }

    }, 1000)




}

document.getElementById("countstart").addEventListener("click", countwork)






