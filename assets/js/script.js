var buttonEL = document.querySelector("#save-task");
var tasksToDoEL = document.querySelector("#tasks-to-do");

// buttonEL.addEventListener("click", createTaskHandler) {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEL.appendChild(listItemEl);
// };

var createTaskHandler = function () {
  var listItemEl = document.cgit reateElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEL.appendChild(listItemEl);
};

buttonEL.addEventListener("click", createTaskHandler);
