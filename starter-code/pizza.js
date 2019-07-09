// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(($pep) => {
    if (state.pepperonni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(($mushroom) => {
    if (state.mushrooms) {
      $mushroom.style.visibility = 'visible';
    } else {
      $mushroom.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(($greenpepper) => {
    if (state.greenPeppers) {
      $greenpepper.style.visibility = 'visible';
    } else {
      $greenpepper.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  const optionWhiteSauce = document.querySelectorAll('.sauce');
  optionWhiteSauce.forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white');
    } else {
      sauce.classList.remove('sauce-white');
    }
  });

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  const optionGlutenCrust = document.querySelectorAll('.crust');
  optionGlutenCrust.forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free');
    } else {
      crust.classList.remove('crust-gluten-free');
    }
  });
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  const changePepperonni = document.querySelector('.btn.btn-pepperonni');
  const changeMushrooms = document.querySelector('.btn.btn-mushrooms');
  const changeGreenPeppers = document.querySelector('.btn.btn-green-peppers');
  const changeSauce = document.querySelector('.btn.btn-sauce');
  const changeCrust = document.querySelector('.btn.btn-crust');

  !state.pepperonni ? changePepperonni.classList.remove('active') : changePepperonni.classList.add('active');
  !state.mushrooms ? changeMushrooms.classList.remove('active') : changeMushrooms.classList.add('active');
  !state.greenPeppers ? changeGreenPeppers.classList.remove('active') : changeGreenPeppers.classList.add('active');
  !state.whiteSauce ? changeSauce.classList.remove('active') : changeSauce.classList.add('active');
  !state.glutenFreeCrust ? changeCrust.classList.remove('active') : changeCrust.classList.add('active');
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  let total = basePrice;
  const itens = document.querySelector('.ingredients');
  itens.innerHTML = '';


  if (state.pepperonni) {
    itens.innerHTML += `<li>$${ingredients.pepperonni.price} pepperonni</li>`;
    total += ingredients.pepperonni.price;
  }
  if (state.mushrooms) {
    itens.innerHTML += `<li>$${ingredients.mushrooms.price} mushrooms</li>`;
    total += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    itens.innerHTML += `<li>$${ingredients.greenPeppers.price} green peppers</li>`;
    total += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    itens.innerHTML += `<li>$${ingredients.whiteSauce.price} white sauce</li>`;
    total += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    itens.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} gluten-free crust</li>`;
    total += ingredients.glutenFreeCrust.price;
  }

  const pizzaPrice = document.querySelector('.panel.price strong');
  pizzaPrice.innerHTML = `$${total}`;
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
