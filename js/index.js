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

// For iteration 3 & 4
const ingredientClass = {
  pepperoni: 'btn-pepperoni',
  mushrooms: 'btn-mushrooms',
  greenPeppers: 'btn-green-peppers',
  whiteSauce: 'btn-sauce',
  glutenFreeCrust: 'btn-crust'
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
  console.log(state);
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
  const mySauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    mySauce.classList.add('sauce-white');
  } else {
    mySauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const myCrust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    myCrust.classList.add('crust-gluten-free');
  } else {
    myCrust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  const allBtn = document.querySelectorAll('.btn');

  allBtn.forEach((btn) => {
    for (let ingredient in ingredientClass) {
      const myClass = ingredientClass[ingredient];
      if (btn.classList.contains(myClass)) {
        console.log(state[ingredient], ingredient);

        if (state[ingredient]) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const totalPriceContainer = document.querySelector('.price strong');
  let totalPriceValue = 10;

  const myUl = document.querySelector('.price ul');
  const allBtn = document.querySelectorAll('.btn');

  // Iterate over all buttons
  allBtn.forEach((btn, index) => {
    // Iterate over object to obtain class
    for (let item in ingredientClass) {
      if (btn.classList.contains(ingredientClass[item])) {
        if (btn.classList.contains('active')) {
          // Update total price
          totalPriceValue += ingredients[item].price;

          // Update list
          myUl.querySelector(':nth-child(' + (index + 1) + ')').style.display =
            'block';
        } else {
          myUl.querySelector(':nth-child(' + (index + 1) + ')').style.display =
            'none';
        }
      }
    }
  });
  totalPriceContainer.textContent = `$${totalPriceValue}`;
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
