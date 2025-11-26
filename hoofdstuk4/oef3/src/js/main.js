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

const data = ["Laptop", "Monitor", "Toetsenbord", "Muis", "Webcam"]

const FilterModule = (function() {
    function init(){
        const input = document.getElementById('ex3_filter')
        input.addEventListener('input', () => {
            const value = input.value.trim().toLowerCase();
            EventBus.publish("FILTER_CHANGED", { text: value})
        })
    }

    return {
        init
    }
})();

const ListModule = (function() {
   let filterText = ""
   function init(){
       EventBus.subscribe("FILTER_CHANGED", payload => {
           filterText = payload.text;
           render()
       })
       render()
   }

   function render(){
       const list = document.getElementById('ex3_items')
       const filtered = data.filter(item => item.toLowerCase().includes(filterText))

       list.innerHTML = filtered.map(item => `<li class="list-group-item">${item}</li>`).join("");
   }

   return {
       init
    }
})()

FilterModule.init();
ListModule.init();