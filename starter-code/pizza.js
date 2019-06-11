// Write your Pizza Builder JavaScript in this file.

// DOM elements
let $btnPep = document.querySelector('.btn.btn-pepperonni')
let $btnMush = document.querySelector('.btn.btn-mushrooms')
let $btnGreenPepper = document.querySelector('.btn.btn-green-peppers')
let $btnSauce = document.querySelector('.btn.btn-sauce')
let $btnCrust = document.querySelector('.btn.btn-crust')
let $priceList = document.querySelector('.price ul')
let $totalPrice = document.querySelector('.price strong')

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1}, // I can change the final result of the price by changing these value of the property 'price'
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false // if I change to "true", the gluten free crust become default
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
  document.querySelectorAll('.mushroom').forEach(($mush) => {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
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
  let $sauce = document.querySelector('.sauce')
  if (state.whiteSauce){
    $sauce.classList.add("sauce-white");
  }
  else {
    $sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let $crust = document.querySelector('.crust')
  if (state.glutenFreeCrust){
    $crust.classList.add("crust-gluten-free");
  }
  else {
    $crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni) $btnPep.classList.add('active')
  else $btnPep.classList.remove('active')

  if (state.mushrooms) $btnMush.classList.add('active')
  else $btnMush.classList.remove('active')

  if (state.greenPeppers) $btnGreenPepper.classList.add('active')
  else $btnGreenPepper.classList.remove('active')

  if (state.whiteSauce) $btnSauce.classList.add('active')
  else $btnSauce.classList.remove('active')

  if (state.glutenFreeCrust) $btnCrust.classList.add('active')
  else $btnCrust.classList.remove('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  $priceList.innerHTML = "" // Clear the content
  let totalPrice = basePrice
  for (const key in ingredients) {
    // If the ingredient is on pizza
    if (state[key]) {
      let name = ingredients[key].name
      let price = ingredients[key].price
      $priceList.innerHTML += `<li>$${price} ${name}</li>`
      totalPrice += price
    }
  }
  $totalPrice.innerText = "$"+totalPrice
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
$btnPep.onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
$btnMush.onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
$btnGreenPepper.onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
$btnSauce.onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
$btnCrust.onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}

