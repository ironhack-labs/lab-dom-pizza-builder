// Write your Pizza Builder JavaScript in this file.

// Helper functions
const dashSeparatedToCamelCase = (dashSeparated) =>
  dashSeparated
    .toLowerCase()
    .replace(/-(.)/g, (match, group1) => group1.toUpperCase());

const camelCaseToDashSeparated = (value) =>
  value
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();

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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const saurce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    saurce.classList.add('sauce-white');
  } else {
    saurce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  const switchBotton = (button, stateActive) => {
    if (stateActive) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  };

  document.querySelectorAll('.btn').forEach((button) => {
    switch (true) {
      case button.classList.contains('btn-pepperoni'):
        switchBotton(button, state.pepperoni);
        break;

      case button.classList.contains('btn-mushrooms'):
        switchBotton(button, state.mushrooms);
        break;

      case button.classList.contains('btn-green-peppers'):
        switchBotton(button, state.greenPeppers);
        break;

      case button.classList.contains('btn-white-sauce'):
        switchBotton(button, state.whiteSauce);
        break;

      case button.classList.contains('btn-gluten-free-crust'):
        console.log(button);
        switchBotton(button, state.glutenFreeCrust);
        break;
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;

  for (let li of [...document.querySelector('aside.panel.price ul').children]) {
    const key = dashSeparatedToCamelCase(
      li.innerText.split(' ').slice(1).join('-')
    );
    li.hidden = !state[key];
    totalPrice += state[key] ? ingredients[key].price : 0;
  }

  document.querySelector(
    'aside.panel.price strong'
  ).innerText = `$${totalPrice}`;
}

renderEverything();

// Iteration 1 & 2: Add click event listener on `<button class="btn btn-...">`
Object.keys(state).forEach((key) => {
  document
    .querySelector(`.btn.btn-${camelCaseToDashSeparated(key)}`)
    .addEventListener('click', () => {
      state[key] = !state[key];
      renderEverything();
    });
});
