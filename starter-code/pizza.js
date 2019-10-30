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
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}
// Iteration 1: set the visibility of `<section class="mushroom">`


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($green){
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
    }
    else {
      $green.style.visibility = "hidden";
    }
  })
  }
  
  
 

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function($sau){
    if (state.whiteSauce) {
      $sau.classList.add('sauce-white')
    }
    else {
      $sau.classList.remove('sauce-white')
    }
  })
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(function($cru){
    if (state.glutenFreeCrust) {
      $cru.classList.add('crust-gluten-free')
    }
    else {
      $cru.classList.remove('crust-gluten-free')
    }
  })
  }
  
  
  
  function renderButtons() {
    document.querySelectorAll('.btn').forEach(function(btnn,num){

      if (state[Object.keys(state)[num]]) {
        btnn.classList.add('active')
      }
      else {
        btnn.classList.remove('active')
      }
    })
  }
    // Iteration 3: add/remove the class "active" of each `<button class="btn">`




function renderPrice() {
  let total = basePrice;
  for (var num in state) {
    if (state[num] === true) {
        total += ingredients[num].price;
    }
}

document.querySelector('aside.panel.price strong').innerHTML = '$' + total;

}
  // Iteration 4: change the HTML of `<aside class="panel price">`



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