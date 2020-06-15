// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
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
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function changeStatePep() {
  state.pepperoni = !state.pepperoni;
  renderEverything();
}

// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
    } else {
      mushroom.style.visibility = "hidden";
    }
  });
}

function changeStateMushrooms() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function (greenpep) {
    if (state.greenPeppers) {
      greenpep.style.visibility = "visible";
    } else greenpep.style.visibility = "hidden";
  });
}

function changeStateGreenPeppers() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}


// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function changeState(ingredient) {
  console.log(ingredient);
  console.log(state[ingredient]);
  state[ingredient] = !state[ingredient];
  renderEverything();
}

// document.getElementsByClassName("btn-sauce").onClick = changeState(whiteSauce);

function renderWhiteSauce() {
  const whiteSauce = document.querySelector(".sauce-white");
  if (state.whiteSauce) {
    whiteSauce.style.visibility = "visible";
  } else whiteSauce.style.visibility = "hidden";
}

function changeStateWhiteSauce() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  document.querySelector(".crust").classList.toggle("crust-gluten-free");
}
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  document.querySelector(".btn").classList.toggle(".active");
}

  // Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

document.querySelector(".btn-pepperoni").onclick = changeStatePep;

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn-mushrooms").onclick = () => changeState("mushrooms") ;

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn-green-peppers").onclick = changeStateGreenPeppers;

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn-sauce").onclick = changeStateWhiteSauce;

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").onclick = changeStateWhiteSauce;