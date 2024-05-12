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
  document.querySelectorAll('.mushroom').forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce-white');
  if (state.whiteSauce) {
    sauce.style.visibility = 'visible';
  } else {
    sauce.style.visibility = 'hidden';
  }
};

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free')
  } else {
    crust.classList.remove('crust-gluten-free')
  }
};

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  document.querySelectorAll('.btn').forEach((option) => {
    option.addEventListener('click', () => {
      if (option.classList.contains('active')) {
        option.classList.remove('active');
      } else {
        option.classList.add('active');
      }
    });
  })
};

// Iteration 4: change the HTML of `<aside class="panel price">`
// the price div
// we need to target the lis
// we iterate through the lis and check if the corresponding state is true to show it
// we need to use the inner Text function to change the price panel
// or we iterate through the state and show the li corresponding to it
// otherwise we remove it 
// then we use the first index  turn it into a number adn add it in the strong using inner text

const normalPizzaPrice = 10;

function renderPrice() {
const panel = document.querySelector('.price');
const lis = panel.querySelectorAll('li');
const priceDisplay = document.querySelector('.panel.price strong');
let totalPrice = normalPizzaPrice;


lis.forEach(li => {
  const ingredientText = li.textContent.toLowerCase();
  if (ingredientText.includes('pepperoni')) {
    if (state.pepperoni) {
    totalPrice += 1;
    li.style.visibility = 'visible';
  } else {
    li.style.visibility = 'hidden';
    totalPrice -= 1;
  }}
  else if (ingredientText.includes('mushroom')) {
    if (state.mushrooms) {
    li.style.visibility = 'visible';
    totalPrice += 1;
  } else {
    li.style.visibility = 'hidden';
    totalPrice -= 1;
  }}
  else if (ingredientText.includes('peppers')) {
    if (state.greenPeppers) {
    li.style.visibility = 'visible';
    totalPrice += 1;
  } else {
    li.style.visibility = 'hidden';
    totalPrice -= 1;
  }}
  else if (ingredientText.includes('sauce')) {
    if (state.whiteSauce) {
    li.style.visibility = 'visible';
    totalPrice += 3;
  } else {
    li.style.visibility = 'hidden';
    totalPrice -= 3;
  }}
  else if (ingredientText.includes('crust')) {
    if (state.glutenFreeCrust) {
    li.style.visibility = 'visible';
    totalPrice += 5;
  } else {
    li.style.visibility = 'hidden';
    totalPrice -= 5;
  }};
  priceDisplay.innerText = `$${totalPrice}`;
  });
 };

  

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

// "btn btn-sauce active"
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


renderEverything();