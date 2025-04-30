function addTodo() {
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
  }
  