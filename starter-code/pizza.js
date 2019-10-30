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
  document.querySelectorAll('.mushroom ').forEach(function(mush){
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    }
    else {
      mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(green){
    if (state.greenPeppers) {
      green.style.visibility = "visible";
    }
    else {
      green.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector(".sauce").className += " sauce-white";
  }
  else {
    document.querySelector(".sauce").classList.remove("sauce-white")
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").className += " crust-gluten-free";
  }
  else {
    document.querySelector(".crust").classList.remove("crust-gluten-free")
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(function(element) {
    if (element.classList.contains('btn-pepperonni')) {
      if (state.pepperonni) {
        element.classList += " active"
      } else {
        element.classList.remove("active")
      }
    } else if (element.classList.contains('btn-mushrooms')) {
      if (state.mushrooms) {
        element.classList += " active"
      } else {
        element.classList.remove("active")
      }
    } else if (element.classList.contains('btn-green-peppers')) {
      if (state.greenPeppers) {
        element.classList += " active"
      } else {
        element.classList.remove("active")
      }
    } else if (element.classList.contains('btn-sauce')) {
      if (state.whiteSauce) {
        element.classList += " active"
      } else {
        element.classList.remove("active")
      }
    } else if (element.classList.contains('btn-crust')) {
      if (state.glutenFreeCrust) {
        element.classList += " active"
      } else {
        element.classList.remove("active")
      }
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  document.querySelectorAll('.panel strong').forEach(function(element) {
    let price = 10
    if (state.pepperonni) {
      price += 1
    }
    if (state.mushrooms) {
      price += 1
    }
    if (state.greenPeppers) {
      price += 1
    }
    if (state.whiteSauce) {
      price += 3
    }
    if (state.glutenFreeCrust) {
      price += 5
    }
    element.innerHTML = `$${price}`
  })
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}