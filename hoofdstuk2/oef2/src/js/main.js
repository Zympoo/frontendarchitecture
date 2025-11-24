// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const Calculator = (function() {
    let total = 0;

    function add(amount){
        total += amount;
        render()
    }

    function subtract(amount){
        total -= amount;
        render()
    }

    function reset(){
        total = 0;
        render()
    }

    function render(){
        document.getElementById('ex2_total').innerHTML = total;
    }

    return {
        add,
        subtract,
        reset,
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ex2_add2')?.addEventListener("click", () => Calculator.add(2))
    document.getElementById('ex2_add10')?.addEventListener("click", () => Calculator.add(10))
    document.getElementById('ex2_sub4')?.addEventListener("click", () => Calculator.subtract(4))
    document.getElementById('ex2_reset')?.addEventListener("click", Calculator.reset)
})