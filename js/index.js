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
  let mushrooms = [...document.getElementsByClassName("mushroom")];
  mushrooms.forEach(m => {
    // console.log(m);
    m.style.visibility = state.mushrooms ? 'visible' : "hidden"; 
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  let greenPeppers = [...document.getElementsByClassName("green-pepper")];
  greenPeppers.forEach(p => {
    // console.log(m);
    p.style.visibility = state.greenPeppers ? 'visible' : "hidden"; 
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceElement = document.querySelector("section.sauce");
    // console.log(sauceElement);
    if(state.whiteSauce) {
    sauceElement.classList.add("sauce-white");
  } else {
    sauceElement.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustElement = document.querySelector("section.crust");
    console.log(crustElement);
    if(state.glutenFreeCrust) {
    crustElement.classList.add("crust-gluten-free");
  } else {
    crustElement.classList.remove("crust-gluten-free");
  }
}

function updateButton(selector, state) {
  if(state) {
    document.querySelector('button'+selector).classList.add("active");
  } else {
    document.querySelector('button'+selector).classList.remove("active");

  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  updateButton('.btn-pepperoni', state.pepperoni);
  updateButton('.btn-mushrooms', state.mushrooms);
  updateButton('.btn-green-peppers', state.greenPeppers);
  updateButton('.btn-sauce', state.whiteSauce);
  updateButton('.btn-crust', state.glutenFreeCrust);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = 10
    + ingredients.pepperoni.price * state.pepperoni
    + ingredients.mushrooms.price * state.mushrooms
    + ingredients.greenPeppers.price * state.greenPeppers
    + ingredients.whiteSauce.price * state.whiteSauce
    + ingredients.glutenFreeCrust.price * state.glutenFreeCrust;

  console.log("price", price);
  let priceElement = document.querySelector("aside.price strong");
  priceElement.innerHTML = `${price}$`

  document.querySelector("aside.price li:nth-of-type(1)").innerHTML = `$${ingredients.pepperoni.price * state.pepperoni} pepperoni`;
  document.querySelector("aside.price li:nth-of-type(2)").innerHTML = `$${ingredients.mushrooms.price * state.mushrooms} mushrooms`;
  document.querySelector("aside.price li:nth-of-type(3)").innerHTML = `$${ingredients.greenPeppers.price * state.greenPeppers} green peppers`;
  document.querySelector("aside.price li:nth-of-type(4)").innerHTML = `$${ingredients.whiteSauce.price * state.whiteSauce} white sauce`;
  document.querySelector("aside.price li:nth-of-type(5)").innerHTML = `$${ingredients.glutenFreeCrust.price * state.glutenFreeCrust} gluten-free crust`;
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
