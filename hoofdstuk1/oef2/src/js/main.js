// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const Counter = (function () {
    let ex2Count = 0;

    function increment(){
        ex2Count++;
        render()
    }

    function reset(){
        ex2Count = 0;
        render()
    }

    function render(){
        const el = document.getElementById('ex2_value')
        el.textContent = ex2Count;
    }

    return{
        increment,
        reset
    }
})();

document.querySelector("#ex2_btn_inc").addEventListener("click", Counter.increment);
document.querySelector("#ex2_btn_reset").addEventListener("click", Counter.reset);