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
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceSection = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceSection.classList.add('sauce-white');
  } else {
    sauceSection.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustSection = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustSection.classList.add('crust-gluten-free');
  } else {
    crustSection.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni) {
    pepperoniButton.classList.add('active');
  } else {
    pepperoniButton.classList.remove('active');
  }

  const mushroomsButton = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    mushroomsButton.classList.add('active');
  } else {
    mushroomsButton.classList.remove('active');
  }

  const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    greenPeppersButton.classList.add('active');
  } else {
    greenPeppersButton.classList.remove('active');
  }

  const sauceButton = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    sauceButton.classList.add('active');
  } else {
    sauceButton.classList.remove('active');
  }

  const crustButton = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    crustButton.classList.add('active');
  } else {
    crustButton.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pricePanel = document.querySelector('.panel.price');
  let html = "<h2>Your pizza's price</h2>";

  html += `<b>$${basePrice} cheese pizza</b>`;
  html += '<ul>';

  // add each active ingredient to the list
  if (state.pepperoni) {
    html += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
  }

  if (state.mushrooms) {
    html += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
  }

  if (state.greenPeppers) {
    html += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
  }

  if (state.whiteSauce) {
    html += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
  }

  if (state.glutenFreeCrust) {
    html += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
  }

  html += '</ul>';

  // calculate total price
  let totalPrice = basePrice;
  if (state.pepperoni) totalPrice += ingredients.pepperoni.price;
  if (state.mushrooms) totalPrice += ingredients.mushrooms.price;
  if (state.greenPeppers) totalPrice += ingredients.greenPeppers.price;
  if (state.whiteSauce) totalPrice += ingredients.whiteSauce.price;
  if (state.glutenFreeCrust) totalPrice += ingredients.glutenFreeCrust.price;

  html += `<strong>$${totalPrice}</strong>`;

  pricePanel.innerHTML = html;
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
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
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

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
