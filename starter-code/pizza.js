// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10;
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1, active: true},
  mushrooms: {name: 'Mushrooms', price: 1, active: true},
  greenPeppers: {name: 'Green Peppers', price: 1, active: true},
  whiteSauce: {name: 'White sauce', price: 3, active: true},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5, active: true}
}

// Initial value of the state (the state values can change over time)
// var state = {
//   pepperonni: true,
//   mushrooms: true,
//   greenPeppers: true,
//   whiteSauce: false,
//   glutenFreeCrust: false
// }

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function(pep){
    console.log(ingredients.pepperonni.active);
    if (ingredients.pepperonni.active) {
      pep.style.visibility = "visible";
    }
    else {
      pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function(mushroom){
    console.log(ingredients.mushrooms.active);
    if (ingredients.mushrooms.active) {
      mushroom.style.visibility = "visible";
    }
    else {
      mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(greenPepper){
    console.log(ingredients.greenPeppers.active);
    if (ingredients.greenPeppers.active) {
      greenPepper.style.visibility = "visible";
    }
    else {
      // for each one so = singular
      greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    var element = document.querySelector('.sauce-white');
    // console.log(element);
    if (ingredients.whiteSauce.active) {
      element.style.visibility = "visible";
    } 
    else {
      element.style.visibility = "hidden";
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  var element = 
  // ingredients.glutenFreeCrust.toggle("active");

if (ingredients.glutenFreeCrust.active)

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // document.querySelector("btn").toggle("active");
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  console.log('pep');
  ingredients.pepperonni.active = !ingredients.pepperonni.active;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  ingredients.mushrooms = !ingredients.mushrooms;
  renderEverything();
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  ingredients.greenPeppers = !ingredients.greenPeppers;
  renderEverything();
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  ingredients.whiteSauce = !ingredients.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  ingredients.glutenFreeCrust = !ingredients.glutenFreeCrust;
  renderEverything();
}