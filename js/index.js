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
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const wSauce = document.querySelector('.sauce');
    if (state.whiteSauce) {
      wSauce.classList.add('sauce-white');
    } else {
      wSauce.classList.remove('sauce-white');
    }
  };

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustWithoutGluten = document.querySelector('.crust') 
    if (state.glutenFreeCrust) {
      crustWithoutGluten.classList.add('crust-gluten-free');
    } else {
      crustWithoutGluten.classList.remove('crust-gluten-free');
    }
  };


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
const btnPepperoni = document.querySelector('.btn.btn-pepperoni');
const btnMushrooms = document.querySelector('.btn.btn-mushrooms');
const btnGreenPeppers = document.querySelector('.btn.btn-green-peppers');
const btnWhiteSauce = document.querySelector('.btn.btn-sauce');
const btnGlutenFreeCrust = document.querySelector('.btn.btn-crust');

  if (state.pepperoni) {
    btnPepperoni.classList.add('active');
    } else {
    btnPepperoni.classList.remove('active');
  }
  if (state.mushrooms) {
    btnMushrooms.classList.add('active');
  } else {
    btnMushrooms.classList.remove('active');
  }
  if (state.greenPeppers) {
    btnGreenPeppers.classList.add('active');
  } else {
    btnGreenPeppers.classList.remove('active');
  }
  if (state.whiteSauce) {
    btnWhiteSauce.classList.add('active');
  } else {
    btnWhiteSauce.classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    btnGlutenFreeCrust.classList.add('active');
  } else {
    btnGlutenFreeCrust.classList.remove('active');
  }
}
  
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pepPrice = document.querySelector('.panel.price ul li:nth-child(1)')
  const mushPrice = document.querySelector('.panel.price ul li:nth-child(2)')
  const greenPeppPrice = document.querySelector('.panel.price  ul li:nth-child(3)')
  const whiteSaucePrice = document.querySelector('.panel.price ul li:nth-child(4)')
  const glutenFreeCrustPrice = document.querySelector('.panel.price ul li:nth-child(5)')

  let totalPrice = basePrice;

  if (state.pepperoni) {
    pepPrice.style.display = "block";
    totalPrice += ingredients.pepperoni.price;
  } else {
    pepPrice.style.display = "none";
  }
  if (state.mushrooms) {
    mushPrice.style.display = "block";
    totalPrice += ingredients.mushrooms.price;
  } else {
    mushPrice.style.display = "none";
  }
  if (state.greenPeppers) {
    greenPeppPrice.style.display = "block";
    totalPrice += ingredients.greenPeppers.price;
  } else {
    greenPeppPrice.style.display = "none";
  }
  if (state.whiteSauce) {
    whiteSaucePrice.style.display = "block";
    totalPrice += ingredients.whiteSauce.price;
  } else {
    whiteSaucePrice.style.display = "none";
  }
  if (state.glutenFreeCrust) {
    glutenFreeCrustPrice.style.display = "block";
    totalPrice += ingredients.glutenFreeCrust.price;
  } else {
    glutenFreeCrustPrice.style.display = "none";
  }
  document.querySelector('strong').textContent = "$" + totalPrice

  console.log(totalPrice);
}

renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
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
