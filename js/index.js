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
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(item => {
    item.style.visibility = state.pepperoni ? 'visible' : 'hidden';
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(item => {
    item.style.visibility = state.mushrooms ? 'visible' : 'hidden';
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(item => {
    item.style.visibility = state.greenPeppers ? 'visible' : 'hidden';
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceElement = document.querySelector('.sauce');
  state.whiteSauce
    ? sauceElement.classList.add('sauce-white')
    : sauceElement.classList.remove('sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustElement = document.querySelector('.crust');
  state.glutenFreeCrust
    ? crustElement.classList.add('crust-gluten-free')
    : crustElement.classList.remove('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(item => {
    if (item.className.includes('pepperoni')) {
      state.pepperoni
        ? item.classList.add('active')
        : item.classList.remove('active');
    } else if (item.className.includes('mushrooms')) {
      state.mushrooms
        ? item.classList.add('active')
        : item.classList.remove('active');
    } else if (item.className.includes('green-peppers')) {
      state.greenPeppers
        ? item.classList.add('active')
        : item.classList.remove('active');
    } else if (item.className.includes('sauce')) {
      state.whiteSauce
        ? item.classList.add('active')
        : item.classList.remove('active');
    } else if (item.className.includes('crust')) {
      state.glutenFreeCrust
        ? item.classList.add('active')
        : item.classList.remove('active');
    }
  });
}
// ____-------_______--------_______--------__________-------
// For iteration 3:
// I don't understand why the iteration below doesn't work:
// Same logic as the one above

// state.pepperoni
//   ? document.querySelector('.btn-pepperoni').classList.add('active')
//   : document.querySelector('.btn-pepperoni').classList.remove('active');
// state.mushrooms
//   ? document.querySelector('.btn-mushrooms').classList.add('active')
//   : document.querySelector('.btn-mushrooms').classList.remove('active');
// state.greenPeppers
//   ? document.querySelector('.btn-green-peppers').classList.add('active')
//   : document.querySelector('.btn-green-peppers').classList.remove('active');
// state.whiteSauce
//   ? document.querySelector('.btn-sauce-white').classList.add('active')
//   : document.querySelector('.btn-sauce-white').classList.remove('active');
// state.glutenFreeCrust
//   ? document.querySelector('.btn-crust').classList.add('active')
//   : document.querySelector('.btn-crust').classList.remove('active');

// ____-------_______--------_______--------__________-------

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 10;
  let ingredientsList = '';

  for (let key in state) {
    if (state[key]) {
      ingredientsList += `<li>$${ingredients[key].price} ${ingredients[key].name}</li>`;
      totalPrice += ingredients[key].price;
    }
  }
  document.querySelector('.panel.price ul').innerHTML = ingredientsList;
  document.querySelector('.panel.price strong').textContent = `$${totalPrice}`;
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

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
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
});
