function addTodo() {
  const divTodoList = document.getElementById("todo-list");
  divTodoList.innerHTML += `
    <div class="todo-item">
      <input type="checkbox" id="todo-${divTodoList.childElementCount + 1}" class="todo-check" onclick="changeLabel(this)"></input>
      <label id="label-todo-${divTodoList.childElementCount + 1}" for="todo-${divTodoList.childElementCount + 1}">${document.getElementById("todo-text").value}</label>
    </div>
  `;
}

const changeLabel = (check) => {
  let label = document.getElementById(`label-todo-${Number(check.id.slice(5))}`);
  label.className === "todo-text" ? label.className = "" : label.className = "todo-text"
}