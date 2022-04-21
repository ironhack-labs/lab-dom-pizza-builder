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
  whiteSauce: true,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
  let pepSelector = document.querySelector('.btn-pepperoni');
  let pepPriceSelector = document.querySelector('#pepPrice');

  renderButtons(pepSelector, state.pepperoni);
  renderPrice(pepPriceSelector, state.pepperoni, 'pep');
  reCalculatePrice();
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
  let mushroomSelector = document.querySelector('.btn-mushrooms');
  let mushroomPriceSelector = document.querySelector('#mushPrice');

  renderButtons(mushroomSelector, state.mushrooms);
  renderPrice(mushroomPriceSelector, state.mushrooms, 'mush');
  reCalculatePrice();
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPep) => {
    if (state.greenPeppers) {
      greenPep.style.visibility = 'visible';
    } else {
      greenPep.style.visibility = 'hidden';
    }
  });
  let greenPeppersSelector = document.querySelector('.btn-green-peppers');
  let greenPeppersPriceSelector = document.querySelector('#gPepPrice');

  renderButtons(greenPeppersSelector, state.greenPeppers);
  renderPrice(greenPeppersPriceSelector, state.greenPeppers, 'gPep');
  reCalculatePrice();
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');

  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
  let sauceSelector = document.querySelector('.btn-white-sauce');
  let saucePriceSelector = document.querySelector('#saucePrice');

  renderButtons(sauceSelector, state.whiteSauce);
  renderPrice(saucePriceSelector, state.whiteSauce, 'sauce');
  reCalculatePrice();
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free');
    } else {
      crust.classList.remove('crust-gluten-free');
    }
  });
  let crustSelector = document.querySelector('.btn-gluten-free-crust');
  let crustPriceSelector = document.querySelector('#glutenPrice');

  renderButtons(crustSelector, state.glutenFreeCrust);
  renderPrice(crustPriceSelector, state.glutenFreeCrust, 'crust');
  reCalculatePrice();
}

function renderButtons(selector, estado) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // console.log(btn);
  // btn.classList.toggle('active');
  if (estado) {
    selector.classList.add('active');
  } else {
    selector.classList.remove('active');
  }
}

function reCalculatePrice() {
  let priceTag = document.querySelector('.price strong').innerText;
  let pricesElemnts = document.querySelectorAll('.price ul li');
  let sumPrice = 10;
  let values = [];
  pricesElemnts.forEach((elem) => {
    if (elem !== null) {
      sumPrice += Number(elem.innerText[1]);
    }
  });
  let stringPrice = '$'.concat(sumPrice);
  document.querySelector('.price strong').innerText = stringPrice;
}

function renderPrice(selector, estado, origin) {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  if (estado) {
    let ulSelector = document.querySelector('.price ul');
    switch (origin) {
      case 'pep':
        ulSelector.innerHTML += `<li id="pepPrice">$1 pepperoni</li>`;
        break;
      case 'mush':
        ulSelector.innerHTML += `<li id="mushPrice">$1 mushrooms</li>`;
        break;
      case 'gPep':
        ulSelector.innerHTML += `<li id="gPepPrice">$1 green peppers</li>`;
        break;
      case 'sauce':
        ulSelector.innerHTML += `<li id="saucePrice">$3 white sauce</li>`;
        break;
      case 'crust':
        ulSelector.innerHTML += `<li id="glutenPrice">$5 gluten-free crust</li>`;
        break;
      default:
        break;
    }
  } else {
    selector.remove();
  }
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

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderMushrooms();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderGreenPeppers();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document
  .querySelector('.btn.btn-white-sauce')
  .addEventListener('click', function () {
    state.whiteSauce = !state.whiteSauce;
    renderWhiteSauce();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document
  .querySelector('.btn.btn-gluten-free-crust')
  .addEventListener('click', function () {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderGlutenFreeCrust();
  });
