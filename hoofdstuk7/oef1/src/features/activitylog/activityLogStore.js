import {CoreEventBus} from "../../core/eventBus";

export const ActivityLogStore = (function () {
    let entries = [];
    function addActivity(text) {
        entries.unshift({
            text,
            time: new Date().toLocaleTimeString()
        });
        notify();
    }
    function getEntries() {
        return [...entries];
    }
    function notify() {
        CoreEventBus.publish("ACTIVITY_UPDATED", {
            entries: getEntries()
        });
    }
    return {
        addActivity,
        getEntries
    };
})();