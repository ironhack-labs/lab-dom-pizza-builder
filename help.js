// document refers to the whole tree of elements at the top top level
console.log(document);

// access nested elements
console.log(document.body); // ✅
console.log(document.body.div); // ❌

// Selectors

// through its #id
// selects ONE element
const todoList = document.getElementById("todo-list");

// through their type
// selects ALL elements
// returns an HTMLCollection, not an array ⚠️
const allListItems = document.getElementsByTagName("li");

// we can use the selectors on other elements, not just `document`, they will select starting from that node
const todoListItems = todoList.getElementsByTagName("li");

// const todoListItems = document
//   .getElementById("todo-list")
//   .getElementsByTagName("li");

// we can access elements in an HTMLCollection through their [index]
const lastListItem = todoListItems[todoListItems.length - 1];

// we can access and manipulate properties of DOM elements
lastListItem.innerText = "repair bike tyre";

// make all the list items innerText upperCase

// transform an HTMLCollection into an array
// Array.from(todoListItems) -> [li,li, li]
// [...todoListItems] -> [li, li, li]

// for (let i = 0; i < todoListItems.length; i += 1) {
//   todoListItems[i].innerText = todoListItems[i].innerText.toUpperCase();
// }

[...todoListItems].forEach(function(item) {
  item.innerText = item.innerText.toUpperCase();
});

// through their type
// returns an HTML collection with all elements with a given class

console.log(document.getElementsByClassName("container"));

// HTMLCollection [div.container]

// querySelector
// return the first element matching a given CSS selector

const firstListItem = document.querySelector("#todo-list > li");

// querySelectorAll
// returns all elements matching a given CSS selector, in a NodeList
// NodeList is also not an array, and the main difference with HTMLCollection is that it has the `.forEach` method

console.log(document.querySelectorAll(".container")); // NodeList [div.container]

console.log(document.querySelectorAll("li")); // NodeList(6) [li, li, li, li, li, li]

console.log(document.querySelector("li")); // li

// More manipulation

// updating style properties
// firstListItem.style.textDecoration = "line-through";
// firstListItem.style["background-color"] = "limegreen";

// className allows to set the value for the `class` attribute
// firstListItem.className = "checked";

// firstListItem.className = "checked active";

firstListItem.classList.add("checked");
firstListItem.classList.add("active");

firstListItem.classList.remove("active");

firstListItem.classList.toggle("active");
firstListItem.classList.toggle("checked");

// allows to set an attribute (name, value)
firstListItem.setAttribute("id", "first-item");
// imageElement.setAttribute('src', 'http://imgur.com/123.gif')

// we can retrieve and remove attributes using getAttribute(name) and removeAttribute(name)

console.log(firstListItem);

// Adding elements to the DOM

// document.createElement(type) will create a node of a given type

const newListItem = document.createElement("li");

newListItem.classList.add("checked");
newListItem.innerText = "finish pizza lab";

const parentElement = document.querySelector("#todo-list");

// parentElement.appendChild(newListItem);

parentElement.insertBefore(newListItem, firstListItem);

// parentElement.insertBefore(newListItem, parentElement.querySelector("li"));

parentElement.insertBefore(newListItem, parentElement.querySelector("li"));

console.clear();

// document.getElementById("submit-todo").onclick = function() {
//   console.log("click");
// }

document.getElementById("submit-todo").onclick = addTodo;

function addTodo() {
  //   retrieve the user input
  const todo = document.querySelector("input").value; // value allows us to access the typed text in an input

  // create an element with that text as content
  const newTodo = document.createElement("li");
  newTodo.innerText = todo;

  const todoList = document.getElementById("todo-list");
  todoList.appendChild(newTodo);

  document.querySelector("input").value = ""; // reset input field
}

// toggle `checked` class on list items

// add an event listener to each one of the list items

// [...todoListItems].forEach(function(item) {
document.querySelectorAll("ol > li").forEach(function(item) {
  // forEach of the list items, assign a reference to the toggleTodo function to run on click event
  item.onclick = toggleTodo;
});

function toggleTodo(event) {
  // get the reference to the clicked todo
  console.log("toggle", event.target);
}
