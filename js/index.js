// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
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
  //renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceClassList = document.querySelector('.sauce').classList;
  if (state.whiteSauce) {
    sauceClassList.add('sauce-white');
  } else {
    sauceClassList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustClassList = document.querySelector('.crust').classList;
  if (state.glutenFreeCrust) {
    crustClassList.add('crust-gluten-free');
  } else {
    crustClassList.remove('crust-gluten-free');
  }
}

const btnPepperoni = document.querySelector('.btn-pepperoni');
const btnMushrooms = document.querySelector('.btn.btn-mushrooms');
const btnGreenPeppers = document.querySelector('.btn.btn-green-peppers');
const btnWhiteSauce = document.querySelector('.btn.btn-sauce');
const btnCrust = document.querySelector('.btn.btn-crust');

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    btnPepperoni.classList.add('active');
  } else {
    btnPepperoni.classList.remove('active');
  }
  if (state.mushrooms) {
    btnMushrooms.classList.add('active');
  } else {
    btnMushrooms.classList.remove('active');
  }
  if (state.greenPeppers) {
    btnGreenPeppers.classList.add('active');
  } else {
    btnGreenPeppers.classList.remove('active');
  }
  if (state.whiteSauce) {
    btnWhiteSauce.classList.add('active');
  } else {
    btnWhiteSauce.classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    btnCrust.classList.add('active');
  } else {
    btnCrust.classList.remove('active');
  }
}



/* let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}; */


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
btnPepperoni.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
btnMushrooms.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
btnGreenPeppers.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
btnWhiteSauce.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
btnCrust.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});