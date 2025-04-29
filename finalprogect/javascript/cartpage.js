// import { cartsmethod } from "../api/cart.js";
// import navbar from "../components/navbar.js";
// import { isLoggedIn } from "../utils/helper.js";


// document.getElementById("navbar").innerHTML = navbar();
// isLoggedIn();

// (async () => {
//   try {
//     let products = await cartsmethod.getAll();
//     console.log(products);
//     uiMaker(products);
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//   }
// })();

  

// document.addEventListener("click", (e) => {
//     if (e.target && e.target.id === "logout-btn") {
//       localStorage.removeItem("isLoggedIn");
//       localStorage.removeItem("user");
//       window.location.href = "/pages/login.html";
//     }
//   });
  

import { cartsmethod } from "../api/cart.js";
import navbar from "../components/navbar.js";
import { isLoggedIn } from "../utils/helper.js";

document.getElementById("navbar").innerHTML = navbar();
isLoggedIn();

(async function () {
  try {
    const cartItems = await cartsmethod.getAll();
    console.log("Cart Items:", cartItems);
    renderCartUI(cartItems);
  } catch (err) {
    console.error("Error loading cart items", err);
  }
})();

function renderCartUI(cartItems) {
  const container = document.createElement("div");
  container.className = "container mt-4";
  container.innerHTML = `<h2 class="mb-4">Your Cart</h2>`;

  const row = document.createElement("div");
  row.className = "row";

  if (cartItems.length === 0) {
    container.innerHTML += "<p>Your cart is empty.</p>";
  } else {
    cartItems.forEach((item) => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";

      const card = document.createElement("div");
      card.className = "card h-100";

      const img = document.createElement("img");
      img.src = item.image;
      img.className = "card-img-top";
      img.alt = item.title;
      img.style.height = "200px";
      img.style.objectFit = "cover";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = item.title;

      const price = document.createElement("p");
      price.className = "card-text fw-bold";
      price.textContent = `₹${item.price}`;

      const qty = document.createElement("p");
      qty.textContent = `Quantity: ${item.qty}`;

      const delBtn = document.createElement("button");
      delBtn.className = "btn btn-danger";
      delBtn.textContent = "Remove";
      delBtn.addEventListener("click", async () => {
        await cartsmethod.delete(item.id);
        location.reload(); // Refresh to update UI
      });

      cardBody.appendChild(title);
      cardBody.appendChild(price);
      cardBody.appendChild(qty);
      cardBody.appendChild(delBtn);

      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      row.appendChild(col);
    });
  }

  container.appendChild(row);
  document.body.appendChild(container);
}

