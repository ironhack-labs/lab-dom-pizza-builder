// Write your Pizza Builder JavaScript in this file.

const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
const mushroomButton = document.querySelector('.btn.btn-mushrooms');
const pepperButton = document.querySelector('.btn.btn-green-peppers');
const sauceButton = document.querySelector('.btn.btn-sauce');
const crustButton = document.querySelector('.btn.btn-crust');

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
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
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
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
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
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else sauce.classList.remove('sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else crust.classList.remove('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (!state.pepperoni) {
    pepperoniButton.classList.add('active');
  } else pepperoniButton.classList.remove('active');

  if (!state.mushrooms) {
    mushroomButton.classList.add('active');
  } else mushroomButton.classList.remove('active');

  if (!state.greenPeppers) {
    pepperButton.classList.add('active');
  } else pepperButton.classList.remove('active');

  if (!state.whiteSauce) {
    sauceButton.classList.add('active');
  } else sauceButton.classList.remove('active');

  if (!state.glutenFreeCrust) {
    crustButton.classList.add('active');
  } else crustButton.classList.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const price = document.querySelector('strong');
  let count = 12;

  if (state.pepperoni) {
    count += 2;
  }

  if (state.mushrooms) {
    count += 2;
  }

  if (state.greenPeppers) {
    count += 2;
  }

  if (state.whiteSauce) {
    count += 5;
  }

  if (state.glutenFreeCrust) {
    count += 7;
  }

  price.textContent = `$${count}`;
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

pepperoniButton.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;

  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

mushroomButton.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;

  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

pepperButton.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;

  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

sauceButton.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;

  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

crustButton.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;

  renderEverything();
});

renderEverything();
