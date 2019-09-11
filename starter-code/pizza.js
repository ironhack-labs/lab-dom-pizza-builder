// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
};

var cf = [];
let z = document.querySelectorAll(".price").forEach((element) => cf.push(element.querySelectorAll("li")));

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers){
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    }
    else {
      $greenPeppers.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(function($sauce){
    if (state.whiteSauce) {
      $sauce.style.visibility = "visible";
    }
    else {
      $sauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(function($gluten){
    if (state.glutenFreeCrust) {
      $gluten.style.background = "rgb(221,208,202)"
    }
    else {
      $gluten.style.background = "rgb(193,121,50)";
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  (state.pepperonni === false) ? document.querySelector(".btn-pepperonni").classList.remove("active") : document.querySelector(".btn-pepperonni").classList.add("active");
  (state.mushrooms === false) ? document.querySelector(".btn-mushrooms").classList.remove("active") : document.querySelector(".btn-mushrooms").classList.add("active");
  (state.greenPeppers === false) ? document.querySelector(".btn-green-peppers").classList.remove("active") : document.querySelector(".btn-green-peppers").classList.add("active");
  (state.whiteSauce === false) ? document.querySelector(".btn-sauce").classList.remove("active") : document.querySelector(".btn-sauce").classList.add("active");
  (state.glutenFreeCrust === false) ? document.querySelector(".btn-crust").classList.remove("active") : document.querySelector(".btn-crust").classList.add("active");
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let sum = 0;
  if((document.querySelector(".btn-pepperonni").outerHTML.includes("active") === true))
  {
    console.log("ja")
    sum += 1;
  }
  if((document.querySelector(".btn-mushrooms").outerHTML.includes("active") === true))
  {
    sum += 1;
  }
  if((document.querySelector(".btn-green-peppers").outerHTML.includes("active") === true))
  {
    sum += 1;
  }
  if((document.querySelector(".btn-sauce").outerHTML.includes("active") === true))
  {
    sum += 3;
  }
  if((document.querySelector(".btn-crust").outerHTML.includes("active") === true))
  {
    sum += 5;
  }
  document.querySelector("strong").innerHTML = 10+sum;
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}