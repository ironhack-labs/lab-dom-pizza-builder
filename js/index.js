// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
}

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible'
    } else {
      onePep.style.visibility = 'hidden'
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible'
    } else {
      oneMush.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGrPep) => {
    state.greenPeppers
      ? (oneGrPep.style.visibility = 'visible')
      : (oneGrPep.style.visibility = 'hidden')
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce')
  state.whiteSauce
    ? sauce.classList.add('sauce-white')
    : sauce.classList.remove('sauce-white')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust')
  state.glutenFreeCrust
    ? crust.classList.add('crust-gluten-free')
    : crust.classList.remove('crust-gluten-free')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // btn-pepperoni
  const pepBtn = document.querySelector('.btn-pepperoni')
  state.pepperoni
    ? pepBtn.classList.add('active')
    : pepBtn.classList.remove('active')
  const mushBtn = document.querySelector('.btn-mushrooms')
  state.mushrooms
    ? mushBtn.classList.add('active')
    : mushBtn.classList.remove('active')
  const grPepBtn = document.querySelector('.btn-green-peppers')
  state.greenPeppers
    ? grPepBtn.classList.add('active')
    : grPepBtn.classList.remove('active')
  const sauceBtn = document.querySelector('.btn-sauce')
  state.whiteSauce
    ? sauceBtn.classList.add('active')
    : sauceBtn.classList.remove('active')
  const crustBtn = document.querySelector('.btn-crust')
  state.glutenFreeCrust
    ? crustBtn.classList.add('active')
    : crustBtn.classList.remove('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  // clear the price list
  parentElement = document.querySelector('.price ul')
  parentElement.innerHTML = ''

  let totalPrice = 10

  if (state.pepperoni) {
    const pepPrice = document.createElement('li')
    pepPrice.innerText = '$1 pepperoni'
    parentElement.appendChild(pepPrice)
    totalPrice += 1
  }

  if (state.mushrooms) {
    const mushPrice = document.createElement('li')
    mushPrice.innerText = '$1 mushrooms'
    parentElement.appendChild(mushPrice)
    totalPrice += 1
  }

  if (state.greenPeppers) {
    const grPepPrice = document.createElement('li')
    grPepPrice.innerText = '$1 green peppers'
    parentElement.appendChild(grPepPrice)
    totalPrice += 1
  }
  if (state.whiteSauce) {
    const saucePrice = document.createElement('li')
    saucePrice.innerText = '$3 white sauce'
    parentElement.appendChild(saucePrice)
    totalPrice += 3
  }
  if (state.glutenFreeCrust) {
    const crustPrice = document.createElement('li')
    crustPrice.innerText = '$5 gluten-free crust'
    parentElement.appendChild(crustPrice)
    totalPrice += 5
  }
  // // change price
  document.querySelector('.price strong').innerText = `$${totalPrice}`
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers
    renderEverything()
  })

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})
