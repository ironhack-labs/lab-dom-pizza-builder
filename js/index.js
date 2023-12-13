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
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  //green-pepper
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
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.style.visibility = 'visible';
    } else {
      crust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // *** This looks very redundand... ***
  let pepperButt = document.getElementsByClassName('btn-pepperoni');
  let mushroomButt = document.getElementsByClassName('btn-mushrooms');
  let greenButt = document.getElementsByClassName('btn-green-peppers');
  let sauceButt = document.getElementsByClassName('btn-sauce');
  let glutenButt = document.getElementsByClassName('btn-crust');
  if (state.pepperoni) pepperButt[0].classList.add('active');
  if (!state.pepperoni) pepperButt[0].classList.remove('active');
  if (state.mushrooms) mushroomButt[0].classList.add('active');
  if (!state.mushrooms) mushroomButt[0].classList.remove('active');
  if (state.greenPeppers) greenButt[0].classList.add('active');
  if (!state.greenPeppers) greenButt[0].classList.remove('active');
  if (state.whiteSauce) sauceButt[0].classList.add('active');
  if (!state.whiteSauce) sauceButt[0].classList.remove('active');
  if (state.glutenFreeCrust) glutenButt[0].classList.add('active');
  if (!state.glutenFreeCrust) glutenButt[0].classList.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // *** This looks very redundand... ***
  let totalPrice = basePrice;
  pepperPriceElement = document.getElementById('pepperoni-price');
  mushroomsPriceElement = document.getElementById('mushrooms-price');
  greenPepperPriceElement = document.getElementById('green-peppers-price');
  whiteSaucePriceElement = document.getElementById('white-sauce-price');
  crustPriceElement = document.getElementById('gluten-free-curst-price');
  if (state.pepperoni) {
    pepperPriceElement.style.display = 'block';
    totalPrice += ingredients.pepperoni.price;
  } else {
    pepperPriceElement.style.display = 'none';
  }
  if (state.mushrooms) {
    mushroomsPriceElement.style.display = 'block';
    totalPrice += ingredients.mushrooms.price;
  } else {
    mushroomsPriceElement.style.display = 'none';
  }
  if (state.greenPeppers) {
    greenPepperPriceElement.style.display = 'block';
    totalPrice += ingredients.greenPeppers.price;
  } else {
    greenPepperPriceElement.style.display = 'none';
  }
  if (state.whiteSauce) {
    whiteSaucePriceElement.style.display = 'block';
    totalPrice += ingredients.whiteSauce.price;
  } else {
    whiteSaucePriceElement.style.display = 'none';
  }
  if (state.glutenFreeCrust) {
    crustPriceElement.style.display = 'block';
    totalPrice += ingredients.glutenFreeCrust.price;
  } else {
    crustPriceElement.style.display = 'none';
  }
  document.getElementById("total-price").innerHTML=totalPrice;
  console.log (totalPrice);
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
