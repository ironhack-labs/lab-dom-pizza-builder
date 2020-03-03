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
  document.querySelectorAll(".pep").forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(oneMus => {
    if (state.mushrooms) {
      oneMus.style.visibility = "visible";
    } else {
      oneMus.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(oneGrP => {
    if (state.greenPeppers) {
      oneGrP.style.visibility = "visible";
    } else {
      oneGrP.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(wSau => {
    if (state.whiteSauce) {
      wSau.className = "sauce sauce-white";
    } else {
      wSau.className = "sauce";
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(gFC => {
    if (state.glutenFreeCrust) {
      gFC.className = "crust crust-gluten-free";
    } else {
      gFC.className = "crust";
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const $buttonPepperoni = document.querySelector(".btn-pepperoni");
  const $buttonMushrooms = document.querySelector(".btn-mushrooms");
  const $buttonGreenPeppers = document.querySelector(".btn-green-peppers");
  const $buttonWhiteSauce = document.querySelector(".btn-sauce");
  const $buttonGlutenFreeCrust = document.querySelector(".btn-crust");

  if (state.pepperoni) {
    $buttonPepperoni.className = "btn btn-pepperoni active";
  } else {
    $buttonPepperoni.className = "btn btn-pepperoni";
  }

  if (state.mushrooms) {
    $buttonMushrooms.className = "btn btn-mushrooms active";
  } else {
    $buttonMushrooms.className = "btn btn-mushrooms";
  }

  if (state.greenPeppers) {
    $buttonGreenPeppers.className = "btn btn-green-peppers active";
  } else {
    $buttonGreenPeppers.className = "btn btn-green-peppers";
  }

  if (state.whiteSauce) {
    $buttonWhiteSauce.className = "btn btn-sauce active";
  } else {
    $buttonWhiteSauce.className = "btn btn-sauce";
  }

  if (state.glutenFreeCrust) {
    $buttonGlutenFreeCrust.className = "btn btn-crust active";
  } else {
    $buttonGlutenFreeCrust.className = "btn btn-crust";
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  const $listPrices = document.querySelector("aside.panel.price ul");
  let $totalPrice = document.querySelector("aside.panel.price strong");
  $listPrices.innerHTML = "";

  for (let i in ingredients) {
    if (state[i]) {
      totalPrice += ingredients[i].price;
      $listPrices.innerHTML += `<li>$${ingredients[i].price} ${ingredients[i].name}</li>`;
      $totalPrice.innerHTML = `<strong>$${totalPrice}</strong>`;
    }
  }
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
