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
  whiteSauce: true,
  glutenFreeCrust: true
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
  // Iteration 1: set the visibility of `<section class="mushroom">
    if(state.mushrooms){
      document.querySelectorAll('.mushroom').forEach((node) => node.style.visibility = 'visible')
    } else {
      document.querySelectorAll('.mushroom').forEach((node) => node.style.visibility = 'hidden')
  }
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    if(state.greenPeppers){
      document.querySelectorAll('.green-pepper').forEach(node => node.style.visibility = 'visible')
    } else {
      document.querySelectorAll('.green-pepper').forEach(node => node.style.visibility = 'hidden')
    }
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if(state.whiteSauce){
    document.querySelectorAll('.sauce-white').forEach(node => node.style.visibility = 'visible')
  } else {
    document.querySelectorAll('.sauce-white').forEach(node => node.style.visibility = 'hidden')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if(state.glutenFreeCrust){
    document.querySelectorAll('.crust-gluten-free').forEach(node => node.style.visibility = 'visible')
  } else {
    document.querySelectorAll('.crust-gluten-free').forEach(node => node.style.visibility = 'hidden')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    const entries = Object.entries(state)
    let buttonClass = ''
    entries.forEach((key, index) => {
      if(key[1]===false){
        switch (index){
          case 0:
            buttonClass = '.btn-pepperonni'
          break
          case 1:
            buttonClass = '.btn-mushrooms'
          break
          case 2:
            buttonClass = '.btn-green-peppers'
          break
          case 3:
            buttonClass = '.btn-sauce'
          break
          case 4:
            buttonClass = '.btn-crust'
          break
          default:
            return
          }
          document.querySelector(buttonClass).classList.remove('active')
        } //else { //no se como desactivarlo intente con el else pero pues como nunca se guarda la clase en buttonClass pues ahi me quede.
        //   document.querySelector(buttonClass).classList.add('active')
        // }
    })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

}


// renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers
    renderEverything()
})

  // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  document.querySelector('.btn-sauce').addEventListener('click', () => {
    state.whiteSauce = !state.whiteSauce
    renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  document.querySelector('.btn-crust').addEventListener('click', () => {
    state.glutenFreeCrust = !state.glutenFreeCrust
    renderEverything()
  })