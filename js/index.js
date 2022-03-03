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

function changeVisibleStyle(isVisible, element) {
	  if (isVisible) {
		element.style.visibility = 'visible';
	  } else {
		element.style.visibility = 'hidden';
	  }
  }

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    changeVisibleStyle(state.pepperoni, onePep)
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    changeVisibleStyle(state.mushrooms, mushroom)
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    changeVisibleStyle(state.greenPeppers, pepper)
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
  changeButtonStatus(state.pepperoni, pepperoniButton);
  const mushroomButton = document.querySelector('.btn.btn-mushrooms');
  changeButtonStatus(state.mushrooms, mushroomButton);
  const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
  changeButtonStatus(state.greenPeppers, greenPeppersButton);
  const sauceButton = document.querySelector('.btn.btn-sauce');
  changeButtonStatus(state.whiteSauce, sauceButton);
  const crustButton = document.querySelector('.btn.btn-crust');
  changeButtonStatus(state.glutenFreeCrust, crustButton);
}

function changeButtonStatus(isActive, button) {
  if (isActive) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }
}

function renderPrice() {
  const priceListEl = document.querySelector('.panel.price ul');
  priceListEl.innerHTML = '';
  let total = basePrice;
  Object.entries(state).forEach(([ingredient, isActive]) => {
    if (isActive) {
      const price = ingredients[ingredient].price;
      total += price;
      const newPriceEl = document.createElement('li');
      newPriceEl.textContent = `$${price} ${ingredient}`;
      priceListEl.appendChild(newPriceEl);
    }
  })
  const totalEl = document.querySelector('.panel.price strong');
  totalEl.textContent = '$' + total.toFixed(2)
}

renderEverything();

document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
