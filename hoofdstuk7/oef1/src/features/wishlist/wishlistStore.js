import { CoreEventBus } from '../../core/eventBus.js';

const WishlistStore = (function () {
    let items = [];

    function add(product) {
        items.push(product);
        notifyChange();
    }

    function getItems() {
        return [...items];
    }

    function getTotal() {
        return items.reduce((sum, item) => sum + item.price, 0);
    }

    function notifyChange() {
        CoreEventBus.publish('WISHLIST_CHANGED', {
            items: getItems(),
            total: getTotal()
        });
    }

    // Abonneer op CART_ADD events
    CoreEventBus.subscribe('WISHLIST_ADD', payload => {
        add(payload.product);
    });

    return {
        getItems
    };
})();

export { WishlistStore };