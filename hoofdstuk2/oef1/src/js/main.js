// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const Counter = (function() {
    let count = 0;

    function increment(){
        count++;
        render()
    }

    function reset(){
        count = 0;
        render()
    }

    function render(){
        document.getElementById('ex1_value').innerHTML = count
    }

    return {
        increment,
        reset
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ex1_btn_inc')?.addEventListener('click', Counter.increment);
    document.getElementById('ex1_btn_reset')?.addEventListener('click', Counter.reset);
})