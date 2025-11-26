// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const EventBus = {
    listeners: {},

    subscribe(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(handler);
    },

    publish(eventName, payload) {
        const handlers = this.listeners[eventName] || [];
        handlers.forEach(fn => fn(payload));
    }
};

const NotifyBadgeModule = (function() {
    let count = 0;

    function init(){
        EventBus.subscribe("NOTIFY", () => {
            count++;
            render();
        });
    }

    function render(){
        document.getElementById('ex2_notify_badge').textContent = count;
    }

    return {
        init
    }
})()

document.getElementById('ex2_btn_notify')?.addEventListener('click', () => {
    EventBus.publish("NOTIFY");
})
NotifyBadgeModule.init()