// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'mushrooms', price: 1 },
  greenPeppers: { name: 'green peppers', price: 1 },
  whiteSauce: { name: 'white sauce', price: 3 },
  glutenFreeCrust: { name: 'gluten-free crust', price: 5 }
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
    if (state.pepperoni) {
      onePep.style.visibility = 'visible'
    } else {
      onePep.style.visibility = 'hidden'
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible'
    } else {
      oneMushroom.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible'
    } else {
      oneGreenPepper.style.visibility = 'hidden'
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let whiteSauceSection = document.querySelector('.sauce')
  if (state.whiteSauce) {
    whiteSauceSection.classList.add('sauce-white')
  } else {
    whiteSauceSection.classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustSection = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crustSection.classList.add('crust-gluten-free')
  } else {
    crustSection.classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepperoniButton = document.getElementsByClassName("btn-pepperoni")
  if (state.pepperoni) {
    pepperoniButton[0].classList.add("active")
  } else {
    pepperoniButton[0].classList.remove("active")
  }
  
  let mushroomsButton = document.getElementsByClassName("btn-mushrooms")
  if (state.mushrooms) {
    mushroomsButton[0].classList.add("active")
  } else {
    mushroomsButton[0].classList.remove("active")
  }
  
  let greenPepperButton = document.getElementsByClassName("btn-green-peppers")
  if (state.greenPeppers) {
    greenPepperButton[0].classList.add("active")
  } else {
    greenPepperButton[0].classList.remove("active")
  }
  
  let whiteSauceButton = document.getElementsByClassName("btn-sauce")
  if (state.whiteSauce) {
    whiteSauceButton[0].classList.add("active")
  } else {
    whiteSauceButton[0].classList.remove("active")
  }
  
  let glutenFreeCrustButton = document.getElementsByClassName("btn-crust")
  if (state.glutenFreeCrust) {
    glutenFreeCrustButton[0].classList.add("active")
  } else {
    glutenFreeCrustButton[0].classList.remove("active")
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceList = document.querySelector('.panel.price ul')
  const priceElement = document.querySelector('.panel.price strong')
  let total = basePrice
  priceList.innerHTML = ''
  for (const key in state) {
    if (state[key]) {
        const ingredient = ingredients[key]
        const li = document.createElement('li')
        li.textContent = `$${ingredient.price} ${ingredient.name}`
        priceList.append(li)
        total += ingredient.price
    }
  }
  priceElement.textContent = `$${total}`
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
    state.mushrooms = !state.mushrooms
    renderEverything()
  })
  
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
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