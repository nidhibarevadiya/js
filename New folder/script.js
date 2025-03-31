let sing = [];
const handelsing = (e) => {

    e.preventDefault();

    let singuser = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }


    sing.push(singuser);

    console.log(sing)

}

document.getElementById("singpage").addEventListener("submit", handelsing)