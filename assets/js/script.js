var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

function addTask() {
  var listItemEl = document.createElement("li");
  listItemEl.textContent = "This is a new task.";
  listItemEl.className = "task-item";
  tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", addTask);
