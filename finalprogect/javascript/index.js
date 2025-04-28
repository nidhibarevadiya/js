import navbar from "../components/navbar.js";
import { isLoggedIn } from "../utils/helper.js";

document.getElementById("navbar").innerHTML=navbar();


isLoggedIn()


document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "logout-btn") {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      window.location.href = "/pages/login.html";
    }
  });
  