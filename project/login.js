let sing = JSON.parse(localStorage.getItem("signup's")) || [];  

const IsExists = (email) => {
    let isUser = sing.find((singuser) => singuser.email === email)
    if (isUser) {
        return { found: true, singuser: isUser };
    }
    else {
        return { found: false, singuser: isUser };
    }

};



const handleSubmit = (e) => {
  e.preventDefault(); 
  let login = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };


    let userData = IsExists(login.email);
    if (userData.found) {
        if (userData.singuser.password == login.password)
        {
            alert("login success");
            window.location.href="./home.html"
        }
        else {
            alert("password does not match")
        }
    }
    else {
        alert("invalid email");
    }

  
};



document.getElementById("loginpage").addEventListener("submit", handleSubmit);