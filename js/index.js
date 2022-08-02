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
  document.querySelectorAll('.mushroom').forEach((oneShroom) => {
    if (state.mushrooms) {
      oneShroom.style.visibility = 'visible';
    } else {
      oneShroom.style.visibility = 'hidden';
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
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (!state.whiteSauce) {
      oneSauce.classList.add('sauce-white');
    } else {
      oneSauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (!state.glutenFreeCrust) {
      oneCrust.classList.add('crust-gluten-free');
    } else {
      oneCrust.classList.remove('crust-gluten-free');
    }
  });
}
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pep = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    pep.classList.add('active');
  } else {
    pep.classList.remove('active');
  }
  const mush = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    mush.classList.add('active');
  } else {
    mush.classList.remove('active');
  }
  const peppers = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    peppers.classList.add('active');
  } else {
    peppers.classList.remove('active');
  }
  const saucy = document.querySelector('.btn-sauce');
  if (!state.whiteSauce) {
    saucy.classList.add('active');
  } else {
    saucy.classList.remove('active');
  }
  const gluts = document.querySelector('.btn-crust');
  if (!state.glutenFreeCrust) {
    gluts.classList.add('active');
  } else {
    gluts.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const liList = document.querySelector('.price ul');
  liList.innerHTML = '';
  let value = 10;

  if (state.pepperoni) {
    liList.innerHTML += '<li>$1 pepperoni</li>';
    value += 1;
  }
  if (state.greenPeppers) {
    liList.innerHTML += '<li>$1 green peppers</li>';
    value += 1;
  }
  if (state.mushrooms) {
    liList.innerHTML += '<li>$1 mushrooms</li>';
    value += 1;
  }
  if (!state.whiteSauce) {
    liList.innerHTML += '<li>$3 white sauce</li>';
    value += 3;
  }
  if (!state.glutenFreeCrust) {
    liList.innerHTML += '<li>$5 gluten-free crust</li>';
    value += 5;
  }
  const totalPrice = document.querySelector('.price strong');
  totalPrice.innerHTML = `$ ${value}`;
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
