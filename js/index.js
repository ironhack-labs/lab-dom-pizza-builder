// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
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
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach(function(mushroom) {
    mushroom.style.visibility = state.mushrooms ? "visible" : "hidden";
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function(greenPepper) {
    greenPepper.style.visibility = state.greenPeppers ? "visible" : "hidden";
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  state.whiteSauce ? document.querySelector(".sauce").classList.add("sauce-white") : document.querySelector(".sauce").classList.remove("sauce-white")
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  state.glutenFreeCrust ? document.querySelector(".crust").classList.add("crust-gluten-free") : document.querySelector(".crust").classList.remove("crust-gluten-free")
}

function renderButton(ingredient,btn) {
  if (state[`${ingredient}`]) {
    document.querySelector(`${btn}`).classList.add("active");
  } else {
    document.querySelector(`${btn}`).classList.remove("active");
  }
} 

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var endPrice = basePrice;
  var list = document.querySelector("aside.panel.price ul");
  list.innerHTML = "";

  for (var ingredientKey in ingredients) {
    if (state[ingredientKey]) {
      endPrice += ingredients[ingredientKey].price;
      list.innerHTML += `<li>$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name.toLowerCase()}</li>`;
    }
  }
  document.querySelector("aside.panel.price strong").innerHTML = "$" + endPrice;
}

renderEverything();

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}

