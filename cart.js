let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const count = document.getElementById("cart-count");
  if (count) count.innerText = cart.length;

  const box = document.getElementById("cart-items");
  const totalBox = document.getElementById("cart-total");
  if (!box) return;

  box.innerHTML = "";
  let total = 0;

  cart.forEach(p => {
    total += p.price;
    box.innerHTML += `
      <div class="cart-item">
        <span>${p.name}</span>
        <span>₹${p.price}</span>
      </div>
    `;
  });

  totalBox.innerText = total;
}

function toggleCart() {
  document.getElementById("cartDrawer").classList.toggle("open");
}

updateCart();
