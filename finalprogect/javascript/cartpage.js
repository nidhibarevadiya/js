import { cartsmethod } from "../api/cart.js";
import navbar from "../components/navbar.js";
import { isLoggedIn } from "../utils/helper.js";

// Set the navbar
document.getElementById("navbar").innerHTML = navbar();
isLoggedIn();

// Fetch and display cart items
(async () => {
  try {
    let products = await cartsmethod.getAll();
    console.log(products);
    uiMaker(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
})();

const uiMaker = (cartItems) => {
    const container = document.getElementById("cartItems");
    container.innerHTML = "";
    
    cartItems.forEach((item) => {
      const row = document.createElement("div");
      row.className = "row mb-3";
      
      const colImage = document.createElement("div");
      colImage.className = "col-3";
      const image = document.createElement("img");
      image.src = item.image || "https://via.placeholder.com/150";
      image.alt = item.title;
      image.className = "img-fluid";
      colImage.appendChild(image);
      
      const colDetails = document.createElement("div");
      colDetails.className = "col-6";
      const title = document.createElement("h6");
      title.textContent = item.title;
      const price = document.createElement("p");
      price.textContent = `Price: ₹${item.price}`;
      const quantity = document.createElement("p");
      quantity.textContent = `Quantity: ${item.quantity}`;
      colDetails.appendChild(title);
      colDetails.appendChild(price);
      colDetails.appendChild(quantity);
      
      const colRemove = document.createElement("div");
      colRemove.className = "col-3 d-flex align-items-center justify-content-center";
      const removeBtn = document.createElement("button");
      removeBtn.className = "btn btn-danger";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => removeItemFromCart(item.id));
      colRemove.appendChild(removeBtn);
      
      row.appendChild(colImage);
      row.appendChild(colDetails);
      row.appendChild(colRemove);
      container.appendChild(row);
    });
  };
  
  // Function to remove an item from cart
  const removeItemFromCart = async (id) => {
    try {
      await cartsmethod.delete(id);
      refreshCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };
  
  const refreshCart = async () => {
    try {
      let cartItems = await cartsmethod.getAll();
      uiMaker(cartItems);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };
  

document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "logout-btn") {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      window.location.href = "/pages/login.html";
    }
  });
  
