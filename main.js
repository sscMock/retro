const grid = document.getElementById("product-grid");

if (grid) {
  products.forEach(p => {
    grid.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="location.href='product.html?id=${p.id}'">View Product</button>
      </div>
    `;
  });
}
