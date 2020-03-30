// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
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
const renderEverything = () => {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
};
const toggleVisibility = (style, state) =>
  state ? (style.visibility = "visible") : (style.visibility = "hidden");

const renderPepperoni = () =>
  document.querySelectorAll(".pep").forEach(onePep => {
    toggleVisibility(onePep.style, state.pepperoni);
  });

const renderMushrooms = () =>
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document
    .querySelectorAll(".mushroom")
    .forEach(mushroom => toggleVisibility(mushroom.style, state.mushrooms));

const renderGreenPeppers = () =>
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document
    .querySelectorAll(".green-pepper")
    .forEach(greenPepper =>
      toggleVisibility(greenPepper.style, state.greenPeppers)
    );

const renderWhiteSauce = () =>
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document
    .querySelectorAll(".sauce")
    .forEach(sauce => sauce.classList.toggle("sauce-white", state.whiteSauce));

const renderGlutenFreeCrust = () =>
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document
    .querySelectorAll(".crust")
    .forEach(glutenFreeCrust =>
      glutenFreeCrust.classList.toggle(
        "crust-gluten-free",
        state.glutenFreeCrust
      )
    );

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
//Method 1: //Method 1 : using the state Object
const toggleByClassName = (className, state) =>
  document
    .getElementsByClassName(className)[0]
    .classList.toggle("active", state);

const renderButtons1 = () => {
  toggleByClassName("btn-pepperoni", state.pepperoni);
  toggleByClassName("btn-mushrooms", state.mushrooms);
  toggleByClassName("btn-green-peppers", state.greenPeppers);
  toggleByClassName("btn-sauce", state.whiteSauce);
  toggleByClassName("btn-crust", state.glutenFreeCrust);
};
//Method 2 : using the combined state/className Object
const ClassNameByStatus = {
  pepperoni: "pepperoni",
  mushrooms: "mushrooms",
  greenPeppers: "green-peppers",
  whiteSauce: "sauce",
  glutenFreeCrust: "crust"
};
const toggleByState = btnElement => {
  Object.keys(state).forEach(stateKey => {
    if (btnElement.className.includes(ClassNameByStatus[stateKey]))
      btnElement.classList.toggle("active", state[stateKey]);
  });
};

const renderButtons = () => {
  document
    .querySelectorAll(".panel.controls button")
    .forEach(button => toggleByState(button));
};

const createIngredientElement = ingredient => {
  const newIngredient = document.createElement("li");
  newIngredient.innerHTML = `$${ingredient.price} ${ingredient.name}`;
  return newIngredient;
};

const renderPrice = () => {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pizzaPrice = basePrice;
  const finalPrice = document.querySelector(".panel.price strong");
  const pricePanel = document.querySelector(".panel.price ul");
  pricePanel.innerHTML = "";

  const addIngredient = ingredient =>
    pricePanel.appendChild(createIngredientElement(ingredient));

  const createIngredientAndAddPrice = (ingredient, state) => {
    if (state) {
      addIngredient(ingredient);
      pizzaPrice += ingredient.price;
    }
  };

  createIngredientAndAddPrice(ingredients.pepperoni, state.pepperoni);
  createIngredientAndAddPrice(ingredients.mushrooms, state.mushrooms);
  createIngredientAndAddPrice(ingredients.greenPeppers, state.greenPeppers);
  createIngredientAndAddPrice(ingredients.whiteSauce, state.whiteSauce);
  createIngredientAndAddPrice(
    ingredients.glutenFreeCrust,
    state.glutenFreeCrust
  );
  finalPrice.innerHTML = "$" + pizzaPrice;
};

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn-pepperoni").onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn-mushrooms").onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
