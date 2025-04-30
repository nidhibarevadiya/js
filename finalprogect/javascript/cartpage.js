
  

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

      const qtyContainer = document.createElement("div");
      qtyContainer.className = "d-flex justify-content-between align-items-center mb-2";

      const qtyLabel = document.createElement("p");
      qtyLabel.className = "mb-0";
      qtyLabel.textContent = `Quantity: ${item.qty}`;

      const btnGroup = document.createElement("div");



      const btnMinus = document.createElement("button");
      btnMinus.className = "btn btn-outline-secondary btn-sm";
      btnMinus.textContent = "−";
      btnMinus.addEventListener("click", async () => {
        if (item.qty > 1) {
          await cartsmethod.update(item.id, { qty: item.qty - 1 });
        } else {
          await cartsmethod.delete(item.id);
        }
        location.reload(); // Refresh
      });

      const btnPlus = document.createElement("button");
      btnPlus.className = "btn btn-outline-secondary btn-sm";
      btnPlus.textContent = "+";
      btnPlus.addEventListener("click", async () => {
        await cartsmethod.update(item.id, { qty: item.qty + 1 });
        location.reload();
      });

      btnGroup.appendChild(btnMinus);
      btnGroup.appendChild(btnPlus);
      qtyContainer.appendChild(qtyLabel);
      qtyContainer.appendChild(btnGroup);



const delBtn = document.createElement("button");
delBtn.className = "btn btn-danger w-100 mt-2";
delBtn.textContent = "Remove Item";
delBtn.addEventListener("click", () => removeFromCart(item.id));







      cardBody.appendChild(title);
      cardBody.appendChild(price);
      cardBody.appendChild(qtyContainer);
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


const removeFromCart = async (id) => {
  try {
    const item = await cartsmethod.getbyid(id);

    if (!item) {
      console.warn("Item not found in cart");
      return;
    }

    if (item.qty > 1) {

      await cartsmethod.update(id, { qty: item.qty - 1 });
      console.log(`Decreased qty of item ${id} to ${item.qty - 1}`);
    } else {
   
      await cartsmethod.delete(id);
      console.log(`Deleted item with ID ${id}`);
    }

    location.reload(); 
  } catch (err) {
    console.error("Error while removing from cart:", err);
  }
};


