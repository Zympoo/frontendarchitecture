// =========================
// features/userprofile/userProfileStore.js
// =========================

const UserProfileStore = (function () {
    let user = [{
        name: "",
        email: ""
    }];

    function setUser(name, email) {
        user = { name, email };
    }

    function getUser() {
        return user;
    }

    return {
        getUser,
        setUser
    };
})();

export { UserProfileStore };
