console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
    let listUl = document.createElement('ul');
    let main = document.querySelector('main');
    let listLi;
    main.appendChild(listUl);
    for (let i = 0; i < products.length; i++) {
        listLi = document.createElement('li');
        listLi.innerHTML = `<b>${products[i].name}</b> <br>  
            Price: ${products[i].price} <br>
            Rating: ${products[i].rating}`;
        listUl.appendChild(listLi);
    }
}

renderProducts(products); 






