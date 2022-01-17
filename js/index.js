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
  document.querySelectorAll('.mushroom').forEach((shroom) => {
    if (state.mushrooms) {
      shroom.style.visibility = 'visible';
    } else {
      shroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('section.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('section.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('section.crust').classList.add('crust-gluten-free');
  } else {
    document
      .querySelector('section.crust')
      .classList.remove('crust-gluten-free');
  }
}

function renderButtons(button) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // Pepperoni here
  const PepperoniBtnClassList =
    document.querySelector('.btn.btn-pepperoni').classList;
  if (state.pepperoni) {
    PepperoniBtnClassList.add('active');
  } else {
    PepperoniBtnClassList.remove('active');
  }

  // Mushrooms here
  const MushroomsBtnClassList =
    document.querySelector('.btn.btn-mushrooms').classList;
  if (state.mushrooms) {
    MushroomsBtnClassList.add('active');
  } else {
    MushroomsBtnClassList.remove('active');
  }

  // Green peppers here
  const GreenPepBtnClassList = document.querySelector(
    '.btn.btn-green-peppers'
  ).classList;
  if (state.greenPeppers) {
    GreenPepBtnClassList.add('active');
  } else {
    GreenPepBtnClassList.remove('active');
  }

  // White sauce here
  const whiteSauceBtnClassList =
    document.querySelector('.btn.btn-sauce').classList;
  if (state.whiteSauce) {
    whiteSauceBtnClassList.add('active');
  } else {
    whiteSauceBtnClassList.remove('active');
  }

  // Crust here
  const crustBtnClassList = document.querySelector('.btn.btn-crust').classList;
  if (state.glutenFreeCrust) {
    crustBtnClassList.add('active');
  } else {
    crustBtnClassList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceHtml = '';
  let currentTotal = 10; //Default value of a standard cheese pizza
  const targetTotal = document.querySelector('aside.panel.price>strong');
  for (const item in state) {
    if (state[item]) {
      priceHtml += `<li>$ ${ingredients[item].price} ${ingredients[item].name}</li>`;
      currentTotal += ingredients[item].price;
    }
  }
  document.querySelector('aside.panel.price>ul').innerHTML = priceHtml;
  targetTotal.innerText = `$ ${currentTotal}`;
  priceHtml = ''; // Resetting the list for the next change
  currentTotal = 10; //Resetting the price for the next change
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
