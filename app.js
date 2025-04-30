// ToDoを追加して保存
function addTodo() {
    const input = document.getElementById('todoInput');
    const value = input.value.trim();
    if (!value) return;
  
    const todos = getTodos();
    todos.push(value);
    saveTodos(todos);
  
    renderTodos();
    input.v

    