// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
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
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    state.pepperoni ? onePep.style.visibility = 'visible' : onePep.style.visibility = 'hidden';
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushrom">`
  document.querySelectorAll('.mushroom').forEach(mush => {
    state.mushrooms ? mush.style.visibility = 'visible' : mush.style.visibility = 'hidden';
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pep => {
    state.greenPeppers ? pep.style.visibility = 'visible' : pep.style.visibility = 'hidden';
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  state.whiteSauce ? document.querySelector('.sauce').classList.add('sauce-white') : document.querySelector('.sauce').classList.remove('sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  state.glutenFreeCrust ? document.querySelector('.crust').classList.add('crust-gluten-free') : document.querySelector('.crust').classList.remove('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepperoni = document.querySelector('.btn.btn-pepperoni');
  let mushrooms = document.querySelector('.btn.btn-mushrooms');
  let greenPeppers = document.querySelector('.btn.btn-green-peppers');
  let whiteSauce = document.querySelector('.btn.btn-sauce');
  let glutenFreeCrust = document.querySelector('.btn.btn-crust');

  state.pepperoni ? pepperoni.classList.add('active') : pepperoni.classList.remove('active');
  state.mushrooms ? mushrooms.classList.add('active') : mushrooms.classList.remove('active');
  state.greenPeppers ? greenPeppers.classList.add('active') : greenPeppers.classList.remove('active');
  state.whiteSauce ? whiteSauce.classList.add('active') : whiteSauce.classList.remove('active');
  state.glutenFreeCrust ? glutenFreeCrust.classList.add('active') : glutenFreeCrust.classList.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let ingredientsList = document.querySelector('.panel.price ul');
  ingredientsList.innerHTML = '';
  let priceIndicator = basePrice;
  for (let key in ingredients) {
    state[key] ? (ingredientsList.innerHTML += `<li>$${ingredients[key].price} ${ingredients[key].name}</li>`, priceIndicator += ingredients[key].price) : null;
  }
  document.querySelector('aside.panel.price strong').innerHTML = "$" + priceIndicator;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})