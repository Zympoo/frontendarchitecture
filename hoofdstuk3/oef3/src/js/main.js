// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
class SessionStoreSingleton {
    static instance;

    constructor() {
        if (SessionStoreSingleton.instance) {
            return SessionStoreSingleton.instance;
        }
        this.loggedIn = false;
        this.username = null;

        SessionStoreSingleton.instance = this;
    }

    login(name){
        if(name.trim() === "") return;

        this.loggedIn = true;
        this.username = name;
    }
    logout(){
        this.loggedIn = false;
        this.username = null;
    }
    isLoggedIn(){
        return this.loggedIn;
    }

    getUserName(){
        return this.username
    }
}
const SessionStore = new SessionStoreSingleton();

document.getElementById('sess_btn_login')?.addEventListener('click', () => {
    const username = document.getElementById('sess_username').value.trim();
    SessionStore.login(username)
})
document.getElementById('sess_btn_logout')?.addEventListener('click', () => {SessionStore.logout()})
document.getElementById('sess_btn_refresh')?.addEventListener('click', () => {
    const outStatus = document.getElementById('sess_out_status')

    if(SessionStore.isLoggedIn()){
        outStatus.textContent = 'Ingelogd'
    }
    else{
        outStatus.textContent = 'Niet ingelogd'
    }

    document.getElementById('sess_out_user').textContent = SessionStore.getUserName()
})