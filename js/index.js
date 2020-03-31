// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'mushrooms', price: 1 },
  greenPeppers: { name: 'green Peppers', price: 1 },
  whiteSauce: { name: 'white sauce', price: 3 },
  glutenFreeCrust: { name: 'gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
let state = {
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
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible'
    } else {
      onePep.style.visibility = 'hidden'
    }
  })
}

function renderMushrooms() {
  let mushrooms = document.querySelectorAll('.mushroom')
  for (let i = 0; i < mushrooms.length; i++) {
    if (state.mushrooms) {
      mushrooms[i].style.visibility = 'visible'
    } else {
      mushrooms[i].style.visibility = 'hidden'
    }
  }
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(greenPepper => {
    state.greenPeppers
      ? (greenPepper.style.visibility = 'visible')
      : (greenPepper.style.visibility = 'hidden')
  })
}

function renderWhiteSauce() {
  state.whiteSauce
    ? document.querySelector('.sauce').classList.add('sauce-white')
    : document.querySelector('.sauce').classList.remove('sauce-white')
}

function renderGlutenFreeCrust() {
  state.glutenFreeCrust
    ? document.querySelector('.crust').classList.add('crust-gluten-free')
    : document.querySelector('.crust').classList.remove('crust-gluten-free')
}

function renderButtons() {
  state.pepperoni
    ? document.querySelector('.btn.btn-pepperoni').classList.add('active')
    : document.querySelector('.btn.btn-pepperoni').classList.remove('active')

  state.mushrooms
    ? document.querySelector('.btn.btn-mushrooms').classList.add('active')
    : document.querySelector('.btn.btn-mushrooms').classList.remove('active')

  state.greenPeppers
    ? document.querySelector('.btn.btn-green-peppers').classList.add('active')
    : document
        .querySelector('.btn.btn-green-peppers')
        .classList.remove('active')

  state.whiteSauce
    ? document.querySelector('.btn.btn-sauce').classList.add('active')
    : document.querySelector('.btn.btn-sauce').classList.remove('active')

  state.glutenFreeCrust
    ? document.querySelector('.btn.btn-crust').classList.add('active')
    : document.querySelector('.btn.btn-crust').classList.remove('active')
}

function renderPrice() {
  // (document.querySelector('.panel.price ul').innerHTML += `<li>$1 pepperoni</li>`)
  let ingredientsList = ''
  let sum = basePrice
  if (state.pepperoni) {
    ingredientsList += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`
    sum += ingredients.pepperoni.price
  }

  if (state.mushrooms) {
    ingredientsList += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`
    sum += ingredients.mushrooms.price
  }

  if (state.greenPeppers) {
    ingredientsList += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`
    sum += ingredients.pepperoni.price
  }

  if (state.whiteSauce) {
    ingredientsList += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`
    sum += ingredients.whiteSauce.price
  }

  if (state.glutenFreeCrust) {
    ingredientsList += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`
    sum += ingredients.glutenFreeCrust.price
  }
  document.querySelector('.panel.price ul').innerHTML = ingredientsList
  document.querySelector('.panel.price strong').textContent = `$${sum}`
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

document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})

document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})

document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})
