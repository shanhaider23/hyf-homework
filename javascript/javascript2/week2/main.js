console.log("Script loaded");
const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  let listUl = document.createElement("ul");
  let main = document.querySelector("main");
  let listLi;
  main.appendChild(listUl);
  for (let i = 0; i < products.length; i++) {
    listLi = document.createElement("li");
    listLi.innerHTML = `<b>${products[i].name}</b> <br>  
          Price: ${products[i].price} <br>
          Rating: ${products[i].rating}`;
    listUl.appendChild(listLi);
  }
}
renderProducts(products);

// 1-Searching for products
let inputBox = document.getElementById("process");
inputBox.addEventListener("keyup", myFunctionSearch);
function myFunctionSearch() {
  let searchInput = inputBox.value.toLowerCase();
  console.log(searchInput);
  let inputProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchInput)
  );
  console.log(inputProducts);
  document.getElementById(
    "display"
  ).innerHTML = `Product : ${inputProducts[0].id}<br>Name : ${inputProducts[0].name}<br>Price :${inputProducts[0].price}<br>Rating :${inputProducts[0].rating}<br>
     Product : ${inputProducts[1].id}<br>Name : ${inputProducts[1].name}<br>Price :${inputProducts[1].price}<br>Rating :${inputProducts[1].rating}<br>
     Product : ${inputProducts[2].id}<br>Name : ${inputProducts[2].name}<br>Price :${inputProducts[2].price}<br>Rating :${inputProducts[2].rating}`;

  renderProducts(inputProducts);
}

//2-Search for price
let inputBox2 = document.getElementById("total");
inputBox2.addEventListener("keyup", myFunctionPrice);
function myFunctionPrice() {
  let inputPrice = inputBox2.value;
  if (inputPrice !== "") {
    let lastPrice = products.filter((item) => item.price <= inputPrice);
    console.log(lastPrice);
    renderProducts(lastPrice);
  } else {
    renderProducts(products);
  }
}
