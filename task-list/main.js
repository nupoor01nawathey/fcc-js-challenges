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
