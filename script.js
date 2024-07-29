document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("add-task");
  const newTaskInput = document.getElementById("new-task");
  const daySelect = document.getElementById("day-select");
  const taskLists = {
    monday: document.getElementById("task-list-monday"),
    tuesday: document.getElementById("task-list-tuesday"),
    wednesday: document.getElementById("task-list-wednesday"),
    thursday: document.getElementById("task-list-thursday"),
    friday: document.getElementById("task-list-friday"),
    saturday: document.getElementById("task-list-saturday"),
    sunday: document.getElementById("task-list-sunday"),
  };

  addTaskButton.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();
    const selectedDay = daySelect.value;
    if (taskText !== "") {
      addTask(taskText, selectedDay);
    }
  });

  function addTask(taskText, day) {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Completar";
    completeButton.classList.add("complete");
    completeButton.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
      taskLists[day].removeChild(li);
    });

    li.appendChild(taskSpan);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskLists[day].appendChild(li);
  }
});
