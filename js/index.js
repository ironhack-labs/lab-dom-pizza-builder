// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

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
    state.pepperoni ? onePep.style.visibility = 'visible' : onePep.style.visibility = 'hidden'
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    state.mushrooms ? oneMushroom.style.visibility = 'visible' : oneMushroom.style.visibility = 'hidden'
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    state.greenPeppers ? onePepper.style.visibility = 'visible' : onePepper.style.visibility = 'hidden'
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    document.querySelectorAll('.sauce').forEach(sauce => {
      state.whiteSauce ? sauce.classList.add('sauce-white') : sauce.classList.remove('sauce-white')
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust => {
    state.glutenFreeCrust ? crust.classList.add('crust-gluten-free') : crust.classList.remove('crust-gluten-free')
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //pepperoni
  const pepperButton = document.querySelector('.btn-pepperoni') 
  state.pepperoni ? pepperButton.classList.add('active') : pepperButton.classList.remove('active')
  //mushrooms
  const mushroomsButton = document.querySelector('.btn-mushrooms') 
  state.mushrooms ? mushroomsButton.classList.add('active') : mushroomsButton.classList.remove('active')
  //green peppers
  const greenPButton = document.querySelector('.btn-green-peppers') 
  state.greenPeppers ? greenPButton.classList.add('active') : greenPButton.classList.remove('active')
  //white sauce
  const sauceButton = document.querySelector('.btn-sauce') 
  state.whiteSauce ? sauceButton.classList.add('active') : sauceButton.classList.remove('active')
  // gluten free crust
  const crustButton = document.querySelector('.btn-crust') 
  state.glutenFreeCrust ? crustButton.classList.add('active') : crustButton.classList.remove('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = document.querySelector('.price ul')
  list.innerHTML = ''
  let totalPrice = basePrice
  const total = document.querySelector('.price strong')

  for (key in ingredients) {
    (state[key]) && (totalPrice += ingredients[key].price) && (list.innerHTML += `<li>$${ingredients[key].price} ${ingredients[key].name}</li>`)
  }
  total.innerHTML = `$${totalPrice}`
}

renderEverything();

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