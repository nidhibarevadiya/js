import { cartsmethod } from "../api/cart.js";
import { productmethod } from "../api/product.js";
import navbar from "../components/navbar.js";
import { isLoggedIn } from "../utils/helper.js";

document.getElementById("navbar").innerHTML = navbar();

isLoggedIn();

// IIFE
(async () => {
  try {
    let products = await productmethod.getAll();
    console.log(products);
    uiMaker(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
})();



const handelcart = async (data) => {
    console.log(data)
    let res = await cartsmethod.getbyid(data.id)
    console.log(res)
    if(!res){
      cartsmethod.post({...data,qty:1})
    }
    else{
      cartsmethod.update(data.id,{qty:res.qty+1})
    }
}



const uiMaker = (data) => {
    const container = document.getElementById("productList");
    container.innerHTML = "";
  
    data.forEach((product) => {
      // Outer column div
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 mb-4";
  
      // Card
      const card = document.createElement("div");
      card.className = "card h-100 border-0 shadow-sm";
  
      // Image
      const img = document.createElement("img");
      img.src = product.image || product.img || "https://via.placeholder.com/300x200";
      img.alt = product.title || "Product Image";
      img.className = "card-img-top";
      img.style.height = "250px";
      img.style.objectFit = "cover";
      img.style.borderTopLeftRadius = "10px";
      img.style.borderTopRightRadius = "10px";
  
      // Card Body
      const cardBody = document.createElement("div");
      cardBody.className = "card-body text-center";
  
      const title = document.createElement("h5");
      title.className = "card-title fw-bold mb-2";
      title.textContent = product.title || "No Title";
  
      const desc = document.createElement("p");
      desc.className = "card-text text-muted small mb-2";
      desc.textContent = product.desc || "No Description";
  
      const category = document.createElement("p");
      category.className = "text-secondary small mb-2";
      category.innerHTML = `<strong>Category:</strong> ${product.category || "Unknown"}`;
  
      const price = document.createElement("p");
      price.className = "fw-bold text-primary fs-5 mb-3";
      price.textContent = `₹${product.price || "0"}`;
  
      // Footer with button
      const footer = document.createElement("div");
      footer.className = "card-footer bg-transparent border-0";
  
      const button = document.createElement("button");
      button.className = "btn btn-dark w-100 fw-semibold";
      button.textContent = "Add to Cart";
      button.addEventListener("click", () => handelcart(product));
      
  
      // Assemble card
      cardBody.appendChild(title);
      cardBody.appendChild(desc);
      cardBody.appendChild(category);
      cardBody.appendChild(price);
      footer.appendChild(button);
  
      card.appendChild(img);
      card.appendChild(cardBody);
      card.appendChild(footer);
      col.appendChild(card);
      container.appendChild(col);
    });
  };
  

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "logout-btn") {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.href = "/pages/login.html";
  }
});
