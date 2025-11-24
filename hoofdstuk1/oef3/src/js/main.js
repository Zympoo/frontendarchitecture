// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const ShopApp = (function(){
    let products = []

    function handleAdd(){
        const input = document.getElementById('shop_input')
        const product = input.value.trim();

        if(!isValidInput(product)){
            return;
        }

        addProduct(product)
        renderList()
        input.value = "";
    }

    function isValidInput(product){
        return product !== "";
    }

    function addProduct(product){
        products.push(product)
    }

    function renderList(){
        const list = document.getElementById('shop_list');

        list.innerHTML = products.map(p => `<li class="list-group-item">${p}</li>`)
            .join("");
    }

    return{
        handleAdd
    }
})();
document.querySelector("#shop_btn_add").addEventListener("click", ShopApp.handleAdd);