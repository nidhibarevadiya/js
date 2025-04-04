let sing = JSON.parse(localStorage.getItem("signup's")) || [];

const IsExists = (email) => {
  let isUser = sing.find((singuser) => singuser.email === email);

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

  if (IsExists(singuser.email)) {
    alert("User already exists");
    return;
  } else {
    sing.push(singuser);
    localStorage.setItem("signup's", JSON.stringify(sing));
    alert("User created successfully");
    window.location.href = "./loginpage.html"
    document.getElementById("singpage").reset();
  }

}

document.getElementById("singpage").addEventListener("submit", handelsing)




document.querySelector("#name").addEventListener("input", (e) => {
  let name = e.target.value;
  let usernameRegex = /^[a-zA-Z\-]+$/;

  if (usernameRegex.test(name)) {
    document.getElementById("name").setAttribute("class", "paased");
  } else {
    document.getElementById("name").setAttribute("class", "err");
  }
});

const validation = (id, type) => {
  document.getElementById(id).setAttribute("class", type);
};

document.querySelector("#email").addEventListener("input", (e) => {
  let email = e.target.value;
  let emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    validation("email", "paased");
  } else {
    validation("email", "err");
  }
});


