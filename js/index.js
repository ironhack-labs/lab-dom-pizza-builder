// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let totalPrice = 0;
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

document.querySelectorAll(".mushroom").forEach((oneMush) => {
  if (state.mushrooms) {
    oneMush.style.visibility = "visible";
  } else {
    oneMush.style.visibility = "hidden";
  }
});

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

document.querySelectorAll(".green-pepper").forEach((onePeper) => {
if (state.greenPeppers) {
  onePeper.style.visibility = "visible";
  } else {
      onePeper.style.visibility = "hidden";
  }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  sauce = document.querySelector(".sauce");

  if (state.whiteSauce) {
    sauce.className = "sauce sauce-white";
  } else {
    sauce.className = "sauce";
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  crust = document.querySelector(".crust");

  if (state.glutenFreeCrust) {
    crust.className = "crust crust-gluten-free";
  } else {
    crust.className = "crust";
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`



}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  totalPrice = 0;
  prices = document.querySelectorAll(".price li");
  total = document.querySelector(".total");

  if (state.pepperoni) {
    prices[0].style.visibility = "visible";
    totalPrice += ingredients.pepperoni.price;
  } else {
    prices[0].style.visibility = "hidden";
  }

  if (state.mushrooms) {
    prices[1].style.visibility = "visible";
    totalPrice += ingredients.mushrooms.price;
  } else {
    prices[1].style.visibility = "hidden";
  }

  if (state.greenPeppers) {
    prices[2].style.visibility = "visible";
    totalPrice += ingredients.greenPeppers.price;
  } else {
    prices[2].style.visibility = "hidden";
  }

  if (state.whiteSauce) {
    prices[3].style.visibility = "visible";
    totalPrice += ingredients.whiteSauce.price;
  } else {
    prices[3].style.visibility = "hidden";
  }

  if (state.glutenFreeCrust) {
    prices[4].style.visibility = "visible";
    totalPrice += ingredients.glutenFreeCrust.price;
  } else {
    prices[4].style.visibility = "hidden";
  }

  totalPrice += basePrice;
  total.innerText = `$${totalPrice}`;


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

document.querySelector(".btn.btn-green-peppers")
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