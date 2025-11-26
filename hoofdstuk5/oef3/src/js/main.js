// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
// Data/service-laag
const logService = (function () {
    let logs = [];
    let count = 0;

    function addLog() {
        count++
        const log = {
            time: new Date().toLocaleTimeString(),
            value : count
        };
        logs.push(log);
    }

    function getCount(){
        return count
    }

    function getLogs() {
        return [...logs];
    }

    return {
        addLog, getLogs, getCount
    };
})();

// UI-laag
const logUI = (function () {
    function renderList(logs) {
        const ul = document.querySelector("#ex3_log");
        ul.innerHTML = logs
            .map(entry => `
                    <li class="list-group-item d-flex justify-content-between">
                        <span>${entry.time}</span>
                        <span>${entry.value}</span>
                    </li>
            `)
            .join("");
    }
    function renderCounter(count){
        const teller = document.querySelector("#ex3_value");
        teller.textContent = count;
    }

    return {
        renderList, renderCounter
    };
})();

// App-laag
const logApp = (function () {
    function init() {
        const btn = document.querySelector("#ex3_btn_inc");
        btn.addEventListener("click", handleAddLog);
    }

    function handleAddLog() {
        logService.addLog();
        const logs = logService.getLogs();
        const count = logService.getCount();
        logUI.renderList(logs);
        logUI.renderCounter(count);
    }

    return {
        init
    };
})();

logApp.init();