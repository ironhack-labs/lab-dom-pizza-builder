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

// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = "visible";
    } else {
      pepper.style.visibility = "hidden";
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  let salsa = document.querySelector(".sauce");
  if (state.whiteSauce) {
    salsa.classList.remove("sauce-white");
  } else {
    salsa.classList.add("sauce-white");
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  let gluten = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    gluten.classList.remove("crust-gluten-free");
  } else {
    gluten.classList.add("crust-gluten-free");
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">
function renderButtons() {
  let pepperoniBtn = document.querySelector(".btn.btn-pepperoni");
  if (!state.pepperoni) {
    pepperoniBtn.classList.remove("active");
  } else {
    pepperoniBtn.classList.add("active");
  }
  let mushroomsBtn = document.querySelector(".btn.btn-mushrooms");
  if (!state.mushrooms) {
    mushroomsBtn.classList.remove("active");
  } else {
    mushroomsBtn.classList.add("active");
  }
  let greenPeppersBtn = document.querySelector(".btn.btn-green-peppers");
  if (!state.greenPeppers) {
    greenPeppersBtn.classList.remove("active");
  } else {
    greenPeppersBtn.classList.add("active");
  }
  let sauceBtn = document.querySelector(".btn.btn-sauce");
  if (!!state.whiteSauce) {
    sauceBtn.classList.remove("active");
  } else {
    sauceBtn.classList.add("active");
  }
  let crustBtn = document.querySelector(".btn.btn-crust");
  if (!!state.glutenFreeCrust) {
    crustBtn.classList.remove("active");
  } else {
    crustBtn.classList.add("active");
  }
}

// Iteration 4: change the HTML of `<aside class="panel price">

function renderPrice() {
  let totalPrice = basePrice;
  let prices = document.querySelector(".topping-prices");
  let pepperoniPrice = prices.querySelector("li:nth-child(1)");
  if (state.pepperoni) {
    pepperoniPrice.style.visibility = "visible";
    totalPrice += 1;
  } else {
    pepperoniPrice.style.visibility = "hidden";
  }
  let mushroomsPrice = prices.querySelector("li:nth-child(2)");
  if (state.mushrooms) {
    mushroomsPrice.style.visibility = "visible";
    totalPrice += 1;
  } else {
    mushroomsPrice.style.visibility = "hidden";
  }
  let greenPeppersPrice = prices.querySelector("li:nth-child(3)");
  if (state.greenPeppers) {
    greenPeppersPrice.style.visibility = "visible";
    totalPrice += 1;
  } else {
    greenPeppersPrice.style.visibility = "hidden";
  }
  let whiteSaucePrice = prices.querySelector("li:nth-child(4)");
  if (!state.whiteSauce) {
    whiteSaucePrice.style.visibility = "visible";
    totalPrice += 3;
  } else {
    whiteSaucePrice.style.visibility = "hidden";
  }
  let glutenFreeCrustPrice = prices.querySelector("li:nth-child(5)");
  if (!state.glutenFreeCrust) {
    glutenFreeCrustPrice.style.visibility = "visible";
    totalPrice += 5;
  } else {
    glutenFreeCrustPrice.style.visibility = "hidden";
  }
  console.log(totalPrice);
  let totalPriceResult = document.querySelector(".panel.price");
  totalPriceResult.querySelector("strong").innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-greenPepper">`
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
