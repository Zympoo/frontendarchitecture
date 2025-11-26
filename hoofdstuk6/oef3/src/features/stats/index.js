// =========================
// features/stats/index.js (StatsFeature)
// =========================

import { StatsComponent } from './statsComponent.js';
import { CoreEventBus } from '../../core/eventBus.js';
import {CartStore} from "../cart/cartStore";

export const StatsFeature = (function () {

    function init() {
        // initial render
        CoreEventBus.subscribe("CART_CHANGED", payload => {
            const items = payload.items;
            const count = payload.items.length;
            const total = payload.total;
            const avg = count === 0 ? 0 : total / count;
            StatsComponent.render(count, avg);
        })

        const items = CartStore.getItems();
        const total = CartStore.getTotal();
        const count = items.length;
        const avg = count === 0 ? 0 : total / count;
        StatsComponent.render(count, avg);
    }

    return {
        init
    };
})();