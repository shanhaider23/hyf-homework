class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    if (currency === "EUR") {
      return this.price * 0.13;
    } else if (currency === "DKK") {
      return this.price * 1;
    } else if (currency === "USD") {
      return this.price * 0.15;
    } else if (currency === "GBP") {
      return this.price * 0.11;
    }
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter((item) => item !== product);
  }

  searchProduct(productName) {
    const productSearch = this.products.filter((item) =>
      item.name.toLowerCase().includes(productName.toLowerCase())
    );
    return productSearch;
  }

  getTotal() {
    const total = this.products
      .map((item) => item.price)
      .reduce((sum, value) => sum + value);
    return total;
  }

  renderProducts() {
    const table = document.getElementById("shopping");
    shoppingCart.products.forEach((obj) => {
      let item = document.createElement("li");
      item.innerHTML = `${obj.name}<br> Price:${obj.price}`;
      table.append(item);
    });
  }

  getUser() {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${Math.floor(
        Math.random() * 10 + 1
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "user"
        ).innerHTML = `${data.username}'s Shopping cart:`;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);

//Add products
const firstItem = new Product("Galaxy S-20", 4000);
const secondItem = new Product("Play Station 4", 2500);
const thirdItem = new Product("Bicyle", 8400);
shoppingCart.addProduct(firstItem);
shoppingCart.addProduct(secondItem);

//remove product
shoppingCart.removeProduct(firstItem);

//Search products
let searchRestablet = shoppingCart.searchProduct("flat");
console.log(searchRestablet);

shoppingCart.getUser();
shoppingCart.renderProducts();
let price = document.getElementById("totalPrice");
let total = shoppingCart.getTotal();
price.innerHTML = `Total:<b> ${total}`;

//Convert to currency
let newItem = new Product("plant", 50);
console.log(firstItem.convertToCurrency("DKK"));
