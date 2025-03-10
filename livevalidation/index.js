const getValue = (id) => {
  return document.getElementById(id).value;
};

const handleUserData = (e) => {
  e.preventDefault();

  let username = getValue("username");
  let email = getValue("email");
  let password = getValue("password");
  let number = getValue("number");
};

document.getElementById("userData").addEventListener("submit", handleUserData);

// live validation

document.querySelector("#username").addEventListener("input", (e) => {
  let username = e.target.value;
  let usernameRegex = /^[a-zA-Z\-]+$/;

  if (usernameRegex.test(username)) {
    document.getElementById("username").setAttribute("class", "paased");
  } else {
    document.getElementById("username").setAttribute("class", "err");
  }
});

const validation = (id, type) => {
  document.getElementById(id).setAttribute("class", type);
};

document.querySelector("#password").addEventListener("input", (e) => {
  let password = e.target.value;
  let passwordRegex =
    /^(?=.\d)(?=.[A-Z])(?=.[a-z])(?=.[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&@?]{8,20}$/;

  if (passwordRegex.test(password)) {
    validation("password", "paased");
  } else {
    validation("password", "err");
  }
});