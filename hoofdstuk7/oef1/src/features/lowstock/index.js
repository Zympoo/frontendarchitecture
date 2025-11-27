import {CoreEventBus} from "../../core/eventBus";
import {ProductService} from "../products/productService";

export const LowStockFeature = (function () {
    let counts = {}

    function init(){
        CoreEventBus.subscribe("CART_ADD", payload => {
            const id = payload.product.id;
            counts[id] = (counts[id] || 0) + 1;

            render();
        });
    }

    function render(){
        const ul = document.getElementById('feat_lowstock_list')

        const warnings = Object.entries(counts)
            .filter(([id, count]) => count >= 3)
            .map(([id, count]) => {
                const p = ProductService.findById(Number(id));
                return `<li class="list-group-item">${p.name}: vaak toegevoegd (${count}×)</li>`;
            }).join("")

        ul.innerHTML = warnings || "<li class='list-group-item'>Geen waarschuwingen</li>";

    }

    return {
        init
    }
})();