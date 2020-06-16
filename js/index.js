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
  document.querySelectorAll(".cap").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((onegreenPep) => {
    if (state.greenPeppers) {
      onegreenPep.style.visibility = "visible";
    } else {
      onegreenPep.style.visibility = "hidden";
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  const sauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");
  } else {
    sauce.classList.remove("sauce-white");
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const gluten = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    gluten.classList.add("crust-gluten-free");
  } else {
    gluten.classList.remove("crust-gluten-free");
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  let names = [];
  for (let ing in state) {
    names.push(state[ing]);
  }
  const buttons = document.querySelectorAll("button.btn");
  buttons.forEach((button, i) => {
    if (names[i]) button.classList.add("active");
    else button.classList.remove("active");
  });
}

//basePrice
function renderPrice() {
  let inputprice = document.querySelector(".panel.price ul");
  inputprice.innerHTML = "";
  let totalPrice = document.querySelector(".panel.price strong");
  totalPrice.innerHTML = "";

  let price = basePrice;

  for (let ingredient in ingredients) {
    if (state[ingredient] === true) {
      price += ingredients[ingredient].price;
      inputprice.innerHTML += `<li>$ 
        ${ingredients[ingredient].price} 
        ${ingredients[ingredient].name} 
        </li>`;
    }
  }
  totalPrice.innerHTML = `$${price}`;
}

// Iteration 4: change the HTML of `<aside class="panel price">`

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

document.querySelector(".btn-green-peppers").addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
