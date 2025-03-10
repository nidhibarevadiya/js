const getvalue = (id) => {
  return document.getElementById(id).value;
};

const validateInput = (id, regex) => {
let inputField = document.getElementById(id); 
let value = inputField.value; 

if (regex.test(value)) {
  inputField.className = "passed"; 
} else {
  inputField.className = "err"; 
}
};

const handeluserinfo = (e) => {
  e.preventDefault();

  let name = getvalue("name");
  let email = getvalue("email");
  let password = getvalue("password");
  let number = getvalue("number");

 
  validateInput("name", /^[a-zA-Z\s]{3,30}$/); 
  validateInput("email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/); 
  validateInput("password", /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/); 
  validateInput("number", /^(0|91)?[6-9][0-9]{9}$/);
};

document.getElementById("userinfo").addEventListener("submit", handeluserinfo);