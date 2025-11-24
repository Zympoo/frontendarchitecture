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
            alert('Please enter valid input')
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
        let html = "";
        for (let i = 0; i < products.length; i++) {
            html += "<li class='list-group-item'>" + products[i] + "</li>";
        }

        document.getElementById('shop_list').innerHTML = html;
    }

    return{
        handleAdd
    }
})();
document.querySelector("#shop_btn_add").addEventListener("click", ShopApp.handleAdd);