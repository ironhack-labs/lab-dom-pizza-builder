// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: "pepperoni",
    price: 1,
  },
  mushrooms: {
    name: "Mushrooms",
    price: 1,
  },
  greenPeppers: {
    name: "Green Peppers",
    price: 1,
  },
  whiteSauce: {
    name: "White sauce",
    price: 3,
  },
  glutenFreeCrust: {
    name: "Gluten-free crust",
    price: 5,
  },
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
  document.querySelectorAll(".mushroom").forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    } else {
      mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll(".green-pepper").forEach((gpep) => {
    if (state.greenPeppers) {
      gpep.style.visibility = "visible";
    } else {
      gpep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let whiteSauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    whiteSauce.className = "sauce sauce-white";
  } else {
    whiteSauce.className = "sauce";
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let glutenFreeCrust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    glutenFreeCrust.className = "crust crust-gluten-free";
  } else {
    glutenFreeCrust.className = "crust";
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document
    .querySelector(".btn-pepperoni")
    .classList.toggle("active", state.pepperoni);
  document
    .querySelector(".btn-mushrooms")
    .classList.toggle("active", state.mushrooms);
  document
    .querySelector(".btn-green-peppers")
    .classList.toggle("active", state.greenPeppers);
  document
    .querySelector(".btn-sauce")
    .classList.toggle("active", state.whiteSauce);
  document
    .querySelector(".btn-crust")
    .classList.toggle("active", state.glutenFreeCrust);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let totalPrice = basePrice;
  let priceList = document.querySelector(".price ul");
  priceList.innerHTML = "";

  for (let elmt in ingredients) {
    if (state[elmt]) {
      priceList.innerHTML += `<li>$${ingredients[elmt].price} ${ingredients[
        elmt
      ].name.toLowerCase()}</li>`;
      totalPrice += ingredients[elmt].price;
    }
  }
  document.querySelector("aside.panel.price strong").innerHTML =
    "$" + totalPrice;
}

renderEverything();

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
});
