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

const returnStateProperty = btnClass => {
  switch (btnClass) {
    case 'pepperoni':
      return 'pepperoni'
    case 'mushrooms' :
      return 'mushrooms'
    case 'green-peppers' :
      return 'greenPeppers'
    case 'sauce' :
      return 'whiteSauce'
    case 'crust' : 
      return 'glutenFreeCrust'
    default:
      break;
  }
} 

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
  console.log(state)
}


function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => state.pepperoni ? onePep.style.visibility = 'visible' : onePep.style.visibility = 'hidden')
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneShroom => state.mushrooms ? oneShroom.style.visibility = 'visible' : oneShroom.style.visibility = 'hidden')
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => state.greenPeppers ? oneGreenPep.style.visibility = 'visible' : oneGreenPep.style.visibility = 'hidden')
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('section.sauce')
  !state.whiteSauce ? sauce.classList.remove('sauce-white') : sauce.classList.add('sauce-white')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  //document.querySelector('section.crust').classList.toggle('crust-gluten-free')
  const crust = document.querySelector('section.crust')
  !state.glutenFreeCrust ? crust.classList.remove('crust-gluten-free') : crust.classList.add('crust-gluten-free')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('button.btn').forEach(btn => {
    const btnClass1 = btn.classList[1].slice(4, btn.classList[1].length)
    state[returnStateProperty(btnClass1)] ? btn.classList.add('active') : btn.classList.remove('active')
    btn.addEventListener('click', e => {
      const btnClass2 = e.target.classList[1].slice(4, e.target.classList[1].length)
      !state[returnStateProperty(btnClass2)]
    })
  })
  

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const ingredientsList = document.querySelector('aside.panel.price ul')
  const priceDisplay = document.querySelector('aside strong')
  let totalPrice = basePrice
  ingredientsList.innerHTML = ''
  priceDisplay.innerHTML = `$${basePrice}`
  Object.keys(state).forEach(ingredient => {
    if(state[ingredient]){
      ingredientsList.innerHTML += `<li>${ingredients[ingredient].name}</li>`
      totalPrice += ingredients[ingredient].price
      priceDisplay.innerText = `$${totalPrice}`
    }
  })
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni
  renderEverything()
});
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


