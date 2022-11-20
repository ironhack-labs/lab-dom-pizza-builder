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

const buttons = document.querySelectorAll('.btn');

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
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  document.querySelectorAll('.sauce-white').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  buttons.forEach((btn) => {
    if (state[btn.id]) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  const listItems = document.querySelectorAll('.panel.price li');
  //let pizzaPrice = 10;
  //const finalPrice = document.querySelector('.panel.price strong');

  listItems.forEach((item) => {
    const display = state[item.dataset.id] ? 'block' : 'none';
    item.style.display = display;
  
    }
  );
}



renderEverything();

buttons.forEach((btn) => {
  btn.addEventListener('click', function () {
    state[btn.id] = !state[btn.id];
    renderEverything();
    renderButtons();
  });
});
