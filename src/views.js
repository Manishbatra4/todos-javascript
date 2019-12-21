import {getTodos, removeTodo, todoToggle} from "./todos";
import {getFilters} from "./filters";

const renderTodo =  () => {
    let todos = getTodos();
    let filters = getFilters();

    let filteredTodos = todos.filter(todo => {
        const searchedTextFilter = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideFilter = !filters.hide || !todo.completed;
        return searchedTextFilter && hideFilter;
    });

    document.querySelector('#todos').innerHTML = '';

    const completeTodo = todos.filter(function (todo) {
        return todo.completed
    });

    const incompleteTodo = todos.filter(function (todo) {
        return !todo.completed
    });

    document.querySelector('#total').textContent = todos.length;
    document.querySelector('#complete').textContent = completeTodo.length;
    document.querySelector('#incomplete').textContent = incompleteTodo.length;

    filteredTodos.forEach(function (todo) {
        const li = document.createElement('li');
        const sucesssTodo = todo.completed ? 'list-group-item complete' : 'list-group-item pl-5';
        li.setAttribute('class', sucesssTodo);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'completeTodoCheckBox';
        checkbox.checked = todo.completed;
        checkbox.setAttribute('class', 'form-check-input');

        const p = document.createElement('span');
        p.textContent = todo.text;

        const button = document.createElement('button');
        button.id = 'deleteTodoCheckBox';
        button.textContent = 'X';
        button.setAttribute('class', 'btn btn-danger float-right');

        const liAppend = document.querySelector('#todos').appendChild(li);
        liAppend.appendChild(checkbox);
        liAppend.appendChild(p);
        liAppend.appendChild(button);

        button.addEventListener('click', function () {
            if (confirm("Are You Sure You Wanna Delete?")) {
                removeTodo(todo.id);
                renderTodo();
            }
        });

        checkbox.addEventListener('change', function () {
            todoToggle(todo.id);
            renderTodo();
        })

    })

};

export { renderTodo };