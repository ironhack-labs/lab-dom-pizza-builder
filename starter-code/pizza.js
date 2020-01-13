// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1, active: true },
  mushrooms: { name: "Mushrooms", price: 1, active: true },
  greenPeppers: { name: "Green Peppers", price: 1, active: true },
  whiteSauce: { name: "White sauce", price: 3, active: false },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5, active: false }
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(el => {
    el.style.visibility = ingredients.pepperonni.active ? "visible" : "hidden";
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(el => {
    el.style.visibility = ingredients.mushrooms.active ? "visible" : "hidden";
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(el => {
    el.style.visibility = ingredients.greenPeppers.active ? "visible" : "hidden";
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector(".sauce");
  if (ingredients.whiteSauce.active) sauce.classList.add("sauce-white");
  else sauce.classList.remove("sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const sauce = document.querySelector(".crust");
  if (ingredients.glutenFreeCrust.active) sauce.classList.add("crust-gluten-free");
  else sauce.classList.remove("crust-gluten-free");
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  document.querySelectorAll(".btn").forEach(e => {
    e.classList.remove("active");
  });

  // More clean code but requires a change in the markup: I've added a specific id to all buttons to include the ingredient object key names
  for (const ingredient in ingredients) {
    if (ingredients[ingredient].active) document.querySelector("#btn-" + ingredient).classList.add("active");
  }

  // Repetitive but not change to the markup
  // if (ingredients.pepperonni.active) document.querySelector(".btn.btn-pepperonni").classList.add("active");
  // if (ingredients.mushrooms.active) document.querySelector(".btn.btn-mushrooms").classList.add("active");
  // if (ingredients.greenPeppers.active) document.querySelector(".btn.btn-green-peppers").classList.add("active");
  // if (ingredients.whiteSauce.active) document.querySelector(".btn.btn-sauce").classList.add("active");
  // if (ingredients.glutenFreeCrust.active) document.querySelector(".btn.btn-crust").classList.add("active");
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">
  // Requires a change in the markup: I've added ids to all li elements to include the ingredient object key names
  let totalPrice = 10;
  for (const ingredient in ingredients) {
    const ingredientPriceEl = document.getElementById(ingredient + "-price");
    ingredientPriceEl.style.display = ingredients[ingredient].active ? "block" : "none";
    totalPrice += ingredients[ingredient].active ? ingredients[ingredient].price : 0;
  }
  document.querySelector(".panel.price strong").textContent = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  ingredients.pepperonni.active = !ingredients.pepperonni.active;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").onclick = e => {
  ingredients.mushrooms.active = !ingredients.mushrooms.active;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = e => {
  ingredients.greenPeppers.active = !ingredients.greenPeppers.active;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").onclick = e => {
  ingredients.whiteSauce.active = !ingredients.whiteSauce.active;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = e => {
  ingredients.glutenFreeCrust.active = !ingredients.glutenFreeCrust.active;
  renderEverything();
};
