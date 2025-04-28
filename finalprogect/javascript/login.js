import navbar from "../components/navbar.js";
import userMethod from "../api/user.js";
import { getvalue } from "../utils/helper.js";

document.getElementById("navbar").innerHTML = navbar();

const handellogin = async (user) => {
    let res =await userMethod.login(user)
    console.log(res)

    if(res.length == 0){
        alert ("invalide email / password")
    }
    else{
  alert ("logged")
  localStorage.setItem("isLoggedIn", true);

  localStorage.setItem("user",JSON.stringify(res[0]))
  window.location.href = "../index.html";
    }
}

const Onsubmit = (e) => {
  e.preventDefault();

  let user = {
  
    email: getvalue("email"),
    password: getvalue("password"),
    };
    console.log(user);
    
  handellogin(user)
    
    

};

document.getElementById("user").addEventListener("submit", Onsubmit);