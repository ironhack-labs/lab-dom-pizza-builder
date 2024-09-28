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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    oneMush.style.visibility = state.mushrooms ? 'visible' : 'hidden';
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    oneGreenPep.style.visibility = state.greenPeppers ? 'visible' : 'hidden';
  });
}

function renderWhiteSauce() {
  document.querySelector('.sauce').classList.toggle('sauce-white', state.whiteSauce);
}

function renderGlutenFreeCrust() {
  document.querySelector('.crust').classList.toggle('crust-gluten-free', state.glutenFreeCrust);
}

function renderButtons() {
  document.querySelector('.btn.btn-pepperoni').classList.toggle('active', state.pepperoni);
  document.querySelector('.btn.btn-mushrooms').classList.toggle('active', state.mushrooms);
  document.querySelector('.btn.btn-green-peppers').classList.toggle('active', state.greenPeppers);
  document.querySelector('.btn.btn-sauce').classList.toggle('active', state.whiteSauce);
  document.querySelector('.btn.btn-crust').classList.toggle('active', state.glutenFreeCrust);
}

function renderPrice() {
  const pricePanel = document.querySelector('.panel.price');
  let total = basePrice;
  let ingredientsList = Object.keys(state)
    .filter(ingredient => state[ingredient]) // Filtra ingredientes activados
    .map(ingredient => `${ingredients[ingredient].name}: $${ingredients[ingredient].price}`) // Crea la lista de ingredientes
    .join('<br>'); // Une con saltos de línea

  total += Object.keys(state)
    .filter(ingredient => state[ingredient])
    .reduce((sum, ingredient) => sum + ingredients[ingredient].price, 0); // Suma precios

  pricePanel.innerHTML = `<h2>Price</h2><p>${ingredientsList}</p><strong>Total: $${total}</strong>`;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


function addToppingListener(selector, stateKey) {
  document.querySelector(selector).addEventListener('click', () => {
    state[stateKey] = !state[stateKey];
    renderEverything();
  });
}


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
addToppingListener('.btn.btn-mushrooms', 'mushrooms');


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
addToppingListener('.btn.btn-green-peppers', 'greenPeppers');


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
addToppingListener('.btn.btn-sauce', 'whiteSauce');


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
addToppingListener('.btn.btn-crust', 'glutenFreeCrust');