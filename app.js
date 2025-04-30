// ページ読み込み時にToDoを描画
document.addEventListener('DOMContentLoaded', renderTodos);

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

// ToDo描画
function renderTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  const todos = getTodos();
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo;
    list.appendChild(li);
  });
}

// ローカルストレージ読み込み
function getTodos() {
  const data = localStorage.getItem('todos');
  return data ? JSON.parse(data) : [];
}

// ローカルストレージ保存
function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
