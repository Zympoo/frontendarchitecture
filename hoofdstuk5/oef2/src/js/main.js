// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

// Data/service-laag
const productService = (function () {
    let products = [];

    function addProduct(name, price) {
        const product = {
            id: Date.now(),
            name,
            price
        };
        products.push(product);
    }

    function getProducts() {
        return [...products];
    }

    function getTotalPrice(){
        return products.reduce((sum, p) => sum + p.price, 0)
    }

    return {
        addProduct, getProducts, getTotalPrice
    };
})();
// UI-laag
const productUI = (function () {
    function renderList(products) {
        const list = document.querySelector("#ex2_product_list");
        list.innerHTML = products
            .map(product => `<li class="list-group-item">${product.name} – €${product.price.toFixed(2)}</li>`)
            .join("");
    }

    function renderTotal(total){
        const outTotal = document.querySelector("#ex2_total");
        outTotal.innerHTML = `Totaal: €${total.toFixed(2)}`;
    }

    function getProductValues() {
        const productName = document.querySelector("#ex2_product_name").value.trim();
        const productPrice = Number(document.querySelector("#ex2_product_price").value);

        return {
            productName,
            productPrice
        }
    }

    function clearInput() {
        const productName = document.querySelector("#ex2_product_name")
        const productPrice = document.querySelector("#ex2_product_price")

        productName.value = "";
        productPrice.value = "";
    }

    function showError(message) {
        alert(message);
    }

    return {
        renderList, renderTotal, getProductValues, clearInput, showError
    };
})();

// App-laag
const productApp = (function () {
    function init() {
        const btn = document.querySelector("#ex2_btn_add");
        btn.addEventListener("click", handleAddProduct);
    }

    function handleAddProduct() {
        const productValues = productUI.getProductValues();

        if (!productValues.productName || !productValues.productPrice) {
            productUI.showError("Lege velden niet toegelaten");
            return;
        }
        productService.addProduct(productValues.productName, productValues.productPrice);
        const products = productService.getProducts();
        const total = productService.getTotalPrice();
        productUI.renderList(products);
        productUI.renderTotal(total);
        productUI.clearInput();
    }

    return {
        init
    };
})();

productApp.init();