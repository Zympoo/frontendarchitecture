// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const MoodTracker = (function() {
    let moods = []

    function addMood(mood){
        const now = new Date().toLocaleString();

        moods.push({
            time: now,
            mood: mood,
        })

        render()
    }

    function render(){
        const ul = document.querySelector("#mood_list");
        ul.innerHTML = "";
        for (let i = 0; i < moods.length; i++) {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between";
            li.innerHTML = "<span>" + moods[i].time + "</span><span>" +
                moods[i].mood + "</span>";
            ul.appendChild(li);
        }
    }

    return{
        addMood
    }
})();
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('mood_good')?.addEventListener('click', () => MoodTracker.addMood("Goed"))
    document.getElementById('mood_ok')?.addEventListener('click', () => MoodTracker.addMood("Ok"))
    document.getElementById('mood_bad')?.addEventListener('click', () => MoodTracker.addMood("Slecht"))
})