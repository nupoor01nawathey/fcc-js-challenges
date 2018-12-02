document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
  
    let tasks;
  
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks)); // as localStorage requires to be stored as a string
  
    alert('Task saved');
  
    e.preventDefault();
  });
  
  const tasks = JSON.parse(localStorage.getItem('tasks')); // convert string to array
  console.log(tasks);
  tasks.forEach(function(task){
    console.log(task);
  });



// document.body.addEventListener('click', deleteItem);
// function deleteItem(e) {
//     if(e.target.parentElement.classList.contains("delete-item")) {
//         console.log(e.target);
//         e.target.parentElement.parentElement.remove()
//     }
// }


/* replace elements in the dom
// old heading
const oldHeading = document.querySelector('#task-title');;

// new heading
const newHeading = document.createElement('h1');
newHeading.id = "task-title" ;

const textNode   = document.createTextNode('TASK LIST');
newHeading.appendChild(textNode);

// get parent
const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newHeading, oldHeading);

// alternate option
cardAction = document.getElementsByClassName('card-action');
cardAction[0].replaceChild(newHeading, oldHeading);

*/


/* add elements to the DOM
const ul = document.querySelector("ul");

// create the element
const li = document.createElement("li");

// add class
li.className = "collection-item";

// add id
li.id = "collection-item-id";

// setAttribute
li.setAttribute("custom", "test")

// create text node and append
const textNode = document.createTextNode('Hello World');
li.appendChild(textNode);

// create a tag
const a = document.createElement("a");
a.setAttribute("href", "#");
a.className = "delete-item secondary-content";
a.innerHTML = "<i class=\"fa fa-remove\"></i>";

// append all
li.appendChild(a);
ul.appendChild(li);


console.log(ul);

*/
