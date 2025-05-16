let cart = JSON.parse(localStorage.getItem("cart")) || [];


const cartui = () => {
    let cartContainer = document.getElementById("cart-items");
    let grandTotal = 0;
    cartContainer.innerHTML = cart.length === 0 ? '<tr><td colspan="6">  </td></tr>' : "";

    cart.forEach((item, index) => {
        let total = item.price * item.quantity;
        grandTotal += total;
        cartContainer.innerHTML += `
            <tr>
                <td><img src="${item.image}" alt="${item.title}" class="img-fluid" style="width: 50px;"></td>
                <td>${item.title}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="Quantity(${index}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-secondary" onclick="Quantity(${index}, 1)">+</button>
                </td>
                <td>$${total.toFixed(2)}</td>
                <td><button class="btn btn-success btn-sm" onclick="removeCart(${index})">DELETE</button></td>
            </tr>
        `;
    });
    document.getElementById("grand-total").textContent = grandTotal.toFixed(2);
    localStorage.setItem("cart", JSON.stringify(cart));
};

const Quantity = (index, val) => {
  if (cart[index]) {
    if (cart[index].quantity + val > 1) {
      cart[index].quantity += val;
    } else if (val === -1) {
   
      cart.splice(index, 1);
    } else {
      cart[index].quantity = 1;
    }
    cartui();
  }
};


const removeCart = (index) => {
    cart.splice(index, 1);
    cartui();
};

cartui();
