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
  document.querySelectorAll('.pep').forEach(function (onePep) {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function (oneMushroom) {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function (oneGreenPepper) {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  } 
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // I can write a bunch of if/else statements, truth is still in the state object
  document.querySelectorAll('.btn').forEach(function (oneButton) {
    // find out, which button we are talking about
    if (oneButton.classList.contains('btn-pepperoni')) {
      if(state.pepperoni){
        oneButton.classList.add('active')
      } else {
        oneButton.classList.remove('active')
      }
      }
    if (oneButton.classList.contains('btn-mushrooms')) {
      if(state.mushrooms) {
        oneButton.classList.add('active')
      } else {
        oneButton.classList.remove('active')
      }
    }
    if (oneButton.classList.contains('btn-green-peppers')) {
      if(state.greenPeppers) {
        oneButton.classList.add('active')
      } else {
        oneButton.classList.remove('active')
      }
    }
    if (oneButton.classList.contains('btn-sauce')) {
      if(state.whiteSauce) {
        oneButton.classList.add('active')
      } else {
        oneButton.classList.remove('active')
      }
    }
    if (oneButton.classList.contains('btn-crust')) {
      if(state.glutenFreeCrust) {
        oneButton.classList.add('active')
      } else {
        oneButton.classList.remove('active')
      }
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click',function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click',function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});