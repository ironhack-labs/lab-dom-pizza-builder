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
  document.querySelectorAll('.mushroom').forEach((mushi) => {
    if (state.mushrooms) {
      mushi.style.visibility = 'visible';
    } else {
      mushi.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((grnPepper) => {
    if (state.greenPeppers) {
      grnPepper.style.visibility = 'visible';
    } else {
      grnPepper.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

const ingredientBtns = {
  pepperoni: '.btn-pepperoni',
  mushrooms: '.btn-mushrooms',
  greenPeppers: '.btn-green-peppers',
  whiteSauce: '.btn-sauce',
  glutenFreeCrust: '.btn-crust'
};
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  for (const ingredient in ingredientBtns) {
    const ingredientButton = document.querySelector(ingredientBtns[ingredient]);
    if (state[ingredient]) {
      ingredientButton.classList.add('active');
    } else {
      ingredientButton.classList.remove('active');
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceSection = document.querySelector('.price ul');
  const price = document.querySelector('.price strong');
  // priceSection.innerHTML = '';
  let startingText = '';
  let sum = basePrice;

  for (const ingredient in state) {
    if (state[ingredient]) {
      startingText += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
      sum += ingredients[ingredient].price;
    }
  }
  priceSection.innerHTML = startingText;
  price.innerText = `${sum}`;
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
