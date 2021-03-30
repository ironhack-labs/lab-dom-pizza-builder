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
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible'
    } else {
      mushroom.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(greenPep => {
    state.greenPeppers
      ? (greenPep.style.visibility = 'visible')
      : (greenPep.style.visibility = 'hidden')
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
  const pepperoniBtn = document.querySelector('.btn-pepperoni')
  state.pepperoni
    ? pepperoniBtn.classList.add('active')
    : pepperoniBtn.classList.remove('active')

  const mushroomBtn = document.querySelector('.btn-mushrooms')
  state.mushrooms
    ? mushroomBtn.classList.add('active')
    : mushroomBtn.classList.remove('active')

  const greenPepBtn = document.querySelector('.btn-green-peppers')
  state.greenPeppers
    ? greenPepBtn.classList.add('active')
    : greenPepBtn.classList.remove('active')

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

  parentElement = document.querySelector('.price ul')
  parentElement.innerHTML = ''

  let totalPrice = 10

  if (state.pepperoni) {
    const pepperoniPrice = document.createElement('li')
    pepperoniPrice.innerText = '$1 pepperoni'
    parentElement.appendChild(pepperoniPrice)
    totalPrice += 1
  }

  if (state.mushrooms) {
    const mushroomPrice = document.createElement('li')
    mushroomPrice.innerText = '$1 mushrooms'
    parentElement.appendChild(mushroomPrice)
    totalPrice += 1
  }

  if (state.greenPeppers) {
    const greenPepperPrice = document.createElement('li')
    greenPepperPrice.innerText = '$1 green peppers'
    parentElement.appendChild(greenPepperPrice)
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