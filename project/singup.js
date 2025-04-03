let sing = JSON.parse(localStorage.getItem("singup's")) || [];

const IsExists = (email) => {
    let isUser =sing.find((singuser) => singuser.email === email);
  
    if (isUser) {
      return true;
    }
    return false;
  };


const handelsing = (e) => {

    e.preventDefault();

    let singuser = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }


    // sing.push(singuser);

    // console.log(sing)
     // Check if the user already exists based on email
  if (IsExists(singuser.email)) {
    alert("User already exists");
    return;
  } else {
    sing.push(singuser);
    localStorage.setItem("singup's", JSON.stringify(sing)); // Corrected key
    alert("User created successfully");
    document.getElementById("SignUp").reset(); // Reset the form
  }

}

document.getElementById("singpage").addEventListener("submit", handelsing)



