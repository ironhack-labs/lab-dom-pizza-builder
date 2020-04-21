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
  renderIngredients();
  renderButtons();
  renderPrice();
}

function renderIngredients() {
  renderElements(".pep", "pepperoni");
  // Iteration 1: set the visibility of `<section class="mushroom">`
  renderElements(".mushroom", "mushrooms");
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  renderElements(".green-pepper", "greenPeppers");
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  renderPizzaBase(".sauce", "whiteSauce", "sauce-white");
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  renderPizzaBase(".crust", "glutenFreeCrust", "crust-gluten-free");
}

function renderElements(ingredientClass, ingredientState) {
  document
    .querySelectorAll(ingredientClass)
    .forEach(ingredient =>
      state[ingredientState] ?
      (ingredient.style.visibility = "visible") :
      (ingredient.style.visibility = "hidden")
    );
}

function renderPizzaBase(ingredientClass, ingredient, changeElement) {
  !state[ingredient] ?
    document.querySelector(ingredientClass).classList.remove(changeElement) :
    document.querySelector(ingredientClass).classList.add(changeElement);
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttonState = Object.keys(state);
  document.querySelectorAll(".btn").forEach((button, i) => {
    !state[buttonState[i]] ?
      button.classList.remove("active") :
      button.classList.add("active");
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const ingredientsStates = Object.keys(state);
  document.querySelectorAll(".panel.price ul li").forEach((ingredient, i) => {
    !state[ingredientsStates[i]] ?
      (ingredient.style.display = "none") :
      (ingredient.style.display = "block");
  });
  //extract prices
  const ingredientsArray = Object.values(ingredients);
  const prices = [];
  ingredientsArray.forEach(ingredients => {
    prices.push(ingredients.price);
  });
  //Calculate total cost
  const totalPrice = document.querySelector(".panel.price > strong");
  totalPrice.innerHTML =
    "$" +
    prices.reduce(
      (total, price, i) =>
      state[ingredientsStates[i]] ? total + price : total,
      10
    );
}

renderEverything();

function addNewEvent(selectClass, ingredientState) {
  document.querySelector(selectClass).addEventListener('click', () => {
    ingredientState = !ingredientState;
    renderEverything();
  });
}​
// Iteration 1: Example of a click event listener on `<button class='btn btn-pepperoni'>`
addNewEvent(".btn.btn-pepperoni", state.pepperoni);​
// Iteration 1: Add click event listener on `<button class='btn btn-mushrooms'>`
addNewEvent(".btn.btn-mushrooms", state.mushrooms);​
// Iteration 1: Add click event listener on `<button class='btn btn-green-peppers'>`
addNewEvent(".btn.btn-green-peppers", state.greenPeppers);​
// Iteration 2: Add click event listener on `<button class='btn btn-sauce'>`
addNewEvent(".btn.btn-sauce", state.whiteSauce);​
// Iteration 2: Add click event listener on `<button class='btn btn-crust'>`
addNewEvent(".btn.btn-crust", state.glutenFreeCrust);


/*
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});*/