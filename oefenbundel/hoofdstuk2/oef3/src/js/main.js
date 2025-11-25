// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const TravelWishlist = (function() {
    let travelItems = []

    function handleAdd(){
        const destInput = document.querySelector("#travel_destination");
        const priorityInput = document.querySelector("#travel_priority");
        const name = destInput.value;
        const priority = parseInt(priorityInput.value, 10);

        if (name.trim() === "" || isNaN(priority) || priority < 1 || priority >
            5) {
            alert("Geef een geldige bestemming en prioriteit (1-5) in.");
            return;
        }

        addTravelItem(name, priority);
        render()
        destInput.value = "";
        priorityInput.value = "3";
    }

    function addTravelItem(name, priority){
        travelItems.push({
            name: name,
            priority: priority
        })
        sortDestinations()
    }

    function sortDestinations(){
        travelItems.sort(function (a, b) {
            return b.priority - a.priority;
        });
    }

    function render(){
        const ul = document.querySelector("#travel_list");
        ul.innerHTML = "";
        for (let i = 0; i < travelItems.length; i++) {
            const item = travelItems[i];
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between";
            li.innerHTML =
                "<span>" +
                item.name +
                "</span><span>Prioriteit " +
                item.priority +
                "</span>";
            ul.appendChild(li);
        }
    }

    return {
        handleAdd
    }
})();
document.querySelector("#travel_add").addEventListener("click", TravelWishlist.handleAdd)