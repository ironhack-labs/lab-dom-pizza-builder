// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
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
    state.pepperoni ? onePep.style.visibility = 'visible' : onePep.style.visibility = 'hidden'
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    state.mushrooms ? oneMush.style.visibility = 'visible' : oneMush.style.visibility = 'hidden'
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((gp) => {
    state.greenPeppers ? gp.style.visibility = 'visible' : gp.style.visibility = 'hidden'
  })
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  document.querySelectorAll('.sauce').forEach(sause => state.whiteSauce ? sause.classList.add('sauce-white') : sause.classList.remove('sauce-white')
  )
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  document.querySelectorAll('.crust').forEach(crut => state.glutenFreeCrust ? crut.classList.add('crust-gluten-free') : crut.classList.remove('crust-gluten-free'))

}
//funcion paralela para cambiar el estado de la clase de CSS 
function toggleActiveButton(buttonClass, stateProperty) {
  const button = document.querySelector(buttonClass)
  state[stateProperty] ? button.classList.remove('active') : button.classList.add('active')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  toggleActiveButton('.btn-pepperoni', 'pepperoni')
  toggleActiveButton('.btn-mushrooms', 'mushrooms')
  toggleActiveButton('.btn-green-peppers', 'greenPeppers')
  toggleActiveButton('.btn-sauce', 'whiteSauce')
  toggleActiveButton('.btn-crust', 'glutenFreeCrust')

}

function renderPrice() {
  const priceList = document.querySelector('.panel.price ul')
  const totalPriceElement = document.querySelector('.panel.price strong')

  priceList.innerHTML = ''
  let totalPrice = basePrice

  for (let ingredient in state) {
    if (state[ingredient]) {
      const ingredientElement = document.createElement('li')
      ingredientElement.textContent = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`
      priceList.appendChild(ingredientElement)
      totalPrice += ingredients[ingredient].price
    }
  }

  totalPriceElement.textContent = `$${totalPrice}`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
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