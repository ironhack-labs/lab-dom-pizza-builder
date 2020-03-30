// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
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
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGP => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
    } else {
      oneGP.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneSauce => {
    if (state.whiteSauce) {
      oneSauce.classList.add('sauce-white');
    } else {
      oneSauce.classList.remove('sauce-white');
    }
  });
}

// let changeCrust = document.getElementsByClassName("crust");
// changeCrust[0].classList.remove("crust-gluten-free");
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add("crust-gluten-free")
    } else {
      oneCrust.classList.remove("crust-gluten-free")
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // const pepperoniButtons = document.querySelectorAll('.btn.btn-pepperoni');
  // const firstPepperoniButton = pepperoniButtons[0];
  const firstPepperoniButton = document.querySelector('.btn.btn-pepperoni'); // == pepperoniButtons[0]
  if (state.pepperoni) {
    firstPepperoniButton.classList.add('active')
  }
  else {
    firstPepperoniButton.classList.remove('active')
  }
  const firstMushroomButton = document.querySelector('.btn.btn-mushrooms'); 
  if (state.mushrooms) {
    firstMushroomButton.classList.add('active')
  }
  else {
    firstMushroomButton.classList.remove('active');
  }
  const firstGreenPeppersButton = document.querySelector('.btn.btn-green-peppers'); 
  if (state.greenPeppers) {
    firstGreenPeppersButton.classList.add('active')
  }
  else {
    firstGreenPeppersButton.classList.remove('active');
  }
  const firstWhiteSauceButton = document.querySelector('.btn.btn-sauce'); 
  if (state.whiteSauce) {
    firstWhiteSauceButton.classList.add('active')
  }
  else {
    firstWhiteSauceButton.classList.remove('active');
  }
  const firstGlutenFreeButton = document.querySelector('.btn.btn-crust'); 
  if (state.glutenFreeCrust) {
    firstGlutenFreeButton.classList.add('active')
  }
  else {
    firstGlutenFreeButton.classList.remove('active');
  }
}
  

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
 
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
