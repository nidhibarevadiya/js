
let countdown1

const countwork = () => {


    let countdown11 = document.getElementById("inputnumber").value
    countdown1 = localStorage.getItem("keycount") || countdown11 || 0
    document.getElementById("show").innerHTML = countdown1;

    setInterval(() => {

        if (countdown1 > 0) {
            countdown1--;
            document.getElementById("show").innerHTML = countdown1;
            localStorage.setItem("keycount", countdown1)
        } else {
            clearInterval();
        }

    }, 1000)




}

document.getElementById("countstart").addEventListener("click", countwork)






