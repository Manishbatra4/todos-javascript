import { createTodo } from "./todos";
import { setFilters } from "./filters";
import { renderTodo } from "./views";

renderTodo();


document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    createTodo(e.target.elements.text.value);
    renderTodo();
    e.target.elements.text.value = ''
});

document.querySelector('#search').addEventListener('input', function (e) {

    setFilters({
        searchText: e.target.value
    });
    renderTodo();
});


document.querySelector('#hide').addEventListener('change', function (e) {
    setFilters({
        hide: e.target.checked
    });
    renderTodo();
});
