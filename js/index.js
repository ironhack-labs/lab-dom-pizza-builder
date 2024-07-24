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

// map the button class name to the ingredient names
const buttonToIngredient = {
  'btn-pepperoni': 'pepperoni',
  'btn-mushrooms': 'mushrooms',
  'btn-green-peppers': 'greenPeppers',
  'btn-sauce': 'whiteSauce',
  'btn-crust': 'glutenFreeCrust'
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderIngredients('.pep', 'pepperoni');
  renderIngredients('.mushroom', 'mushrooms');
  renderIngredients('.green-pepper', 'greenPeppers');
  renderToggleIngredients('.sauce', 'sauce-white', 'whiteSauce');
  renderToggleIngredients('.crust', 'crust-gluten-free', 'glutenFreeCrust');
  renderButtons();
  renderPrice();
}

function renderIngredients(selector, name){
  document.querySelectorAll(selector).forEach((ingredient) => {
    ingredient.style.visibility = state[name] ? 'visible' : 'hidden';
  });
}

function renderToggleIngredients(selector, className, name) {
  document.querySelector(selector).classList.toggle(className, state[name]);
}

function renderButtons() {
  document.querySelectorAll('.btn').forEach((button) => {
    const ingredient = buttonToIngredient[button.classList[1]];
    button.classList.toggle('active', state[ingredient]);
  });
}


function renderPrice() {
  let totalPrice = basePrice
  for (let ingredient in ingredients){
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient].price;
    }
  }
  document.querySelector('.panel.price strong').textContent = `$${totalPrice}`;
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
