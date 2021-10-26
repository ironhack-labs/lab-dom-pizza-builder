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
  document.querySelectorAll('.green-pepper').forEach((oneGrPaper) => {
    if (state.greenPeppers) {
      oneGrPaper.style.display = 'block';
    } else {
      oneGrPaper.style.display = 'none';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document
    .querySelectorAll('.sauce')
    .forEach((elm) => elm.classList.toggle('sauce-white'));
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document
    .querySelectorAll('.crust')
    .forEach((elm) => elm.classList.toggle('crust-gluten-free'));
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  var elements = document.getElementsByClassName('btn-pepperoni');
  ///debugger
  if (state.pepperoni) {
    elements[0].classList.add('active');
  } else elements[0].classList.remove('active');

  var elements = document.getElementsByClassName('btn-mushrooms');
  if (state.mushrooms) elements[0].classList.add('active');
  else elements[0].classList.remove('active');
  var elements = document.getElementsByClassName('btn-sauce');
  if (state.whiteSauce) elements[0].classList.add('active');
  else elements[0].classList.remove('active');

  var elements = document.getElementsByClassName('btn-green-peppers');
  if (state.greenPeppers) elements[0].classList.add('active');
  else elements[0].classList.remove('active');

  var elements = document.getElementsByClassName('btn-crust');
  if (state.glutenFreeCrust) elements[0].classList.add('active');
  else elements[0].classList.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = document.querySelector('.panel.price');
  list.innerHTML = `
  <h2>Your pizza's price</h2>

  <b>$10 cheese pizza</b>
  <ul>
  ${state.pepperoni ? `<li>$1 pepperoni</li>` : ''}
  ${state.mushrooms ? '<li>$1 mushrooms</li>' : ''}
  ${state.greenPeppers ? '<li>$1 green peppers</li>' : ''}
  ${state.whiteSauce ? '<li>$3 white sauce</li>' : ''}
  ${state.glutenFreeCrust ? '<li>$5 gluten-free crust</li>' : ''}
  </ul>
  <strong>${
    10 +
    (state.glutenFreeCrust && ingredients.glutenFreeCrust.price) +
    (state.greenPeppers && ingredients.greenPeppers.price) +
    (state.mushrooms && ingredients.mushrooms.price) +
    (state.pepperoni && ingredients.pepperoni.price) +
    (state.whiteSauce && ingredients.whiteSauce.price)
  }</strong>
  `;
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
  .querySelector('.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
