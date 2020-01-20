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

 // Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushrooms){
    if (state.mushrooms) {
      $mushrooms.style.visibility = "visible";
    }
    else {
      $mushrooms.style.visibility = "hidden";
    }
  })
}
 

 // Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
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

    document.querySelectorAll('.sauce-white').forEach(function($whiteSauce){
      if (state.whiteSauce) {
        $whiteSauce.style.visibility = "visible";
      }
      else {
        $whiteSauce.style.visibility = "hidden";
      }
    })
}


function renderGlutenFreeCrust() {

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  document.querySelectorAll('.crust-gluten-free').forEach(function($glutenFreeCrust){
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.style.visibility = "visible";
    }
    else {
      $glutenFreeCrust.style.visibility = "hidden";
    }
  })
  
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

    const buttonPepperonni = document.querySelector('.btn-pepperonni');
    const buttonMushrooms = document.querySelector('.btn-mushrooms');
    const buttonGreenPeppers = document.querySelector('.btn-green-peppers');
    const buttonWhiteSauce = document.querySelector('.btn-sauce');
    const buttonGlutenFreeCrust = document.querySelector('.btn-crust');
    
    
    if (state.pepperonni){
      buttonPepperonni.classList.add('active')
    } else {
      buttonPepperonni.classList.remove('active')
    };

    if (state.mushrooms){
      buttonMushrooms.classList.add('active')
    } else {
      buttonMushrooms.classList.remove('active')
    };

    if (state.greenPeppers){
      buttonGreenPeppers.classList.add('active')
    } else {
      buttonGreenPeppers.classList.remove('active')
    };

    if (state.whiteSauce){
      buttonWhiteSauce.classList.add('active')
    } else {
      buttonWhiteSauce.classList.remove('active')
    };

    if (state.glutenFreeCrust){
      buttonGlutenFreeCrust.classList.add('active')
    } else {
      buttonGlutenFreeCrust.classList.remove('active')
    };

  }


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
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