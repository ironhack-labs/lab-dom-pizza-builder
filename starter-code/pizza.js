// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {
    name: 'Pepperonni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
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

 // renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function ($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function ($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    } else {
      $greenPepper.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  let $sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    $sauce.classList.add('sauce-white')
  } else {
    $sauce.classList.remove('sauce-white')
  }
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  let $crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    $crust.classList.add('crust-gluten-free')
  } else {
    $crust.classList.remove('crust-gluten-free')
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}
/*
function renderButtons() {
  let $buttons = document.querySelectorAll('.btn');
  $buttons.forEach(function ($button) {
    $button.onClick = function() {
      
      }
  })
}

*/

function renderPrice() {
  
  let $totalPrice = document.querySelector('.total-price')
  let totalPrice = 0 + basePrice
  let statesArrVal = Object.values(state)
  // console.log(statesArrVal)
  // let statesArrKey = Object.keys(state)
  let ingredientsArr = Object.values(ingredients)
  // console.log(ingredientsArr)
  
  for( let i = 0; i < statesArrVal.length; i++ ) {
    // let selector = 'price-' + statesArrKey[i].toLowerCase()
    let $asideLis = document.querySelectorAll('aside.panel>ul>li')
    //console.log(selected)
    
    if(statesArrVal[i]) {
      totalPrice = totalPrice + ingredientsArr[i].price
      $asideLis[i].style.display = 'block'
    }  else  {
      $asideLis[i].style.display = 'none'
    }
  }
  $totalPrice.innerHTML = "$" + totalPrice
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  this.classList.toggle('active')
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms
  this.classList.toggle('active')
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers
  this.classList.toggle('active')
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  this.classList.toggle('active')
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  this.classList.toggle('active')
  renderEverything()
}

renderEverything()
