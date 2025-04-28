import navbar from "../components/navbar.js";
import userMethod from "../api/user.js";
import { getvalue } from "../utils/helper.js";

document.getElementById("navbar").innerHTML = navbar();



const Onsubmit = (e) => {
  e.preventDefault();

  let user = {
    name: getvalue("name"),
    email: getvalue("email"),
    password: getvalue("password"),
    };
    console.log(user);
    
    userMethod.create(user);

    alert("sign up succesful..")
  
    
    

};

document.getElementById("user").addEventListener("submit", Onsubmit);