function bill() {
    let number = document.getElementById("enternum").value

    let nidhi = 0
    let fee = 100;

    if (number <= 50)
        {
          nidhi = number * 5;
        } else if (number > 50 && number <= 100)
        {
          nidhi = 50 * 5 + (number - 50) * 10;
        }
    else if (number <= 150 && number >= 101) {
        nidhi = 50 * 5 + 50 * 10 + (number - 100) * 15;
    }
    else (number > 150)
    {
        nidhi = 50 * 5 + 50 * 10 + 50 * 15 + (number - 150) * 20;
    }

    let total = nidhi + fee;
    console.log(total);
    document.getElementById("result").innerHTML = (total);


}