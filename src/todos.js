import uuidv4 from 'uuid/v4';

let todos = [];

const loadTodos = function () {
    const todoJSON = localStorage.getItem('todos');

    if (todoJSON !== null) {
        return JSON.parse(todoJSON);
    } else {
        return [];
    }
};

const getTodos = () => todos;

const saveTodo = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const createTodo = (todo) => {
    console.log(todo);
    todos.push({
        id: uuidv4(),
        text: todo,
        completed: false
    });
    saveTodo();
    return todos;
};

const removeTodo = (id) => {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id;
    });

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        saveTodo();
    }
}

function todoToggle(id) {
    const todo = todos.find(function (todo) {
        return todo.id === id;
    });

    if (todo !== undefined) {
        todo.completed = !todo.completed;
    }
    saveTodo();
}

todos = loadTodos();

export {getTodos, saveTodo, removeTodo, todoToggle, createTodo}