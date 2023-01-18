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
  'use strict';
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  'use strict';
  document.querySelectorAll('.pep').forEach((onePep) => {
    onePep.style.visibility = state.pepperoni ? 'visible' : 'hidden';
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  'use strict';
  let stateWhiteSauce = state.whiteSauce ? 'visible' : 'hidden';
  document.querySelector('.sauce').style.visibility = stateWhiteSauce;
}

function renderGlutenFreeCrust() {
  'use strict';
  let stateGlutenFreeCrust = state.glutenFreeCrust ? 'visible' : 'hidden';
  document.querySelector('.crust').style.visibility = stateGlutenFreeCrust;
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  'use strict';
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  'use strict';
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  'use strict';
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
