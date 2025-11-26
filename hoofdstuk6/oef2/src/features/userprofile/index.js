// =========================
// features/cart/index.js (UserProfileFeature)
// =========================

import { UserProfileStore } from './userProfileStore.js';
import { UserProfileComponent } from './userProfileComponent.js';

export const UserProfileFeature = (function () {

    function init() {
        // initial render
        document.getElementById('feat_user_save')?.addEventListener('click', () => {handleSave()})
    }

    function handleSave(){
        const { name, email } = UserProfileComponent.getValues()

        if(!name || !email){
            return;
        }

        UserProfileStore.setUser(name, email);
        UserProfileComponent.render(UserProfileStore.getUser())
        UserProfileComponent.clearInput()
    }

    return {
        init
    };
})();