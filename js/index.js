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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceNode = document.querySelector('.sauce');
  // console.log(sauceNode);
  if (state.whiteSauce) {
    sauceNode.className = 'sauce sauce-white';
  } else {
    sauceNode.className = 'sauce';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustNode = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustNode.className = 'crust crust-gluten-free';
  } else {
    crustNode.className = 'crust';
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepBtn = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni) pepBtn.className = 'btn btn-pepperoni active';
  else pepBtn.className = 'btn btn-pepperoni';

  const mushroomsBtn = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) mushroomsBtn.className = 'btn btn-mushrooms active';
  else mushroomsBtn.className = 'btn btn-mushrooms';

  const peppersBtn = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) peppersBtn.className = 'btn btn-green-peppers active';
  else peppersBtn.className = 'btn btn-green-peppers';

  const sauceBtn = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) sauceBtn.className = 'btn btn-sauce active';
  else sauceBtn.className = 'btn btn-sauce';

  const crustBtn = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) crustBtn.className = 'btn btn-crust active';
  else crustBtn.className = 'btn btn-crust';
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = 10;

  if (state.pepperoni) {
    document.querySelector('.js-pep').hidden = false;
    price += 1;
  } else {
    document.querySelector('.js-pep').hidden = true;
  }

  if (state.mushrooms) {
    document.querySelector('.js-mushrooms').hidden = false;
    price += 1;
  } else {
    document.querySelector('.js-mushrooms').hidden = true;
  }

  if (state.greenPeppers) {
    document.querySelector('.js-peppers').hidden = false;
    price += 1;
  } else {
    document.querySelector('.js-peppers').hidden = true;
  }

  if (state.whiteSauce) {
    document.querySelector('.js-w-sauce').hidden = false;
    price += 1;
  } else {
    document.querySelector('.js-w-sauce').hidden = true;
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.js-gf-crust').hidden = false;
    price += 1;
  } else {
    document.querySelector('.js-gf-crust').hidden = true;
  }

  document.querySelector('aside strong').innerText = `$${price}`;
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
