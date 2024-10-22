let cartQuantity = 0;

document.querySelector(
  "#add-to-cart"
).innerText = `Your Bag has ${cartQuantity} items`;

function addToCart() {
  cartQuantity++;
  document.querySelector(
    "#add-to-cart"
  ).innerText = `Your Bag has ${cartQuantity} items`;
}

function removeFromCart() {
  if (cartQuantity > 0) {
    cartQuantity--;
  }
  document.querySelector(
    "#add-to-cart"
  ).innerText = `Your Bag has ${cartQuantity} items`;
}

function doubleCart() {
  cartQuantity += 2;
  document.querySelector(
    "#add-to-cart"
  ).innerText = `Your Bag has ${cartQuantity} items`;
}
