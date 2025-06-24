let cart = {};

const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

const showProducts = () => {
  let str = "<div class='row'>";
  products.map((value) => {
    str += `<div class="product">
      <h3>${value.name}</h3>
      <h4>$${value.price}</h4>
      <button onclick='addToCart(${value.id})'>Add to Cart</button>
    </div>`;
  });
  str += "</div>";
  document.getElementById("root").innerHTML = str;
  document.getElementById("total").innerText = "";
};

function addToCart(id) {
  cart = {
    ...cart,
    [id]: (cart[id] || 0) + 1
  };
  alert("Added to cart!");
}

function increment(id) {
  if (cart[id]) {
    cart = {
      ...cart,
      [id]: cart[id] + 1
    };
  }
  showCart();
}

function decrement(id) {
  if (cart[id] > 1) {
    cart = {
      ...cart,
      [id]: cart[id] - 1
    };
  } else {
    const { [id]: _, ...rest } = cart;
    cart = rest;
  }
  showCart();
}

function showCart() {
  let str = "<ul>";
  let total = 0;

  products.forEach((value) => {
    if (cart[value.id]) {
      const itemTotal = value.price * cart[value.id];
      total += itemTotal;
      str += `<li>
        ${value.name} - $${value.price} 
        <button onclick="decrement(${value.id})">-</button>
        ${cart[value.id]}
        <button onclick="increment(${value.id})">+</button> 
        = $${itemTotal}
      </li>`;
    }
  });

  str += "</ul>";
  document.getElementById("root").innerHTML = str;
  document.getElementById("total").innerText = `Total: $${total}`;
}
