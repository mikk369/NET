//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".add-event");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
//Event listeners

//functions
function addTodo(event) {
  //prevent form from submiting
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.classList.add("delete");
  todoDiv.appendChild(deleteButton);

  //edit button TODO:kirjutab eelmise nupu millegipärast üle
  //   const editButton = document.createElement("button");
  //   deleteButton.innerHTML = "edit";
  //   deleteButton.classList.add("edit");
  //   todoDiv.appendChild(editButton);
  //append to list
  todoList.appendChild(todoDiv);
  //clear todoInput Value
  todoInput.value = "";
}
