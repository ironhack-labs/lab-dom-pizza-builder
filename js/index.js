// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  "use strict";
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  "use strict";
  document.querySelectorAll(".pep").forEach((onePep) => {
    onePep.style.visibility = state.pepperoni ? "visible" : "hidden";
  });
}

function renderMushrooms() {
  "use strict";
  document.querySelectorAll(".mushroom").forEach((mushroom) => {
    mushroom.style.visibility = state.mushrooms ? "visible" : "hidden";
  });
}

function renderGreenPeppers() {
  "use strict";
  document.querySelectorAll(".green-pepper").forEach((pepper) => {
    pepper.style.visibility = state.greenPeppers ? "visible" : "hidden";
  });
}

function renderWhiteSauce() {
  "use strict";
  let stateWhiteSauce = state.whiteSauce ? "visible" : "hidden";
  document.querySelector(".sauce").style.visibility = stateWhiteSauce;
}

function renderGlutenFreeCrust() {
  "use strict";
  let stateGlutenFreeCrust = state.glutenFreeCrust ? "visible" : "hidden";
  document.querySelector(".crust").style.visibility = stateGlutenFreeCrust;
}

function renderButtons() {
  "use strict";
  let statePepperoni = state.pepperoni ? "active" : "";
  document.querySelector(".btn.btn-pepperoni").className = `btn btn-pepperoni ${statePepperoni}`;

  let stateMushrooms = state.mushrooms ? "active" : "";
  document.querySelector(".btn.btn-mushrooms").className = `btn btn-mushrooms ${stateMushrooms}`;

  let stateGreenPeppers = state.greenPeppers ? "active" : "";
  document.querySelector(".btn.btn-green-peppers").className = `btn btn-green-peppers ${stateGreenPeppers}`;

  let stateWhiteSauce = state.whiteSauce ? "active" : "";
  document.querySelector(".btn.btn-sauce").className = `btn btn-sauce ${stateWhiteSauce}`;

  let stateGlutenFreeCrust = state.glutenFreeCrust ? "active" : "";
  document.querySelector(".btn.btn-crust").className = `btn btn-crust ${stateGlutenFreeCrust}`;
}

function renderPrice() {
  "use strict";
  let totalPrice = basePrice;
  let list = document.querySelector("aside.panel.price ul");
  list.innerHTML = "";
  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient].price;
      list.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name.toLowerCase()}</li>`;
    }
  }
  document.querySelector("aside.panel.price strong").innerHTML = `$${totalPrice}`;
}

renderEverything();

document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  "use strict";
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  "use strict";
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector(".btn.btn-green-peppers").addEventListener("click", () => {
  "use strict";
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  "use strict";
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  "use strict";
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
