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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //   // Variable
  const total = document.getElementById('total');
  const pep = document.getElementById('pep');
  const mush = document.getElementById('mush');
  const pepper = document.getElementById('pepper');
  const sauce = document.getElementById('sauce');
  const crust = document.getElementById('crust');

  let finalPrice = 10;
  // For each element, we check if it's true or not
  // If it's true, we showed it and we add it to the final price
  //   for (const key in state) {
  //     state;
  //   }

  if (state.pepperoni) {
    pep.style.display = 'block';
    finalPrice += 1;
  } else {
    pep.style.display = 'none';
  }

  if (state.mushrooms) {
    mush.style.display = 'block';
    finalPrice += 1;
  } else {
    mush.style.display = 'none';
  }

  if (state.greenPeppers) {
    pepper.style.display = 'block';
    finalPrice += 1;
  } else {
    pepper.style.display = 'none';
  }

  if (state.whiteSauce) {
    sauce.style.display = 'block';
    finalPrice += 3;
  } else {
    sauce.style.display = 'none';
  }

  if (state.glutenFreeCrust) {
    crust.style.display = 'block';
    finalPrice += 5;
  } else {
    crust.style.display = 'none';
  }

  total.innerText = '$' + finalPrice;
}

renderEverything();

// EVENT LISTENERS

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function (event) {
    state.pepperoni = !state.pepperoni;
    // If we are showing the pepperoni, then the button should say Remove
    if (state.pepperoni) {
      event.target.innerText = 'Remove pepperoni';
      event.target.classList.add('active');
    } else {
      event.target.innerText = 'Add pepperoni';
      event.target.classList.remove('active');
    }
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function (event) {
    state.mushrooms = !state.mushrooms;
    if (state.mushrooms) {
      event.target.innerText = 'Remove mushrooms';
      event.target.classList.add('active');
    } else {
      event.target.innerText = 'Add mushrooms';
      event.target.classList.remove('active');
    }
    // true -> false
    // false -> true
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function (event) {
    state.greenPeppers = !state.greenPeppers;
    if (state.greenPeppers) {
      event.target.innerText = 'Remove green peppers';
      event.target.classList.add('active');
    } else {
      event.target.innerText = 'Add green peppers';
      event.target.classList.remove('active');
    }
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document
  .querySelector('.btn.btn-sauce')
  .addEventListener('click', function (event) {
    state.whiteSauce = !state.whiteSauce;
    if (state.whiteSauce) {
      event.target.innerText = 'Remove white sauce';
      event.target.classList.add('active');
    } else {
      event.target.innerText = 'Add white sauce';
      event.target.classList.remove('active');
    }
    document.querySelector('.sauce').classList.toggle('sauce-white');
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document
  .querySelector('.btn.btn-crust')
  .addEventListener('click', function (event) {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    if (state.glutenFreeCrust) {
      event.target.innerText = 'Remove gluten-free crust';
      event.target.classList.add('active');
    } else {
      event.target.innerText = 'Add gluten-free crust';
      event.target.classList.remove('active');
    }
    document.querySelector('.crust').classList.toggle('crust-gluten-free');
    renderEverything();
  });
