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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((oneWhiteSauce) => {
    if (state.whiteSauce) {
      oneWhiteSauce.style.visibility = 'visible';
    } else {
      oneWhiteSauce.style.visibility = 'hidden';
    }
  });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((oneGlutenFreeSauce) => {
    if (state.glutenFreeCrust) {
      oneGlutenFreeSauce.style.visibility = 'visible';
    } else {
      oneGlutenFreeSauce.style.visibility = 'hidden';
    }
  });
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Get all buttons on the page
  const buttons = document.querySelectorAll("button");

  // Loop through each button
  buttons.forEach(function(button) {
    // Check if button should have the "active" class
    if (button.dataset.active) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}


function renderPrice() {
  let totalPrice = basePrice;

  const ingredientsList = document.querySelector('.panel.price ul');
  ingredientsList.innerHTML = '';

  for (let ingredient in state) {
    if (state[ingredient]) {
      const unit = document.createElement('li');
      unit.innerText = `${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      ingredientsList.append(unit);
      totalPrice += ingredients[ingredient].price;
    }
  }

  const price = document.querySelector('.panel.price strong');
  price.textContent = `$ ${totalPrice}`;
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
