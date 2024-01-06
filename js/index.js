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
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauceElement) => {
    sauceElement.classList.toggle('sauce-white', state.whiteSauce);
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crustElement) => {
    crustElement.classList.toggle('crust-gluten-free', state.glutenFreeCrust);
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepperoniButton = document.querySelector('.btn-pepperoni');
  pepperoniButton.classList.toggle('active', state.pepperoni);
  const mushroomButton = document.querySelector('.btn-mushrooms');
  mushroomButton.classList.toggle('active', state.mushrooms);
  const greenPeppers = document.querySelector('.btn-green-peppers');
  greenPeppers.classList.toggle('active', state.greenPeppers);
  const sauceButton = document.querySelector('.btn-sauce');
  sauceButton.classList.toggle('active', state.whiteSauce);
  const crustButton = document.querySelector('.btn-crust');
  crustButton.classList.toggle('active', state.glutenFreeCrust);
}

function renderPrice() {
  let finalPrice = basePrice;
  const pricePanel = document.querySelector('.panel.price ul');
  pricePanel.innerHTML = '';
  // Iteration 4: change the HTML of `<aside class="panel price">`
  for (let ingredient in state) {
    if (state[ingredient]) {
      const li = document.createElement('li');
      const ingredientName = ingredients[ingredient].name.toLowerCase();
      const ingredientPrice = ingredients[ingredient].price;
      const textNode = document.createTextNode(
        `$${ingredientPrice} ${ingredientName}`
      );
      li.appendChild(textNode);
      pricePanel.appendChild(li);
      finalPrice += ingredientPrice;
    }
  }
  const priceElement = document.querySelector('.panel.price strong');
  priceElement.innerHTML = `$${finalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
const pepperoniButton = document.querySelector('.btn-pepperoni');
pepperoniButton.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const mushroomButton = document.querySelector('.btn-mushrooms');
mushroomButton.addEventListener('click', (e) => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
const greenPeppers = document.querySelector('.btn-green-peppers');
greenPeppers.addEventListener('click', (e) => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const sauceButton = document.querySelector('.btn-sauce');
sauceButton.addEventListener('click', (e) => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
const crustButton = document.querySelector('.btn-crust');
crustButton.addEventListener('click', (e) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
