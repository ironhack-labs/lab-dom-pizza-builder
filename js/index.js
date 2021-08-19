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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepperoni = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    if (!pepperoni.classList.contains('active')) {
      pepperoni.classList.add('active');
    }
  } else {
    pepperoni.classList.remove('active');
  }

  const mushroom = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    if (!mushroom.classList.contains('active')) {
      mushroom.classList.add('active');
    }
  } else {
    mushroom.classList.remove('active');
  }

  const greenPeppers = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    if (!greenPeppers.classList.contains('active')) {
      greenPeppers.classList.add('active');
    }
  } else {
    greenPeppers.classList.remove('active');
  }

  const sauce = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    if (!sauce.classList.contains('active')) {
      sauce.classList.add('active');
    }
  } else {
    sauce.classList.remove('active');
  }

  const curst = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    if (!curst.classList.contains('active')) {
      curst.classList.add('active');
    }
  } else {
    curst.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
