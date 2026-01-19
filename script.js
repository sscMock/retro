let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

// LOAD CART PAGE
function loadCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>₹${item.price}</td>
        <td><button onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
  });

  totalPrice.innerText = "Total: ₹" + total;
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// CHECKOUT (WHATSAPP)
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let message = "I want to order:\n";
  let total = 0;

  cart.forEach(item => {
    message += `- ${item.name} ₹${item.price}\n`;
    total += item.price;
  });

  message += `\nTotal: ₹${total}`;

  let phone = "919XXXXXXXXX"; // ← replace with your WhatsApp number
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// AUTO LOAD
loadCart();
