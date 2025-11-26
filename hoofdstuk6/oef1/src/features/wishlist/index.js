import { CoreEventBus } from '../../core/eventBus.js';
import {WishlistStore} from "./wishlistStore";
import {WishlistComponent} from "./wishlistComponent";

export const Index = (function () {

    function init() {
        // initial render
        WishlistComponent.render(WishlistStore.getItems());

        // luister naar cart-changes
        CoreEventBus.subscribe('WISHLIST_CHANGED', payload => {
            WishlistComponent.render(payload.items, payload.total);
        });
    }

    return {
        init
    };
})();