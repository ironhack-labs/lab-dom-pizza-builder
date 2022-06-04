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
  document.querySelectorAll('.sauce').forEach((whiteSauce) => {
    if (state.whiteSauce) {
      whiteSauce.classList.add('sauce-white');
    } else {
      whiteSauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((glutenFreeCrust) => {
    if (state.glutenFreeCrust) {
      glutenFreeCrust.classList.add('crust-gluten-free');
    } else {
      glutenFreeCrust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class “active” of each `<button class=“btn”>`
  const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni) {
    pepperoniButton.classList.add('active');
  } else {
    pepperoniButton.classList.remove('active');
  }

  const mushroomButton = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    mushroomButton.classList.add('active');
  } else {
    mushroomButton.classList.remove('active');
  }

  const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    greenPeppersButton.classList.add('active');
  } else {
    greenPeppersButton.classList.remove('active');
  }

  const whiteSauceButton = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    whiteSauceButton.classList.add('active');
  } else {
    whiteSauceButton.classList.remove('active');
  }

  const crustButton = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    crustButton.classList.add('active');
  } else {
    crustButton.classList.remove('active');
  }
}

/* // TEST 0.5b : portion with ForEach included
  }) 
  forEach(function (active) {
    active.classList.toggle('active')
  });
}
*/
/* TEST 1.2b : toggles all buttons when one button is clicked (BEST RESULT SO FAR at 04-06 17:50 props to Guillermo)
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(function (active) {
    active.classList.toggle('active')
  });
}

TEST 2.3b : Trying to addEventListener before the code (just found out that the eventListener can be added after the forEach en StackOverflow... )
https://stackoverflow.com/questions/68425366/toggle-active-class-to-buttons-when-clicked
IMPORTANT: Got told that there is a way without EventListener!!! 

function renderButtons() {
  const theButton = document.querySelectorAll('btn')
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  theButton.addEventListener("click", function (event) {
    event.classList.toggle('active')
  })
}

*/

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
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
// const mushroomButton = document.querySelector('.btn.btn-mushrooms')

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
