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
  glutenFreeCrust: false,
  active: true
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
  var mushrooms = document.querySelectorAll('.mushroom');
  mushrooms.forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  var greenPeppers = document.querySelectorAll('.green-pepper');
  greenPeppers.forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  var Sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    Sauce.classList.add('sauce-white');
  } else {
    Sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  var Crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    Crust.classList.add('crust-gluten-free');
  } else {
    Crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  var pepBtn = document.querySelector('.btn-pepperoni');
  var mushroomBtn = document.querySelector('.btn-mushrooms');
  var greenPepBtn = document.querySelector('.btn-green-peppers');
  var sauceBtn = document.querySelector('.btn-sauce');
  var crustBtn = document.querySelector('.btn-crust');

  if (state.pepperoni) {
    pepBtn.classList.add('active');
  } else {
    pepBtn.classList.remove('active');
  }

  if (state.mushrooms) {
    mushroomBtn.classList.add('active');
  } else {
    mushroomBtn.classList.remove('active');
  }

  if (state.greenPeppers) {
    greenPepBtn.classList.add('active');
  } else {
    greenPepBtn.classList.remove('active');
  }

  if (state.whiteSauce) {
    sauceBtn.classList.add('active');
  } else {
    sauceBtn.classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    crustBtn.classList.add('active');
  } else {
    crustBtn.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var price1 = document.getElementById('price-pep');
  var price2 = document.getElementById('price-mushroom');
  var price3 = document.getElementById('price-greenpep');
  var price4 = document.getElementById('price-sauce');
  var price5 = document.getElementById('price-crust');

  var totalPrice = document.getElementById('total');

  if (state.pepperoni) {
    price1.style.display = 'block';
    ingredients.pepperoni.price = 1;
  } else {
    price1.style.display = 'none';
    ingredients.pepperoni.price = 0;
  }

  if (state.mushrooms) {
    price2.style.display = 'block';
    ingredients.mushrooms.price = 1;
  } else {
    price2.style.display = 'none';
    ingredients.mushrooms.price = 0;
  }

  if (state.greenPeppers) {
    price3.style.display = 'block';
    ingredients.greenPeppers.price = 1;
  } else {
    price3.style.display = 'none';
    ingredients.greenPeppers.price = 0;
  }

  if (state.whiteSauce) {
    price4.style.display = 'block';
    ingredients.whiteSauce.price = 3;
  } else {
    price4.style.display = 'none';
    ingredients.whiteSauce.price = 0;
  }

  if (state.glutenFreeCrust) {
    price5.style.display = 'block';

    ingredients.glutenFreeCrust.price = 5;
  } else {
    price5.style.display = 'none';
    ingredients.glutenFreeCrust.price = 0;
  }
  total =
    basePrice +
    ingredients.pepperoni.price +
    ingredients.mushrooms.price +
    ingredients.greenPeppers.price +
    ingredients.whiteSauce.price +
    ingredients.glutenFreeCrust.price;

  totalPrice.innerHTML = `$${total}`;
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
