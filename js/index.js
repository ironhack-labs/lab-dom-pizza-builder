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

//Buttons
const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
const mushroomButton = document.querySelector('.btn.btn-mushrooms');
const greenPepperButton = document.querySelector('.btn.btn-green-peppers');
const sauceButton = document.querySelector('.btn.btn-sauce');
const crustButton = document.querySelector('.btn.btn-crust');

//Price elements
const pepperoniPriceElement = document.querySelector('.pepperoni-price');
const mushroomPriceElement = document.querySelector('.mushroom-price');
const greenPepperPriceElement = document.querySelector('.green-pepper-price');
const whiteSaucePriceElement = document.querySelector('.white-sauce-price');
const crustPriceElement = document.querySelector('.gluten-free-price');
const totalPriceElement = document.querySelector('.total-price');
//Prices
let pepperoniPrice = 0;
let mushroomPrice = 0;
let greenPepperPrice = 0;
let whiteSaucePrice = 0;
let crustPrice = 0;
let totalPrice;

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
  console.log('rendering');
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
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperoni) {
    pepperoniButton.classList.add('active');
  } else {
    pepperoniButton.classList.remove('active');
  }
  if (state.mushrooms) {
    mushroomButton.classList.add('active');
  } else {
    mushroomButton.classList.remove('active');
  }
  if (state.greenPeppers) {
    greenPepperButton.classList.add('active');
  } else {
    greenPepperButton.classList.remove('active');
  }
  if (state.whiteSauce) {
    sauceButton.classList.add('active');
  } else {
    sauceButton.classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    crustButton.classList.add('active');
  } else {
    crustButton.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //Show or hide ingredients and set price to either 0 or actual price
  if (state.pepperoni) {
    pepperoniPriceElement.style.display = 'block';
    pepperoniPrice = ingredients.pepperoni.price;
  } else {
    pepperoniPriceElement.style.display = 'none';
    pepperoniPrice = 0;
  }
  if (state.mushrooms) {
    mushroomPriceElement.style.display = 'block';
    mushroomPrice = ingredients.mushrooms.price;
  } else {
    mushroomPriceElement.style.display = 'none';
    mushroomPrice = 0;
  }
  if (state.greenPeppers) {
    greenPepperPriceElement.style.display = 'block';
    greenPepperPrice = ingredients.greenPeppers.price;
  } else {
    greenPepperPriceElement.style.display = 'none';
    greenPepperPrice = 0;
  }
  if (state.whiteSauce) {
    whiteSaucePriceElement.style.display = 'block';
    whiteSaucePrice = ingredients.whiteSauce.price;
  } else {
    whiteSaucePriceElement.style.display = 'none';
    whiteSaucePrice = 0;
  }
  if (state.glutenFreeCrust) {
    crustPriceElement.style.display = 'block';
    crustPrice = ingredients.glutenFreeCrust.price;
  } else {
    crustPriceElement.style.display = 'none';
    crustPrice = 0;
  }
  totalPrice =
    basePrice +
    pepperoniPrice +
    mushroomPrice +
    greenPepperPrice +
    whiteSaucePrice +
    crustPrice;

  totalPriceElement.innerText = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

pepperoniButton.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

mushroomButton.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
greenPepperButton.addEventListener('click', () => {
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
