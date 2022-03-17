var formEL = document.querySelector("#task-form");
var tasksToDoEL = document.querySelector("#tasks-to-do");

// buttonEL.addEventListener("click", createTaskHandler) {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEL.appendChild(listItemEl);
// };

var createTaskHandler = function (event) {
  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEL.appendChild(listItemEl);
};

formEL.addEventListener("submit", createTaskHandler);
