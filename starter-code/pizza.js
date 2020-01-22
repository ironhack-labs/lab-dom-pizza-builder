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
  document.querySelectorAll('.mush').forEach(function($mush){
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
  document.querySelectorAll('.green').forEach(function($green){
    if (state.GreenPeppers) {
      $green.style.visibility = "visible";
    }
    else {
      $green.style.visibility = "hidden";
    }
  })
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  let element = document.querySelector('section.sauce')
  if (!state.whiteSauce){
    element.classList.remove('sauce-white')
  } else {
    element.classList.add('sauce-white')
  }
}

}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  let element = document.querySelector('section.crust')
  if (!state.glutenFreeCrust){
    element.classList.remove('crust-gluten-free')
  } else{
    element.classList.add('crust-gluten-free')
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {

  const buttonPep = document.querySelector('.btn-pepperonni');
  if (!state.pepperonni) {
    buttonPep.classList.remove('active');
  } else {
    buttonPep.classList.add('active');
  }

  const buttonMush = document.querySelector('.btn-mushrooms');
  if (!state.mushrooms) {
    buttonMush.classList.remove('active');
  } else {
    buttonMush.classList.add('active');
  }

  const buttonPeppers = document.querySelector('.btn-greenPeppers');
  if (!state.greenPeppers) {
    buttonPeppers.classList.remove('active');
  } else {
    buttonPeppers.classList.add('active');
  }

  const buttonSauce = document.querySelector('.btn-whiteSauce');
  if (!state.whiteSauce) {
    buttonSauce.classList.remove('active');
  } else {
    buttonSauce.classList.add('active');
  }

  const buttonCrust = document.querySelector('.btn-glutenFreeCrust');
  if (!state.glutenFreeCrust) {
    buttonCrust.classList.remove('active');
  } else {
    buttonCrust.classList.add('active');
  }

}

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {

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
  state.green-peppers = !state.green-peppers
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