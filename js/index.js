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
  const sauceNode = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceNode.classList.add('sauce-white');
  } else {
    sauceNode.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustNode = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustNode.classList.add('crust-gluten-free');
  } else {
    crustNode.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  for (ingredient in state) {
    // console.log(ingredient, state[ingredient]);
    let buttonNode;
    switch (ingredient) {
      case 'pepperoni':
        buttonNode = document.querySelector('.btn-pepperoni');
        break;
      case 'mushrooms':
        buttonNode = document.querySelector('.btn-mushrooms');
        break;
      case 'greenPeppers':
        buttonNode = document.querySelector('.btn-green-peppers');
        break;
      case 'whiteSauce':
        buttonNode = document.querySelector('.btn-sauce');
        break;
      case 'glutenFreeCrust':
        buttonNode = document.querySelector('.btn-crust');
        break;
      default:
        break;
    }
    if (state[ingredient]) {
      buttonNode.classList.add('active');
    } else {
      buttonNode.classList.remove('active');
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = 10;
  const ingredientListNode = document.querySelector('.panel.price ul');
  ingredientListNode.innerHTML = '';
  for (ingredient in state) {
    let increment = 0;
    switch (ingredient) {
      case 'whiteSauce':
        increment = 3;
        break;
      case 'glutenFreeCrust':
        increment = 5;
        break;
      default:
        increment = 1;
    }
    
    if (state[ingredient]) {
      price += increment;
      ingredientListNode.innerHTML += `<li>$${increment} ${ingredient}`;
    }
  }
  document.querySelector('.panel.price strong').innerText = '$' + price;
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
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
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
