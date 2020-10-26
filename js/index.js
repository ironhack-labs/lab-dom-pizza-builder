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
  document.querySelectorAll(".mushroom").forEach(function (shroom) {
    if (state.mushrooms) {
      shroom.style.visibility = "visible";
    } else {
      shroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function (pepper) {
    if (state.greenPeppers) {
      pepper.style.visibility = "visible";
    } else {
      pepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function (sauce) {
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white");
    } else {
      sauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function (crusty) {
    if (state.glutenFreeCrust) {
      crusty.classList.add("crust-gluten-free");
    } else {
      crusty.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn-mushrooms").forEach(function (button) {
    if (state.mushrooms === true) {
      button.classList.remove("active");
    } else {
      button.classList.add("active");
    }
  });
  document.querySelectorAll(".btn-pepperoni").forEach(function (button) {
    if (state.pepperoni === true) {
      button.classList.remove("active");
    } else {
      button.classList.add("active");
    }
  });
  document.querySelectorAll(".btn-green-peppers").forEach(function (button) {
    if (state.greenPeppers === true) {
      button.classList.remove("active");
    } else {
      button.classList.add("active");
    }
  });
  document.querySelectorAll(".btn-sauce").forEach(function (button) {
    if (state.whiteSauce === true) {
      button.classList.remove("active");
    } else {
      button.classList.add("active");
    }
  });
  document.querySelectorAll(".btn-crust").forEach(function (button) {
    if (state.glutenFreeCrust === true) {
      button.classList.remove("active");
    } else {
      button.classList.add("active");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // i cheated and inspected the demo version FYI -- looking maybe at hhome to find a solution with looping through the ingredients container and adding the results to the list
  let totalPrice = basePrice;
  let $list = document.querySelector("aside.panel.price ul");
  $list.innerHTML = "";
  for (let ingredientKey in ingredients) {
    if (state[ingredientKey]) {
      totalPrice += ingredients[ingredientKey].price;
      $list.innerHTML += `<li>$${
        ingredients[ingredientKey].price
      } ${ingredients[ingredientKey].name.toLowerCase()}</li>`;
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
  .addEventListener("click", function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  console.log("skkr");
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">;
document.querySelector(".btn.btn-crust").addEventListener("click", function () {
  console.log("brrr");
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
