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

  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if(state.mushroom){
      $mushroom.style.visibility = 'visible'
    }
    else{
      $mushroom.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  
    document.querySelectorAll('.greenPepper').forEach(function ($greenPepper) {
      if(state.greenPepper){
        $greenPepper.style.visibility = 'visible'
      }
      else{
        $greenPepper.style.visibility = 'hidden'
      }
    })
    
  }
  
function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    
    if (state.whiteSauce) {
      document.querySelector('.sauce').classList.add('sauce-white')
    } else {
      document.querySelector('.sauce').classList.remove('sauce-white')
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
// Iteration 3: Make the buttons active or not
  // Write some JavaScript that will remove and add the buttons' active class appropriately, by writing code in the function renderButtons.
  if (state.pepperonni) {
    document.querySelector('.btn.btn-pepperonni').classList.add('active')
  } else {
    document.querySelector('.btn.btn-pepperonni').classList.remove('active')
  }
  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active')
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active')
  }
  if (state.greenPeppers) {
    document.querySelector('.btn.btn-greenPeppers').classList.add('active')
  } else {
    document.querySelector('.btn.btn-greenPeppers').classList.remove('active')
  }
  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add('active')
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active')
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add('active')
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // Display the list of all items selected
  // Display the total price
  let totalPrice = basePrice
  // get the target element to display the list of items
  let $list = document.querySelector("body > aside > ul")
  $list.innerHTML = ''

  // loop through each property the in ingredients object
  for (let eachProperty in ingredients){
    if(state[eachProperty]){
      // add each price to the totalPrice
      totalPrice += ingredients[eachProperty].price
      // add price and name of the each property to the target element
      $list.innerHTML += `<li>$${ingredients[eachProperty].price} ${ingredients[eachProperty].name.toLowerCase()}</li>`
    }
  }
  document.querySelector("body > aside > strong").innerHTML = `$ ${totalPrice}`
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">
  document.querySelector('.btn.btn-mushrooms').onclick = function() {
    state.mushroom = !state.mushroom
    renderEverything()
  }
  
  // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
  document.querySelector('.btn.btn-greenPeppers').onclick = function() {
    state.greenPepper = !state.greenPepper
    renderEverything()
  }
  
  // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  document.querySelector('.btn.btn-sauce').onclick = function () {
    state.whiteSauce = !state.whiteSauce
    renderEverything()
  }
  
  
  // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  document.querySelector('.btn.btn-crust').onclick = function () {
    state.glutenFreeCrust = !state.glutenFreeCrust
    renderEverything()
  }