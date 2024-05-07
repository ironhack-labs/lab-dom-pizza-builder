// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1, buttonName: 'btn-pepperoni' },
  mushrooms: { name: 'Mushrooms', price: 1, buttonName: 'btn-mushrooms' },
  greenPeppers: {
    name: 'Green peppers',
    price: 1,
    buttonName: 'btn-green-peppers'
  },
  whiteSauce: { name: 'White sauce', price: 3, buttonName: 'btn-sauce' },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5,
    buttonName: 'btn-crust'
  }
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
  document
    .querySelectorAll('.pep')
    .forEach((onePep) =>
      state.pepperoni
        ? (onePep.style.visibility = 'visible')
        : (onePep.style.visibility = 'hidden')
    );
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document
    .querySelectorAll('.mushroom')
    .forEach((oneMush) =>
      state.mushrooms
        ? (oneMush.style.visibility = 'visible')
        : (oneMush.style.visibility = 'hidden')
    );
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document
    .querySelectorAll('.green-pepper')
    .forEach((oneGPep) =>
      state.greenPeppers
        ? (oneGPep.style.visibility = 'visible')
        : (oneGPep.style.visibility = 'hidden')
    );
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
  const crustlement = document.querySelector('.crust');
  state.glutenFreeCrust
    ? crustlement.classList.add('crust-gluten-free')
    : crustlement.classList.remove('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  for (const [ingredientName, ingredientInfo] of Object.entries(ingredients)) {
    const ingredientButton = document.querySelector(
      `.${ingredientInfo.buttonName}`
    );
    state[ingredientName]
      ? ingredientButton.classList.add('active')
      : ingredientButton.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  const ingredientsPriceList = document.querySelector('.panel.price ul');
  ingredientsPriceList.innerHTML = `${
    state.pepperoni
      ? '<li>$<span class="price">1</span> <span class="name">pepperoni</span></li>'
      : ''
  }
        ${
          state.mushrooms
            ? '<li>$<span class="price">1</span> <span class="name">mushrooms</span></li>'
            : ''
        }
       ${
         state.greenPeppers
           ? '<li>$<span class="price">1</span> <span class="name">green peppers</span></li>'
           : ''
       }
        ${
          state.whiteSauce
            ? '<li>$<span class="price">3</span> <span class="name">white sauce</span></li>'
            : ''
        }
       ${
         state.glutenFreeCrust
           ? '<li>$<span class="price">5</span> <span class="name">gluten-free crust</span></li>'
           : ''
       }`;
  document.querySelector('.panel.price strong span').textContent = basePrice + [
    ...document.querySelectorAll('.panel.price li span[class="price"]')
  ]
    .reduce((acc, ele) => acc + Number(ele.textContent), 0);
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
