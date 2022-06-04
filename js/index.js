// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;

// Buttons
const pepperoniButton = document.querySelector('.btn-pepperoni');
const mushroomButton = document.querySelector('.btn-mushrooms');
const greenPepperButton = document.querySelector('.btn-green-peppers');
const sauceButton = document.querySelector('.btn-sauce');
const crustButton = document.querySelector('.btn-crust');

// Ingredients
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1, button: pepperoniButton },
  mushrooms: { name: 'Mushrooms', price: 1, button: mushroomButton },
  greenPeppers: { name: 'Green Peppers', price: 1, button: greenPepperButton },
  whiteSauce: { name: 'White sauce', price: 3, button: sauceButton },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5, button: crustButton }
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
  document.querySelector('.sauce').classList.toggle('sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector('.crust').classList.toggle('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (!state.pepperoni) {
    pepperoniButton.classList.remove('active');
  } else {
    pepperoniButton.classList.add('active');
  }

  if (!state.mushrooms) {
    mushroomButton.classList.remove('active');
  } else {
    mushroomButton.classList.add('active');
  }

  if (!state.greenPeppers) {
    greenPepperButton.classList.remove('active');
  } else {
    greenPepperButton.classList.add('active');
  }

  if (!state.whiteSauce) {
    sauceButton.classList.remove('active');
  } else {
    sauceButton.classList.add('active');
  }

  if (!state.glutenFreeCrust) {
    crustButton.classList.remove('active');
  } else {
    crustButton.classList.add('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  Object.keys(ingredients).reduce((totalPrice, item) => {
    if (ingredients[item].button.contains('active')) {
      let text = `$${ingredients[item].price} ${ingredients[item].name}`;

      const panel_Ul = document.querySelector('aside.panel.price ul');
      const new_Li = document.createElement('li');
      new_Li.innerText = text;
      panel_Ul.appendChild(new_Li);

      totalPrice += ingredients[item].price;
    }

    const price_El = document.querySelector('aside.panel.price strong');
    price_El.innerText = `$${totalPrice}`;
  }, 0);
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
