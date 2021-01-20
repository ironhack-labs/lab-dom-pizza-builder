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
  whiteSauce: true,
  glutenFreeCrust: true
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
  document.querySelectorAll('.mushroom').forEach(everyMushroom => {
    if (state.mushrooms) {
      everyMushroom.style.visibility = 'visible';
    } else {
      everyMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(everyGreenPepper => {
    if (state.greenPeppers) {
      everyGreenPepper.style.visibility = 'visible';
    } else {
      everyGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    const whiteSauce = document.querySelector('.sauce')
    if (state.whiteSauce) {
      whiteSauce.classList.add('sauce-white');
    } else {
      whiteSauce.classList.remove('sauce-white');
    }
}
 
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const freeGluten = document.querySelector('.crust-gluten-free')
    if (state.glutenFreeCrust) {
      freeGluten.classList.add('crust');
    } else {
      freeGluten.classList.remove('crust')
    }
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttonPepperoni = document.querySelector('.btn-pepperoni')
  if (state.pepperoni) {
    buttonPepperoni.classList.add('active')
  } else {
    buttonPepperoni.classList.remove('active')
  }
  const buttonMushroom = document.querySelector('.btn-mushrooms')
  if (state.Mushrooms) {
    buttonMushroom.classList.add('active')
  } else {
    buttonMushroom.classList.remove('active')
  }
  const buttonGreePepper = document.querySelector('.btn-green-peppers')
  if (state.greenPeppers) {
    buttonGreePepper.classList.add('active')
  } else {
    buttonGreePepper.classList.remove('active')
  }
  const buttonWhiteSauce = document.querySelector('.btn-sauce')
  if (state.whiteSauce) {
    buttonWhiteSauce.classList.add('active')
  } else {
    buttonWhiteSauce.classList.remove('active')
  }
  const buttonFreeGluten = document.querySelector('.btn-crust')
  if (state.glutenFreeCrust) {
    buttonFreeGluten.classList.add('active')
  } else {
    buttonFreeGluten.classList.remove('active')
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
})

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
})

