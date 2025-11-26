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

EventBus.subscribe("ALERT", payload => {
    const list = document.getElementById('ex1_alert_list')
    const li = document.createElement('li');
    li.className = "list-group-item";
    li.textContent = `[ALERT] ${payload.message}`;
    list.appendChild(li);
})

document.getElementById('ex1_btn_send')?.addEventListener('click', () => {
    const input = document.getElementById('ex1_alert_msg');
    const text = input.value.trim();

    if(!text) return
    EventBus.publish("ALERT", { message : text});
    input.value = "";
})