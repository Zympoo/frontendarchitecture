// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const TodoApp = (function (){
    let todos = []
    let filtertext = ""

   function handleAdd(){
       const input = document.getElementById('ex3_new')
       const value = input.value.trim();

       if(value === "") return;

       addTodo(value)
       input.value = ''
       render();
   }

   function addTodo(value){
        todos.push(value)
   }

   function handleFilterChange(){
       const input = document.getElementById('ex3_filter')
       filtertext = input.value.trim().toLowerCase();
       render();
   }

   function getFilteredTodos(){
        if(filtertext === ""){
            return todos
        }
        return todos.filter(todo => todo.includes(filtertext))
   }

   function render(){
       const list = document.getElementById('ex3_list')
       const filteredTodos = getFilteredTodos()

       list.innerHTML = filteredTodos.map(todo => `<li class="list-group-item">${todo}</li>`).join("");
   }
    return {
        handleAdd,
        handleFilterChange,
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ex3_btn_add').addEventListener('click', TodoApp.handleAdd)
    document.getElementById('ex3_filter')?.addEventListener('change', TodoApp.handleFilterChange)
})