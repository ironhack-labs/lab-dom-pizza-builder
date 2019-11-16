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
  
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })

}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(function($white){
    
    if (!cstate.whiteSauce) {
      $white.style.visibility = "visible";
    }
    else {
      $white.style.visibility = "hidden";
    }
  })
 

}
function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust-gluten-free").forEach(function($crustfree){
    if (!state.crustGlutenFree) {
      $crustfree.style.visibility = "visible";
    }
    else {
      $crustfree.className = "crust";
    }
  })
 }
  
  // document.getElementById("crusthing").classList.add("crust-gluten-free");


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`

document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
};

document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
};

document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
};

document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
 };

 document.querySelector('.btn.btn-crust').onclick = function() {
   
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
 };

 









// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`