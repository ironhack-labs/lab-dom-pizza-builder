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
  document.querySelectorAll('.cap').forEach((oneCap) => {
    if (state.mushrooms) {
      oneCap.style.visibility = 'visible';
    } else {
      oneCap.style.visibility = 'hidden';
    }
  });

  document.querySelectorAll('.stem').forEach((oneStem) => {
    if (state.mushrooms) {
      oneStem.style.visibility = 'visible';
    } else {
      oneStem.style.visibility = 'hidden';
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
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  if (!state.whiteSauce) {
    sauce.classList.remove('sauce-white');
  } else {
    sauce.classList.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (!state.glutenFreeCrust) {
    crust.classList.remove('crust-gluten-free');
  } else {
    crust.classList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const withPepperoni = document.querySelector('.btn-pepperoni');
  const withMushRooms = document.querySelector('.btn-mushrooms');
  const withGreenPeppers = document.querySelector('.btn-green-peppers');
  const withSauce = document.querySelector('.btn-sauce');
  const withCrust = document.querySelector('.btn-crust');

  // Pepperoni btn
  if (state.pepperoni) {
    withPepperoni.classList.remove('active');
  } else {
    withPepperoni.classList.add('active');
  }

  //  Mushroom btn
  if (state.mushrooms) {
    withMushRooms.classList.remove('active');
  } else {
    withMushRooms.classList.add('active');
  }

  // Green Peppers btn
  if (state.greenPeppers) {
    withGreenPeppers.classList.remove('active');
  } else {
    withGreenPeppers.classList.add('active');
  }

  // Sauce btn
  if (state.whiteSauce) {
    withSauce.classList.remove('active');
  } else {
    withSauce.classList.add('active');
  }

  // Crust btn
  if (state.glutenFreeCrust) {
    withCrust.classList.remove('active');
  } else {
    withCrust.classList.add('active');
  }
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
