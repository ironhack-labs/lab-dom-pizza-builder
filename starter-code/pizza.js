// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

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
    state.pepperonni ? $pep.style.visibility = "visible" : $pep.style.visibility = "hidden";
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    state.mushrooms ? $mushroom.style.visibility = "visible" : $mushroom.style.visibility = "hidden";
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenpepper){
    state.greenPeppers ? $greenpepper.style.visibility = "visible" : $greenpepper.style.visibility = "hidden";
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  state.whiteSauce ? document.querySelector('.sauce').classList.add('sauce-white') : document.querySelector('.sauce').classList.remove('sauce-white')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  state.glutenFreeCrust ? document.querySelector('.crust').classList.add('crust-gluten-free') : document.querySelector('.crust').classList.remove('crust-gluten-free')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  state.pepperonni ? document.querySelector('.btn.btn-pepperonni').classList.add('active') : document.querySelector('.btn.btn-pepperonni').classList.remove('active');

  state.mushrooms ? document.querySelector('.btn.btn-mushrooms').classList.add('active')
  : document.querySelector('.btn.btn-mushrooms').classList.remove('active');

  state.greenPeppers ? document.querySelector('.btn.btn-green-peppers').classList.add('active') : document.querySelector('.btn.btn-green-peppers').classList.remove('active');

  state.whiteSauce ? document.querySelector('.btn.btn-sauce').classList.add('active')
  : document.querySelector('.btn.btn-sauce').classList.remove('active');

  state.glutenFreeCrust ? document.querySelector('.btn.btn-crust').classList.add('active') : document.querySelector('.btn.btn-crust').classList.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  document.querySelector('aside ul').innerHTML = ''
  if (state.pepperonni) {
    document.querySelector('aside ul').innerHTML += `<li>$${ingredients.pepperonni.price} pepperonni</li>`;
    totalPrice += ingredients.pepperonni.price
  }
  if (state.mushrooms) {
    document.querySelector('aside ul').innerHTML += `<li>$${ingredients.mushrooms.price} mushrooms</li>`;
    totalPrice += ingredients.mushrooms.price
  }
  if (state.greenPeppers) {
    document.querySelector('aside ul').innerHTML += `<li>$${ingredients.greenPeppers.price} green peppers</li>`;
    totalPrice += ingredients.greenPeppers.price
  }
  if (state.whiteSauce) {
    document.querySelector('aside ul').innerHTML += `<li>$${ingredients.whiteSauce.price} white sauce</li>`;
    totalPrice += ingredients.whiteSauce.price
  }
  if (state.glutenFreeCrust) {
    document.querySelector('aside ul').innerHTML += `<li>$${ingredients.glutenFreeCrust.price} gluten-free crust</li>`;
    totalPrice += ingredients.glutenFreeCrust.price
  }

  document.querySelector('aside strong').innerHTML = `$${totalPrice}`;
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