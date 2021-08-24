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

  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  const sauce = document.querySelector('.sauce');

  if (state.whiteSauce) {
    sauce.classList = 'sauce sauce-white';
  } else {
    sauce.classList = 'sauce ';
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    crust.classList = 'crust crust-gluten-free';
  } else {
    crust.classList = 'crust';
  }

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

const stateObject = {
  'btn-pepperoni': 'pepperoni',
  'btn-mushrooms': 'mushrooms',
  'btn-green-peppers': 'greenPeppers',
  'btn-sauce': 'whiteSauce',
  'btn-crust': 'glutenFreeCrust'
};

const priceObject = {
  '$1 pepperoni': 'pepperoni',
  '$1 mushroom': 'mushroom',
  '$1 green peppers': 'greenPeppers',
  '$3 white sauce': 'whiteSauce',
  '$5 gluten-free crust': 'glutenFreeCrust'
};

const modifyActive = (button, state, stateObject) => {
  const className = button.classList[1];
  const key = stateObject[className];
  const buttonIsActive = state[key];

  if (buttonIsActive) {
    if (!button.classList.contains('active')) {
      button.classList.add('active');
    }
  } else {
    button.classList.remove('active');
  }
};

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((button) => {
    modifyActive(button, state, stateObject);
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let totalPrice = 0; //plus 10 and $

  const price = document.querySelector('.price');
  const ul = price.querySelector('ul');
  const li = ul.querySelectorAll('li');
  const totalDisplay = price.querySelector('strong');

  ul.innerHTML = '';
  totalDisplay.innerHTML = '';

  li.forEach((listItem) => {});
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
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
