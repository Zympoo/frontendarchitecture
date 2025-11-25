// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const StudySession = (function() {
    let studySessions = []

    function handleAddStudySession(){
        const subjectSelect = document.querySelector("#study_subject");
        const minutesInput = document.querySelector("#study_minutes");
        const subject = subjectSelect.value;
        const minutes = parseInt(minutesInput.value, 10);

        if (isNaN(minutes) || minutes <= 0) {
            alert("Geef een geldig aantal minuten in.");
            return;
        }

        addStudySession(subject, minutes);
        render()
        minutesInput.value = "";
    }

    function addStudySession(subject, minutes){
        studySessions.push({
            subject: subject,
            minutes: minutes,
            time: new Date().toLocaleTimeString()
        });
    }

    function render(){
        const ul = document.querySelector("#study_list");
        ul.innerHTML = "";
        for (let i = 0; i < studySessions.length; i++) {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between";
            li.innerHTML =
                "<span>" + studySessions[i].time + " – " +
                studySessions[i].subject + "</span>" +
                "<span>" + studySessions[i].minutes + " min</span>";
            ul.appendChild(li);
        }
        document.querySelector("#study_total_sessions").textContent =
            studySessions.length;
    }

    return {
        handleAddStudySession
    }
})();

document.querySelector("#study_add").addEventListener("click", StudySession.handleAddStudySession);
