const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const addTaskBtn = document.querySelector(".btn");
const clearBtn = document.querySelector(".clear-tasks");
const taskList = document.querySelector(".collection");
const filterInput = document.querySelector("#filter");


loadEventListeners();

function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", getTasks);
  taskForm.addEventListener("submit", addTask);
  // taskList.addEventListener("click", clearTask);
  // clearBtn.addEventListener("click", clearAllTasks);
  // filterInput.addEventListener("keyup", filterTasks);

}

function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(task));
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.className = "delete-item secondary-content";
    a.innerHTML = "<i class=\"fa fa-remove\"></i>";
    li.appendChild(a);
    taskList.appendChild(li);
    task = "";

  });
}

function addTask(e) {
  if(taskInput.value === "") {
    alert('add a task!')
  }
  const li = document.createElement("li");
  li.className = "collection-item";
  li.appendChild(document.createTextNode(taskInput.value));
  const a = document.createElement("a");
  a.setAttribute("href", "#");
  a.className = "delete-item secondary-content";
  a.innerHTML = "<i class=\"fa fa-remove\"></i>";
  li.appendChild(a);
  taskList.appendChild(li);
  storeTaskInLocalStorage(taskInput.value);
  taskInput.value = "";
  e.preventDefault();
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task Saved in LocalStoage');
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  for(var i=0; i < tasks.length ; i++) {
    if(taskItem.textContent === tasks[i]) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(eachTask => {
    const item = eachTask.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) !== -1) {
      eachTask.style.display = "block";
    } else {
      eachTask.style.display = "none";
    }
  });
}

function clearTask(e) {
  if(e.target.parentElement.classList.contains("delete-item")) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      console.log(e.target.parentElement);
      removeTaskFromLocalStorage(e.target.parentElement);
    }
  }
}

function clearAllTasks() {
  // taskList.innerHTML = "";
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  removeTasksFromLocalStorage();
}


function removeTasksFromLocalStorage() {
  localStorage.clear();
}
