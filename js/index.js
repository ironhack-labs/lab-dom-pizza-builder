// @ts-nocheck
// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

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
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mush) => {
    state.mushrooms ? mush.style.visibility = 'visible' : mush.style.visibility = 'hidden'
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPep) => {
    state.greenPeppers ?
      greenPep.style.visibility = 'visible' : greenPep.style.visibility = 'hidden'
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce')
  state.whiteSauce === false ?
    sauce?.setAttribute('class', 'sauce') : sauce?.setAttribute('class', 'sauce sauce-white')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust')
  state.glutenFreeCrust === false
    ? crust?.setAttribute('class', 'crust')
    : crust?.setAttribute('class', 'crust crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">
  const ingredients = ['pepperoni', 'mushrooms', 'green-peppers', 'sauce', 'crust']
  const stateClass = ['pepperoni', 'mushrooms', 'greenPeppers', 'whiteSauce', 'glutenFreeCrust']
  
  document.querySelectorAll('.btn').forEach((button, i) => {
    state[`${stateClass[i]}`]
      ? button.setAttribute('class', `btn btn-${ingredients[i]} active`)
      : button.setAttribute('class', `btn btn-${ingredients[i]}`)
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  const prop = [
    'pepperoni',
    'mushrooms',
    'greenPeppers',
    'whiteSauce',
    'glutenFreeCrust'
  ];

  let sum = Number(document.querySelector('.panel.price b').innerHTML.slice(1,3))

  document.querySelectorAll('.panel.price li').forEach((item, i) => {
    state[`${prop[i]}`] === true
      ? (item.style.display = '', sum += Number(item.innerHTML.slice(1, 2)))
      : item.style.display = 'none'
  })

  document.querySelector('.panel.price strong').innerHTML = `$${sum}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

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
