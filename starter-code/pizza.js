// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
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
  document.querySelectorAll('.pep').forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mushrooms) {
    if (state.mushrooms) {
      $mushrooms.style.visibility = 'visible';
    } else {
      $mushrooms.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers) {
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = 'visible';
    } else {
      $greenPeppers.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sauce) {
    if (state.whiteSauce) {
      $sauce.classList.add('sauce-white');
    } else {
      $sauce.classList.remove('sauce-white');
    }
  });
}

// const crustElement = document.querySelector('.crust');

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($glutenFreeCrust) {
    // const crust = document.querySelector('.crust');
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.classList.add('crust-gluten-free');
    } else {
      $glutenFreeCrust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const stateToBtnClass = {
    pepperonni: 'btn-pepperonni',
    mushrooms: 'btn-mushrooms',
    greenPeppers: 'btn-green-peppers',
    whiteSauce: 'btn-sauce',
    glutenFreeCrust: 'btn-crust',
  };
  console.log(state);
  for (let button of Object.keys(state)) {
    if (state[button]) {
      document
        .querySelector(`.${stateToBtnClass[button]}`)
        .classList.add('active');
    } else {
      console.log(document.querySelector(`.${stateToBtnClass[button]}`));
      document
        .querySelector(`.${stateToBtnClass[button]}`)
        .classList.remove('active');
    }
  }
  console.log('------');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceUl = document.querySelector('.price ul');
  priceUl.innerHTML = '';
  let sum = 10;
  for (const ingredient of Object.keys(state)) {
    if (state[ingredient]) {
      sum += ingredients[ingredient].price;
      // newText += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      const li = document.createElement('li');
      li.innerText = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      priceUl.appendChild(li);
    }
    // document.querySelector('.price ul').innerHTML = newText;
  }
  document.querySelector('strong').innerText = `$${sum}`;
}
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
