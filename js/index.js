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
  renderButtons();
  renderPrice();
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
  renderButtons();
  renderPrice();
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPeper) => {
    if (state.greenPeppers) {
      greenPeper.style.visibility = 'visible';
    } else {
      greenPeper.style.visibility = 'hidden';
    }
  });
  renderButtons();
  renderPrice();
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauce) => {
    sauce.classList.toggle('sauce-white');
  });
  renderButtons();
  renderPrice();
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crust) => {
    crust.classList.toggle('crust-gluten-free');
  });
  renderButtons();
  renderPrice();
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const peperoniClasses = document.querySelector('.btn-pepperoni').classList;
  const mushroomClasses = document.querySelector('.btn-mushrooms').classList;
  const greenPeperClasses =
    document.querySelector('.btn-green-peppers').classList;
  const whiteSauceClasses = document.querySelector('.btn-sauce').classList;
  const glutenFreeCrustClasses = document.querySelector('.btn-crust').classList;

  state.pepperoni
    ? peperoniClasses.add('active')
    : peperoniClasses.remove('active');

  state.mushrooms
    ? mushroomClasses.add('active')
    : mushroomClasses.remove('active');

  state.greenPeppers
    ? greenPeperClasses.add('active')
    : greenPeperClasses.remove('active');

  state.whiteSauce
    ? whiteSauceClasses.add('active')
    : whiteSauceClasses.remove('active');

  state.glutenFreeCrust
    ? glutenFreeCrustClasses.add('active')
    : glutenFreeCrustClasses.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const parentElm = document.querySelector('.price ul');
  const totalPriceElm = document.querySelector('.price strong');
  parentElm.innerHTML = '';
  let totalPrice = 10;
  for (const [key, value] of Object.entries(ingredients)) {
    if (state[key]) {
      const ing = document.createElement('li');
      ing.textContent = `$${value.price} ${value.name}`;
      parentElm.appendChild(ing);
      totalPrice += value.price;
    }
  }
  totalPriceElm.textContent = totalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderPepperoni();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
});
