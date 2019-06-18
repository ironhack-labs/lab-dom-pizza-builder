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
  mushrooms: true,
  greenPeppers: true,
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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(($mushroom) => {
    if (state.mushrooms) {
      $mushroom.style.visibility = 'visible';
    } else {
      $mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(($green) => {
    if (state.greenPeppers) {
      $green.style.visibility = 'visible';
    } else {
      $green.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(($sauce) => {
    if (state.whiteSauce) {
      $sauce.classList.add('sauce-white');
    } else {
      $sauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(($crust) => {
    if (state.glutenFreeCrust) {
      $crust.classList.add('crust-gluten-free');
    } else {
      $crust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const elementCrust = document.getElementsByClassName('btn-crust');
  if (state.glutenFreeCrust) {
    elementCrust[0].setAttribute('class', 'btn btn-crust active');
  } else elementCrust[0].setAttribute('class', 'btn btn-crust');

  const elementSauce = document.getElementsByClassName('btn-sauce');
  if (state.whiteSauce) {
    elementSauce[0].setAttribute('class', 'btn btn-sauce active');
  } else elementSauce[0].setAttribute('class', 'btn btn-sauce');

  const elementPeppers = document.getElementsByClassName('btn-green-peppers');
  if (state.greenPeppers) {
    elementPeppers[0].setAttribute('class', 'btn btn-green-peppers active');
  } else elementPeppers[0].setAttribute('class', 'btn btn-green-peppers');

  const elementMush = document.getElementsByClassName('btn-mushrooms');
  if (state.mushrooms) {
    elementMush[0].setAttribute('class', 'btn btn-mushrooms active');
  } else elementMush[0].setAttribute('class', 'btn btn-mushrooms');

  const elementPeppe = document.getElementsByClassName('btn-pepperonni');
  if (state.pepperonni) {
    elementPeppe[0].setAttribute('class', 'btn btn-pepperonni active');
  } else elementPeppe[0].setAttribute('class', 'btn btn-pepperonni');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pricePanel = document.querySelector('.panel.price');
  const priceUl = pricePanel.children[2];
  const priceTotal = pricePanel.children[3];

  let sum = basePrice;
  priceUl.innerHTML = '';

  for (const key in state) {
    if (state[key]) {
      const newLi = document.createElement('li');
      newLi.innerText = `$${ingredients[key].price} ${ingredients[key].name}`;
      priceUl.appendChild(newLi);

      sum += ingredients[key].price;
      priceTotal.innerHTML = `$${sum}`;
    } else {
      priceTotal.innerHTML = `$${sum}`;
    }
  }
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
