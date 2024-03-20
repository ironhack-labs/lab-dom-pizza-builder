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
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.setAttribute('class', 'sauce sauce-white');
  } else {
    sauce.setAttribute('class', 'sauce');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.setAttribute('class', 'crust crust-gluten-free');
  } else {
    crust.setAttribute('class', 'crust');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnPepper = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    btnPepper.setAttribute('class', 'btn btn-pepperoni active');
  } else {
    btnPepper.setAttribute('class', 'btn btn-pepperoni');
  }

  const btnMushrooms = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    btnMushrooms.setAttribute('class', 'btn btn-mushrooms active');
  } else {
    btnMushrooms.setAttribute('class', 'btn btn-mushrooms');
  }

  const btnPeppers = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    btnPeppers.setAttribute('class', 'btn btn-green-peppers active');
  } else {
    btnPeppers.setAttribute('class', 'btn btn-green-peppers');
  }

  const btnSauce = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    btnSauce.setAttribute('class', 'btn btn-sauce active');
  } else {
    btnSauce.setAttribute('class', 'btn btn-sauce');
  }

  const btnCrust = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    btnCrust.setAttribute('class', 'btn btn-crust active');
  } else {
    btnCrust.setAttribute('class', 'btn btn-crust');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceList = document.querySelector('aside').querySelectorAll('li');

  let totalPrice = 10;

  if (state.pepperoni) {
    priceList[0].style.display = 'block';
    totalPrice += 1;
  } else {
    priceList[0].style.display = 'none';
  }

  if (state.mushrooms) {
    priceList[1].style.display = 'block';
    totalPrice += 1;
  } else {
    priceList[1].style.display = 'none';
  }

  if (state.greenPeppers) {
    priceList[2].style.display = 'block';
    totalPrice += 1;
  } else {
    priceList[2].style.display = 'none';
  }

  if (state.whiteSauce) {
    priceList[3].style.display = 'block';
    totalPrice += 3;
  } else {
    priceList[3].style.display = 'none';
  }

  if (state.glutenFreeCrust) {
    priceList[4].style.display = 'block';
    totalPrice += 5;
  } else {
    priceList[4].style.display = 'none';
  }

  const price = document.querySelector('aside').querySelector('strong');
  price.innerHTML = '$' + totalPrice;
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
