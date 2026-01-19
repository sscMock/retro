const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const product = products.find(p => p.id === id);

document.getElementById("prod-img").src = product.img;
document.getElementById("prod-name").innerText = product.name;
document.getElementById("prod-price").innerText = product.price;

function addCurrentProduct() {
  addToCart(product);
  toggleCart();
}
