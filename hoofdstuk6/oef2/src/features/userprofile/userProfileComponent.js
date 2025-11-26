// =========================
// features/userprofile/userProfileComponent.js
// =========================

export const UserProfileComponent = (function () {

    function render(user) {
        document.getElementById('feat_user_out_name').textContent = user.name || "-";
        document.getElementById('feat_user_out_email').textContent = user.email || "-";
    }

    function getValues(){
        const name = document.getElementById('feat_user_name').value.trim();
        const email = document.getElementById('feat_user_email').value.trim();

        return {
            name,
            email
        }
    }

    function clearInput(){
        const inputName = document.getElementById('feat_user_name');
        const inputEmail = document.getElementById('feat_user_email');

        inputName.value = "";
        inputEmail.value = "";
    }

    return {
        render,
        getValues,
        clearInput
    };
})();