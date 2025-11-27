// =========================
// features/cart/userProfileStore.js
// =========================

import {CoreEventBus as coreEventBus, CoreEventBus} from '../../core/eventBus.js';

const CartStore = (function () {
    let items = [];

    function add(product) {
        items.push(product);
        notifyChange();
    }

    function remove(id){
        items = items.filter(item => item.id !== id);
        notifyChange();
    }

    function getItems() {
        return [...items];
    }

    function getTotal() {
        return items.reduce((sum, item) => sum + item.price, 0);
    }

    function notifyChange() {
        CoreEventBus.publish('CART_CHANGED', {
            items: getItems(),
            total: getTotal()
        });
    }

    // Abonneer op CART_ADD events
    CoreEventBus.subscribe('CART_ADD', payload => {
        add(payload.product);
    });
    coreEventBus.subscribe('CART_REMOVE', payload => {
        remove(payload.id);
    })
    CoreEventBus.subscribe('CART_CLEAR', () => {
        items = []
        notifyChange()
    })

    return {
        getItems,
        getTotal
    };
})();

export { CartStore };
