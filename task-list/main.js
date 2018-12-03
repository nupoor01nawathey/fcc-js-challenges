const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const addTaskBtn = document.querySelector(".btn");
const clearBtn = document.querySelector(".clear-tasks");
const taskList = document.querySelector(".collection");

const filterInput = document.querySelector("#filter");

loadEventListeners();

function loadEventListeners() {
  document.addEventListener(DOMContentLoaded, getTasks);
  taskForm.addEventListener("submit", addTask);
  taskList.addEventListener("click", clearTasks);
  clearBtn.addEventListener("click", clearAllTasks);
  filterInput.addEventListener("keyup", filterTasks);

}

function addTask(e) {
  if(taskInput.value === "") {
    alert('add a task!')
  } else {
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
  }
  e.preventDefault();
}

function clearTasks(e) {
  console.log(e.target.parentElement);
  if(e.target.parentElement.classList.contains("delete-item")) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.remove();

      removeTaskFromLocalStorage(e.target.parentElement);
    }
  }

}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.stringify(localStorage.getItem('tasks'));
  }
  tasks.forEach((task, index) => {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
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

document.body.addEventListener('click', deleteItem);
function deleteItem(e) {
    if(e.target.parentElement.classList.contains("delete-item")) {
        e.target.parentElement.parentElement.remove();
        // remove from localStorage as well

    }
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.stringify(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(task));
  alert('Task Saved in LocalStoage');
  e.preventDefault();
}

function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.stringify(localStorage.getItem('tasks'));
  }
  const getStoredTasks = JSON.parse(localStorage.getItem('tasks'));
  getStoredTasks.forEach(eachStoredTask => {
    console.log(eachStoredTask);
  });
}
