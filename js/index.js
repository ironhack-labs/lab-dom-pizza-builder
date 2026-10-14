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
  mushrooms: false,
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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceState = document.querySelector('.sauce');
  sauceState.classList.toggle('sauce-white', state.whiteSauce);
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustState = document.querySelector('.crust');
  crustState.classList.toggle('crust-gluten-free', state.glutenFreeCrust);
}

function renderButtons() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    if (button.classList.contains('btn-pepperoni')) {
      button.classList.toggle('active', state.pepperoni);
    } else if (button.classList.contains('btn-mushrooms')) {
      button.classList.toggle('active', state.mushrooms);
    } else if (button.classList.contains('btn-green-peppers')) {
      button.classList.toggle('active', state.greenPeppers);
    } else if (button.classList.contains('btn-sauce')) {
      button.classList.toggle('active', state.whiteSauce);
    } else if (button.classList.contains('btn-crust')) {
      button.classList.toggle('active', state.glutenFreeCrust);
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
  let startPrice = 10;
  let totalPrice = document.querySelector('.panel.price strong');

  const pepItem = document.querySelector('.panel.price ul li:nth-child(1)');
  const mushItem = document.querySelector('.panel.price ul li:nth-child(2)');
  const greenItem = document.querySelector('.panel.price ul li:nth-child(3)');
  const sauceItem = document.querySelector('.panel.price ul li:nth-child(4)');
  const crustItem = document.querySelector('.panel.price ul li:nth-child(5)');

  if (state.pepperoni) {
    pepItem.style.visibility = 'visible';
    pepItem.style.display = 'list-item';
    startPrice += 1;
  } else {
    pepItem.style.visibility = 'hidden';
    pepItem.style.display = 'none';
  }

  if (state.mushrooms) {
    mushItem.style.visibility = 'visible';
    mushItem.style.display = 'list-item';
    startPrice += 1;
  } else {
    mushItem.style.visibility = 'hidden';
    mushItem.style.display = 'none';
  }

  if (state.greenPeppers) {
    greenItem.style.visibility = 'visible';
    greenItem.style.display = 'list-item';
    startPrice += 1;
  } else {
    greenItem.style.visibility = 'hidden';
    greenItem.style.display = 'none';
  }

  if (state.whiteSauce) {
    sauceItem.style.visibility = 'visible';
    sauceItem.style.display = 'list-item';
    startPrice += 3;
  } else {
    sauceItem.style.visibility = 'hidden';
    sauceItem.style.display = 'none';
  }
  if (state.glutenFreeCrust) {
    crustItem.style.visibility = 'visible';
    crustItem.style.display = 'list-item';
    startPrice += 5;
  } else {
    crustItem.style.visibility = 'hidden';
    crustItem.style.display = 'none';
  }
  totalPrice.textContent = `Total: $${startPrice}`;
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
