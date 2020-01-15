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
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible"
    } else {
      $mush.style.visibility = "hidden"
    }
  })  
}

  // Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenPep) {
    if (state.greenPeppers) {
      $greenPep.style.visibility = "visible"
    } else {
      $greenPep.style.visibility = "hidden"
    }
  })
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  let sauceClass = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauceClass.classList.add('sauce-white')
  } else {
    sauceClass.classList.remove('sauce-white')
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  let crustClass = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crustClass.classList.add('crust-gluten-free')
  } else {
    crustClass.classList.remove('crust-gluten-free')
  }
}

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  function renderButtons() {    
    // Lo que mi logica me dice que haga es guardar todos los botones con
    // sus respectivas clases en una variable. Despues, checar si contienen
    // la clase active, si la contienen, se la quito y despues se la agrego.
    // Esto no funciona pero no me dio tiempo para más.
    // Inclusive me truena el programa. 
    let pBtn = document.querySelectorAll('.btn.btn-pepperoni')
    let mushBtn = document.querySelectorAll('.btn.btn-mushrooms')
    let gpBtn = document.querySelectorAll('.btn.btn-green-peppers.active')
    let sauceBtn = document.querySelectorAll('.btn.btn-sauce.active')
    let crustBtn = document.querySelectorAll('.btn.btn-crust.active')
    

    if (pBtn.contains('active')) {
      pBtn.classList.remove('active')
    } else {
      pBtn.classList.add('active')
    }

    if (mushBtn.contains('active')) {
      mushBtn.classList.remove('active')
    } else {
      mushBtn.classList.add('active')
    }

    if (gpBtn.contains('active')) {
      gpBtn.classList.remove('active')
    } else {
      gpBtn.classList.add('active')
    }

    if (sauceBtn.contains('active')) {
      sauceBtn.classList.remove('active')
    } else {
      sauceBtn.classList.add('active')
    }
    
    if (crustBtn.contains('active')) {
      crustBtn.classList.remove('active')
    } else {
      crustBtn.classList.add('active')
    } 
    
}

  // Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  let list = document.querySelectorAll('li')
  let pepButton = document.querySelector('.btn.btn-pepperonni.active')
  
  /*Aqui lo que quería hacer es identificar cada elemento li por
  su innerText y despues checar si el botón tenía la clase 
  active para checar si iba a ser visible o no.
  Ya no me dio tiempo de establecer la lógica, pero mi idea era
  cambiar el $21 por el numero que correspondiera a la suma
  de los que estuvieran visibles. Por ejemplo, si estaban visibles
  solo pepperonni y mushrooms, yo se que el precio final sera $2,
  así que mostrar un $2.*/

  list.forEach(li => {
    if (li.innerText == '$1 pepperoni') {
      if (pepButton.classList.contains('active') {
        li.style.visibility = "visible"
      } else {
        li.style.visibility = "hidden"
      }
    }
  })

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