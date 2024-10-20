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
function renderEverything () {
  renderPepperoni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperoni () {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible'
    } else {
      onePep.style.visibility = 'hidden'
    }
  })
}

function renderMushrooms () {
  document.querySelectorAll('.mushroom').forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible'
    } else {
      mush.style.visibility = 'hidden'
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers () {
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible'
    } else {
      pepper.style.visibility = 'hidden'
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce () {
  let sauceElement = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauceElement.classList.add('sauce-white')
  } else {
    sauceElement.classList.remove('sauce-white')
  }

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust () {
  let crustElement = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crustElement.classList.add('crust-gluten-free')
  } else {
    crustElement.classList.remove('crust-gluten-free')
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons () {
  const buttons = document.querySelectorAll('button')
  const pepperoniButton = document.querySelector('.btn.btn-pepperoni')
  if (!state.pepperoni) {
    pepperoniButton.classList.remove('active')
  } else {
    pepperoniButton.classList.add('active')
  }
  const mushroomButton = document.querySelector('.btn.btn-mushrooms')
  if (!state.mushrooms) {
    mushroomButton.classList.remove('active')
  } else {
    mushroomButton.classList.add('active')
  }
  const peppersButton = document.querySelector('.btn.btn-green-peppers')
  if (!state.greenPeppers) {
    peppersButton.classList.remove('active')
  } else {
    peppersButton.classList.add('active')
  }
  const sauceButton = document.querySelector('.btn.btn-sauce')
  if (!state.whiteSauce) {
    sauceButton.classList.remove('active')
  } else if (state.whiteSauce) {
    sauceButton.classList.add('active')
  }
  const glutenButton = document.querySelector('.btn.btn-crust')
  if (!state.glutenFreeCrust) {
    glutenButton.classList.remove('active')
  } else if (state.glutenFreeCrust) {
    glutenButton.classList.add('active')
  }

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice () {
  const priceList = document.querySelector('.panel.price ul')
  const totalPriceEl = document.querySelector('.panel.price strong')
  let totalPriceNum = basePrice
  //totalPriceEl.innerHTML = `$${totalPriceNum}`;

  const pepperoniEl = priceList.querySelector(':nth-child(1)')
  if (state.pepperoni) {
    pepperoniEl.style.display = 'block'
    totalPriceNum += ingredients.pepperoni.price
  } else if (!state.pepperoni) {
    pepperoniEl.style.display = 'none'
  }

  const mushroomEl = priceList.querySelector(':nth-child(2)')
  if (state.mushrooms) {
    mushroomEl.style.display = 'block'
    totalPriceNum += ingredients.mushrooms.price
  } else if (!state.mushrooms) {
    mushroomEl.style.display = 'none'
  }

  const pepperEl = priceList.querySelector(':nth-child(3)')
  if (state.greenPeppers) {
    pepperEl.style.display = 'block'
    totalPriceNum += ingredients.greenPeppers.price
  } else if (!state.greenPeppers) {
    pepperEl.style.display = 'none'
  }

  const sauceEl = priceList.querySelector(':nth-child(4)')
  if (state.whiteSauce) {
    sauceEl.style.display = 'block'
    totalPriceNum += ingredients.whiteSauce.price
  } else if (!state.whiteSauce) {
    sauceEl.style.display = 'none'
  }
  const glutenEl = priceList.querySelector(':nth-child(5)')
  if (state.glutenFreeCrust) {
    glutenEl.style.display = 'block'
    totalPriceNum += ingredients.glutenFreeCrust.price
  } else if (!state.glutenFreeCrust) {
    glutenEl.style.display = 'none'
  }
  totalPriceEl.innerHTML = `$${totalPriceNum}`
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni
    renderEverything()
  })

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms
    renderEverything()
  })

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers
    renderEverything()
  })
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})
