// =========================
// features/stats/statsComponent.js
// =========================

export const StatsComponent = (function () {

    function render(count, avg) {
        document.getElementById('feat_stats_count').textContent = count;
        document.getElementById('feat_stats_avg').textContent = `€${avg.toFixed(2)}`;
    }

    return {
        render
    };
})();