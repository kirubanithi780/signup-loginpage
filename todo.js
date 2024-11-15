// Check if user is logged in
window.onload = function() {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'index.html'; // Redirect to login page if not logged in
    }
};

// Todo list functionality
let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        todos.push(todoText);
        todoInput.value = '';
        renderTodoList();
    }
}

function renderTodoList() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // Clear the list

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        li.onclick = () => removeTodo(index); // Remove todo on click
        todoList.appendChild(li);
    });
}

function removeTodo(index) {
    todos.splice(index, 1); // Remove todo from array
    renderTodoList();
}

// Logout functionality
function logout() {
    localStorage.removeItem('isLoggedIn'); // Remove login status
    window.location.href = 'index.html'; // Redirect to login page
}
