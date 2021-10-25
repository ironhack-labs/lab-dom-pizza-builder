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

  document
    .querySelectorAll('.mushroom')
    .forEach(
      (mushroom) =>
        (mushroom.style.visibility = state.mushrooms ? 'visible' : 'hidden')
    );
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document
    .querySelectorAll('.green-pepper')
    .forEach(
      (greenPepper) =>
        (greenPepper.style.visibility = state.greenPeppers
          ? 'visible'
          : 'hidden')
    );
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document
      .querySelectorAll('.sauce')
      .forEach((element) => element.classList.add('sauce-white'));
  } else {
    document
      .querySelectorAll('.sauce')
      .forEach((element) => element.classList.remove('sauce-white'));
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document
      .querySelectorAll('.crust')
      .forEach((element) => element.classList.add('crust-gluten-free'));
  } else {
    document
      .querySelectorAll('.crust')
      .forEach((element) => element.classList.remove('crust-gluten-free'));
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnMap = [
    { selector: '.btn-pepperoni', state: state.pepperoni },
    { selector: '.btn-mushrooms', state: state.mushrooms },
    { selector: '.btn-green-peppers', state: state.greenPeppers },
    { selector: '.btn-sauce', state: state.whiteSauce },
    { selector: '.btn-crust', state: state.glutenFreeCrust }
  ];

  btnMap.forEach((entry) => {
    if (entry.state) {
      document.querySelector(entry.selector).classList.add('active');
    } else {
      document.querySelector(entry.selector).classList.remove('active');
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const prices = [
    {
      name: ingredients.pepperoni.name,
      costs: ingredients.pepperoni.price,
      state: state.pepperoni
    },
    {
      name: ingredients.mushrooms.name,
      costs: ingredients.mushrooms.price,
      state: state.mushrooms
    },
    {
      name: ingredients.greenPeppers.name,
      costs: ingredients.greenPeppers.price,
      state: state.greenPeppers
    },
    {
      name: ingredients.whiteSauce.name,
      costs: ingredients.whiteSauce.price,
      state: state.whiteSauce
    },
    {
      name: ingredients.glutenFreeCrust.name,
      costs: ingredients.glutenFreeCrust.price,
      state: state.glutenFreeCrust
    }
  ];
  const list = document.querySelector('.panel.price ul');
  list.textContent = '';
  prices
    .filter((p) => p.state)
    .forEach((p) => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`$${p.costs} ${p.name}`));
      list.appendChild(li);
    });

  const totalPrice = prices
    .filter((p) => p.state)
    .map((p) => p.costs)
    .reduce((a, c) => a + c, 0);
  document.querySelector('.panel.price strong').textContent = `$${
    totalPrice + basePrice
  }`;
  // console.log(totalPriceElem);
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
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
