// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: "pepperoni",
    price: 1
  },
  mushrooms: {
    name: "Mushrooms",
    price: 1
  },
  greenPeppers: {
    name: "Green Peppers",
    price: 1
  },
  whiteSauce: {
    name: "White sauce",
    price: 3
  },
  glutenFreeCrust: {
    name: "Gluten-free crust",
    price: 5
  }
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

function renderIngredients(selectClass, stateName) {
  document
    .querySelectorAll(selectClass)
    .forEach(
      oneIngredient =>
        (oneIngredient.style.visibility = stateName ? "visible" : "hidden")
    );
}

function renderPepperoni() {
  renderIngredients(".pep", state.pepperoni);
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class='mushroom'>`
  renderIngredients(".mushroom", state.mushrooms);
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class='green-pepper'>`
  renderIngredients(".green-pepper", state.greenPeppers);
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class 'sauce-white' of `<section class='sauce'>`
  renderIngredients(".sauce", state.whiteSauce);
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class 'crust-gluten-free' of `<section class='crust'>`
  renderIngredients(".crust-gluten-free", state.glutenFreeCrust);
}

function renderButtons() {
  // Iteration 3: add/remove the class 'active' of each `<button class='btn'>`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class='panel price'>`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class='btn btn-pepperoni'>`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class='btn btn-mushrooms'>`
document.querySelector(".btn.btn-mushroom").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class='btn btn-green-peppers'>`
document.querySelector(".btn.btn-green-pepper").addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
});

// Iteration 2: Add click event listener on `<button class='btn btn-sauce'>`
document.querySelector(".btn.btn-btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class='btn btn-crust'>`
document.querySelector(".btn.btn-btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});