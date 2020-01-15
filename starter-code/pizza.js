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
  document.querySelectorAll('.mushroom').forEach(function(mushroom){
    if (state.mushrooms) {
      mushroom.style.visibility = "visible"
    }
    else {
      mushroom.style.visibility= "hidden"
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(pepper){
    if (state.greenPeppers) {
      pepper.style.visibility = "visible"
    }
    else {
      pepper.style.visibility = "hidden"
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function(sauce){
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white')
    }
    else {
      sauce.classList.remove('sauce-white')
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function(crust){
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free')
    }
    else {
      crust.classList.remove('crust-gluten-free')
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni) {
    document.querySelector('.btn.btn-pepperonni').classList.add("active")
  }
  else {
    document.querySelector('.btn.btn-pepperonni').classList.remove("active")
  }
  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add("active")
  }
  else {
    document.querySelector('.btn.btn-mushrooms').classList.remove("active")
  }
  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add("active")
  }
  else {
    document.querySelector('.btn.btn-green-peppers').classList.remove("active")
  }
  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add("active")
  }
  else {
    document.querySelector('.btn.btn-sauce').classList.remove("active")
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add("active")
  }
  else {
    document.querySelector('.btn.btn-crust').classList.remove("active")
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // Experimento muy raro...
  // let list = document.querySelectorAll('.price>ul>li') 
  // let counter = 1
  // list.forEach(element => {
  //   element.setAttribute("id", `item${counter}`)
  //   counter++
  // })
  // let pepperonni = document.querySelector('#item1')
  // let mushrooms = document.querySelector('#item2')
  // let greenPeppers = document.querySelector('#item3')
  // let whiteSauce = document.querySelector('#item4')
  // let crust = document.querySelector('#item5')

  // pepperonni.remove()
  // mushrooms.remove()
  // greenPeppers.remove()
  // whiteSauce.remove()
  // crust.remove()
  
  const panelPrice = document.querySelector('.panel.price>ul')

  const pepperonni = document.createElement('li')
  const mushrooms = document.createElement('li')
  const greenPeppers = document.createElement('li')
  const whiteSauce = document.createElement('li')
  const glutenFreeCrust = document.createElement('li')

  let total = basePrice

  pepperonni.innerText = `$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}`
  mushrooms.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
  greenPeppers.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
  whiteSauce.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
  glutenFreeCrust.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`

  panelPrice.innerHTML = ''

  if(state.pepperonni) {
    panelPrice.appendChild(pepperonni)
    total += ingredients.pepperonni.price
  }
  if(state.mushrooms) {
    panelPrice.appendChild(mushrooms)
    total += ingredients.mushrooms.price
  }
  if(state.greenPeppers) {
    panelPrice.appendChild(greenPeppers)
    total += ingredients.greenPeppers.price
  }
  if(state.whiteSauce) {
    panelPrice.appendChild(whiteSauce)
    total += ingredients.whiteSauce.price
  }
  if(state.glutenFreeCrust) {
    panelPrice.appendChild(glutenFreeCrust)
    total += ingredients.glutenFreeCrust.price
  }

  price = document.querySelector('strong')
  price.innerText = '$'+total

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
