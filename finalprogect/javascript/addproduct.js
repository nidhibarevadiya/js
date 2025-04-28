import { productmethod } from "../api/product.js";
import navbar from "../components/navbar.js";
import { getvalue, isLoggedIn } from "../utils/helper.js";

document.getElementById("navbar").innerHTML=navbar();


isLoggedIn()


document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "logout-btn") {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      window.location.href = "/pages/login.html";
    }
  });


  const handelsubmit =(e)=>{
    e.preventDefault();

    const product ={
      title : getvalue("name"),
      price : getvalue("price"),
      image : getvalue("image"),
      desc : getvalue("desc"),
      Category : getvalue("Category"),
    }
    console.log(product)
    productmethod.post(product)
  }



  document.getElementById("product").addEventListener("submit",handelsubmit)
  