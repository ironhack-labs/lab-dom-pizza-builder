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
let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything(e) {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
  renderPrice()
}

function renderPepperonni() {
 
  document.querySelectorAll('.pep').forEach(function(pep){
    if (state.pepperonni) {
      pep.style.visibility = "visible";
    }
    else {
      pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function ($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function ($grenPepp) {
    if (state.greenPeppers) {
      $grenPepp.style.visibility = "visible";
    } else {
      $grenPepp.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function ($whtSauce) {
    if (state.whiteSauce) {
      $whtSauce.classList.add('sauce-white')
      // state.whiteSauce = true
    } else {
      $whtSauce.classList.remove('sauce-white')
      // state.whiteSauce = false
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function ($crst) {
    if (state.glutenFreeCrust) {
      $crst.classList.add('crust-gluten-free')
    } else {
      $crst.classList.remove('crust-gluten-free')
    }
  })
}


function renderButtons(e) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  
    // console.log(e.target)
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active')
    } else {
      e.target.classList.add('active')
    }
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = basePrice
  let prices = {
    pepperonni: 1,
    mushrooms: 1,
    greenPeppers: 1,
    whiteSauce: 3,
    glutenFreeCrust: 5
  }
  let theFinalPrice = document.querySelector('#final-price')
  let thePriceDiv = document.querySelector('.panel.price > ul')
  thePriceDiv.innerHTML = ''

  
  for (let ingredients in state){
    if(state[ingredients]){
      price += prices[ingredients]
      let thing = document.createElement('li')
      thing.innerHTML = `$${prices[ingredients]} ${ingredients}`
      thePriceDiv.append(thing)
      theFinalPrice.innerHTML = `$${(price).toFixed(2)}`
    }
  }
  
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function(e) {
  state.pepperonni = !state.pepperonni
  renderButtons(e)
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function (e) {
  state.mushrooms = !state.mushrooms
  renderButtons(e)
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function (e) {
  state.greenPeppers = !state.greenPeppers
  renderButtons(e)
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function (e) {
  state.whiteSauce = !state.whiteSauce
  renderButtons(e)
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function (e) {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderButtons(e)
  renderEverything()
}