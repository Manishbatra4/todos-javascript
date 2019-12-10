const todos = getSaveTodos();

const filters = {
    searchText: '',
    hide: false
};

renderTodo(todos, filters);

document.querySelector('#search').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderTodo(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    });
    saveTodo(todos);
    renderTodo(todos, filters);
    e.target.elements.text.value = ''
});

document.querySelector('#hide').addEventListener('change', function (e) {
    filters.hide = e.target.checked;
    renderTodo(todos, filters);
});
