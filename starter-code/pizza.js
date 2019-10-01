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
  document.querySelectorAll('.mushroom').forEach(m => {
    if (state.mushrooms) {
      m.style.visibility = "visible"
    } else {
      m.style.visibility = "hidden"
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(gp => {
    if (state.greenPeppers) {
      gp.style.visibility = "visible"
    } else {
      gp.style.visibility = "hidden"
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let whiteSauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    whiteSauce.setAttribute('class', 'sauce')
  } else {
    whiteSauce.setAttribute('class', 'sauce sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let glutenFreeCrust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    glutenFreeCrust.setAttribute('class', 'crust')
  } else {
    glutenFreeCrust.setAttribute('class', 'crust crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni) {
    document.querySelector('.btn.btn-pepperonni').setAttribute('class', 'btn btn-pepperonni active')
  } else {
    document.querySelector('.btn.btn-pepperonni').setAttribute('class', 'btn btn-pepperonni')
  }
  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').setAttribute('class', 'btn btn-mushrooms active')
  } else {
    document.querySelector('.btn.btn-mushrooms').setAttribute('class', 'btn btn-mushrooms')
  }
  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').setAttribute('class', 'btn btn-green-peppers active')
  } else {
    document.querySelector('.btn.btn-green-peppers').setAttribute('class', 'btn btn-green-peppers')
  }
  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').setAttribute('class', 'btn btn-sauce')
  } else {
    document.querySelector('.btn.btn-sauce').setAttribute('class', 'btn btn-sauce active')
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').setAttribute('class', 'btn btn-crust')
  } else {
    document.querySelector('.btn.btn-crust').setAttribute('class', 'btn btn-crust active')
  }
}

function fromDollarToInt(dollarNumb) {
  let arr = dollarNumb.split('')
  arr.shift()
  return Number(arr.reduce((acc, n) => acc + n))
}

function dollarNumb(num) {
  return '$' + num
}

function increasePrice(num) { 
  return fromDollarToInt(document.querySelector('aside strong').innerText) + num 
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
   let totPrice = document.querySelector('aside strong')
   totPrice.innerText = dollarNumb(10)
   if (state.pepperonni) {
     totPrice.innerText =  dollarNumb(increasePrice(1))
   } 
   if (state.mushrooms) {
    totPrice.innerText =  dollarNumb(increasePrice(1))
   }
   if (state.greenPeppers) {
    totPrice.innerText =  dollarNumb(increasePrice(1))
   }
   if (!state.whiteSauce) {
    totPrice.innerText =  dollarNumb(increasePrice(3))
   }
   if (!state.glutenFreeCrust) {
    totPrice.innerText =  dollarNumb(increasePrice(5))
   }
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