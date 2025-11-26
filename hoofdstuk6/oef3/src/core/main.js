// =========================
// core/main.js
// =========================

// CSS + Bootstrap
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

// Features
import { ProductsFeature } from '../features/products/index.js';
import { CartFeature } from '../features/cart/index.js';
import { WishlistFeature } from '../features/wishlist/index.js';
import { StatsFeature } from '../features/stats/index.js';

// =========================
// AppMain (bootstrap)
// =========================

export const AppMain = (function () {
    function init() {
        // Hier initialiseren we alle features
        ProductsFeature.init();
        CartFeature.init();
        WishlistFeature.init();
        StatsFeature.init();
    }

    return {
        init
    };
})();

// Als de pagina geladen is, starten we de app
document.addEventListener('DOMContentLoaded', () => {
    AppMain.init();
});
