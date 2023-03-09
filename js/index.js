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

function toggleVisibility(className, state) {
  document.querySelectorAll(className).forEach((one) => {
    if (state) {
      one.style.visibility = 'visible';
    } else {
      one.style.visibility = 'hidden';
    }
  });
}
function toggleClass(className, toggleClassName, state) {
  const element = document.querySelector(className);
  if (state) {
    element.classList.add(toggleClassName);
  } else {
    element.classList.remove(toggleClassName);
  }
}

function renderPepperoni() {
  toggleVisibility('.pep', state.pepperoni);
}

function renderMushrooms() {
  toggleVisibility('.mushroom', state.mushrooms);
}

function renderGreenPeppers() {
  toggleVisibility('.green-pepper', state.greenPeppers);
}

function renderWhiteSauce() {
  toggleClass('.sauce', 'sauce-white', state.whiteSauce);
}

function renderGlutenFreeCrust() {
  toggleClass('.crust', 'crust-gluten-free', state.glutenFreeCrust);
}

function renderButtons() {
  toggleClass('.btn.btn-pepperoni', 'active', state.pepperoni);
  toggleClass('.btn.btn-mushrooms', 'active', state.mushrooms);
  toggleClass('.btn.btn-green-peppers', 'active', state.mushrooms);
  toggleClass('.btn.btn-sauce', 'active', state.whiteSauce);
  toggleClass('.btn.btn-crust', 'active', state.glutenFreeCrust);
}

function renderPrice() {
  let totalPrice = basePrice;
  const ulElement = document.querySelector('.panel.price ul');
  ulElement.innerHTML = '';
  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient].price;
      const liElement = document.createElement('li');
      liElement.innerHTML = `$${ingredients[ingredient].price} ${ingredients[ingredient].name} `;
      ulElement.appendChild(liElement);
    }
  }
  document.querySelector('#totalPrice').innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
function addEventListner(className, ingredient) {
  document.querySelector(className).addEventListener('click', function () {
    state[ingredient] = !state[ingredient];
    renderEverything();
  });
}
addEventListner('.btn.btn-pepperoni', 'pepperoni');
addEventListner('.btn.btn-mushrooms', 'mushrooms');
addEventListner('.btn.btn-green-peppers', 'greenPeppers');
addEventListner('.btn.btn-sauce', 'whiteSauce');
addEventListner('.btn.btn-crust', 'glutenFreeCrust');
