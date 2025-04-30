// ToDo追加
function addTodo() {
    const input = document.getElementById('todoInput');
    const value = input.value.trim();
    if (!value) return;
  
    const todos = getTodos();
    todos.push(value);
    saveTodos(todos);
  
    renderTodos();
    input.value = '';
  }
  
  // ToDo表示
  function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
  
    const todos = getTodos();
    todos.forEach((todo) => {
      const li = document.createElement('li');
      li.textContent = todo;
      list.appendChild(li);
    });
  }
  
  // ローカルストレージから取得
  function getTodos() {
    return JSON.parse(localStorage.getItem('todos') || '[]');
  }
  
  // ローカルストレージへ保存
  function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  // 初期表示
  document.addEventListener('DOMContentLoaded', renderTodos);

  