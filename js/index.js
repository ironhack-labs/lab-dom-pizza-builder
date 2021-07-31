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

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = "visible";
    } else {
      onePepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauce.setAttribute("class", "sauce sauce-white");
  } else {
    sauce.setAttribute("class", "sauce");
  }
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.setAttribute("class", "crust crust-gluten-free");
  } else {
    crust.setAttribute("class", "crust");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn-pepperoni");
  if (state.pepperoni === false) {
    document.querySelector(".btn").setAttribute("class", "btn btn-pepperoni");
  } else {
    document
      .querySelector(".btn-pepperoni")
      .setAttribute("class", "btn btn-pepperoni active");
  }

  if (state.mushrooms === false) {
    document
      .querySelector(".btn-mushrooms")
      .setAttribute("class", "btn btn-mushrooms");
  } else {
    document
      .querySelector(".btn-mushrooms")
      .setAttribute("class", "btn btn-mushrooms active");
  }

  if (state.greenPeppers === false) {
    document
      .querySelector(".btn-green-peppers")
      .setAttribute("class", "btn btn-green-peppers");
  } else {
    document
      .querySelector(".btn-green-peppers")
      .setAttribute("class", "btn btn-green-peppers active");
  }

  if (state.whiteSauce === false) {
    document.querySelector(".btn-sauce").setAttribute("class", "btn btn-sauce");
  } else {
    document
      .querySelector(".btn-sauce")
      .setAttribute("class", "btn btn-sauce active");
  }

  if (state.glutenFreeCrust === false) {
    document.querySelector(".btn-crust").setAttribute("class", "btn btn-crust");
  } else {
    document
      .querySelector(".btn-crust")
      .setAttribute("class", "btn btn-crust active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // let lista = document.querySelector("#ul");
  // let pepperoniIngrediente = document.querySelector("#pepperoni");
  // if (!state.pepperoni) {
  //   lista.removeChild(pepperoniIngrediente);
  // } else if (state.pepperoni) {
  //   pepperoniIngrediente = document.createElement("li");
  //   pepperoniIngrediente.innerHTML = "$1 pepperoni";
  //   pepperoniIngrediente.setAttribute("id", "pepperoni");
  //   lista.appendChild(pepperoniIngrediente);
  // }
  // let mushroomIngrediente = document.querySelector("#mushroom");
  // if (!state.mushrooms) {
  //   lista.removeChild(mushroomIngrediente);
  // } else if (state.mushrooms) {
  //   mushroomIngrediente = document.createElement("li");
  //   mushroomIngrediente.innerHTML = "$1 mushroom";
  //   mushroomIngrediente.setAttribute("id", "mushroom");
  //   lista.appendChild(mushroomIngrediente);
  // }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector(".btn.btn-mushrooms")
  .addEventListener("click", function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
