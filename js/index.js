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
// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushrooms').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGpep) => {
    if (state.green - pepper) {
      oneGpep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  document.querySelectorAll('.sauce-white').forEach((oneSauce) => {
    if (state.sauce) {
      oneSauce.style.visibility = 'visible';
    } else {
      oneSauce.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust-gluten-free').forEach((oneCrustGF) => {
    if (state.crustGF) {
      oneCrustGF.style.visibility = 'visible';
    } else {
      oneCrustGF.style.visibility = 'hidden';
    }
  });
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
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
  .querySelector('.btn.btn-mushroom')
  .addEventListener('click', function () {
    state.mushroom = !state.mushroom;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-pepper')
  .addEventListener('click', function () {
    state.green-peppers = !state.green-peppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document
  .querySelector('.btn.btn-sauce')
  .addEventListener('click', function () {
    state.sauce = !state.sauce;
    renderEverything();
  });


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document
  .querySelector('.btn.btn-crust')
  .addEventListener('click', function () {
    state.crust = !state.crust;
    renderEverything();
  });
