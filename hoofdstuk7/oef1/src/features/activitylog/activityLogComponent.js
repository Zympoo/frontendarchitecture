export const ActivityComponent = (function () {
    function render(entries) {
        const ul = document.querySelector("#feat_activity_list");
        ul.innerHTML = entries
            .map(e => `
                <li class="list-group-item d-flex justify-content-between">
                <span>${e.text}</span>
                <span>${e.time}</span>
                </li>
            `)
            .join("");
    }
    return {
        render
    };
})();
