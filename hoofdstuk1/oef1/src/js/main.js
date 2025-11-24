// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js

// 1. notes en lastNote zijn globale variabelen.
// 2. De event handler doet alles: input lezen, validatie, state update, UI update, API-call.
// 3. UI render staat in de handler en wordt telkens volledig opgebouwd.
// 4. Er is geen module, geen encapsulatie, geen herbruikbare functies.
// 5. Fetch-call is hard in de UI-handler gebakken, moeilijk te testen.
// 6. Geen scheiding van concerns: data, logica en UI door elkaar.

let notes = [];
let lastNote = "";
document.querySelector("#notes_btn_add").addEventListener("click", function() {
    const input = document.querySelector("#notes_input");
    const value = input.value;

    if (value === "") {
        alert("Leeg");
    } else {
        notes.push(value);
        lastNote = value;
    }

    const list = document.querySelector("#notes_list");
    list.innerHTML = "";

    for (let i = 0; i < notes.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = notes[i];
        list.appendChild(li);
    }

    fetch("/api/log?last=" + lastNote);
    input.value = "";
});