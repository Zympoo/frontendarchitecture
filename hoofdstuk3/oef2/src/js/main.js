// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
class NotificationCounterSingleton{
    static instance;

    constructor() {
        if(NotificationCounterSingleton.instance){
            return NotificationCounterSingleton.instance;
        }
        this.count = 0;

        NotificationCounterSingleton.instance = this;
    }

    addNotification(){
        this.count++
        this.render()
    }

    reset(){
        this.count = 0
        this.render()
    }

    render(){
        document.getElementById('notif_badge').textContent = this.count;
    }
}
const NotificationCounter = new NotificationCounterSingleton()

const ModuleA = { notify() { NotificationCounter.addNotification() } }
const ModuleB = { notify() { NotificationCounter.addNotification() } }

document.getElementById('notif_btn_a')?.addEventListener('click', () => ModuleA.notify())
document.getElementById('notif_btn_b')?.addEventListener('click', () => ModuleB.notify())
document.getElementById('notif_btn_reset')?.addEventListener('click', () => NotificationCounter.reset())