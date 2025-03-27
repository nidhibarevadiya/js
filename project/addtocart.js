let cart = JSON.parse(localStorage.getItem("cart")) || [];

const displayCart = () => {
   
    let cartContainer = document.getElementById("cart-items");
    let temp = "";
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }
  
    cartContainer.innerHTML = cart
  .map((item, index) => `
    <div class="cart-item">
      <div class="col-lg-4 col-md-6 py-3">
        <div class="box">
          <div class="flex"><img src="${item.image}" alt="" class="img-fluid im"></div>
          <div class="flex"><h3 class="ti">${item.title}</h3></div>
          <div class="flex"><p class="des">${item.description}</p></div>
          <div class="flex"><p class="ti1">$${item.price.toFixed(2)}</p></div>
          <div class="flex"><p class="ti1">${item.category}</p></div>
          <div class="flex"><p class="ti3">${item.rating ? item.rating.rate : "No Rating"}</p></div>
          <button class="btn btn-danger" onclick="removeFromCart(${index})">DELETE</button>
        </div>
      </div>
    </div>
  `).join("");
  };
  
  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  };
  
  // Display cart items on page load
  displayCart();