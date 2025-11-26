// =========================
// core/main.js
// =========================

// CSS + Bootstrap
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

// Features
import { UserProfileFeature } from '../features/userprofile/index.js';

// =========================
// AppMain (bootstrap)
// =========================

export const AppMain = (function () {
    function init() {
        // Hier initialiseren we alle features
        UserProfileFeature.init();
    }


    return {
        init
    };
})();

// Als de pagina geladen is, starten we de app
document.addEventListener('DOMContentLoaded', () => {
    AppMain.init();
});
