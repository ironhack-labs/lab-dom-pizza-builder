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
  document.querySelectorAll(".green-pepper").forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = "visible";
    } else {
      oneGreenPep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceToggle = document.querySelector(".sauce");
  console.log(sauceToggle.classList);
  if (state.whiteSauce) {
    sauceToggle.classList.add("sauce-white");
    console.log(sauceToggle.classList);
  } else {
    sauceToggle.classList.remove("sauce-white");
    console.log(sauceToggle.classList);
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const glutenToggle = document.querySelector(".crust");
  console.log(glutenToggle.classList);
  if (state.glutenFreeCrust) {
    glutenToggle.classList.add("crust-gluten-free");
    console.log(glutenToggle.classList);
  } else {
    glutenToggle.classList.remove("crust-gluten-free");
    console.log(glutenToggle.classList);
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const bntPep = document.querySelector(".btn-pepperoni");
  console.log(bntPep.classList);
  if (state.pepperoni) {
    bntPep.classList.add("active");
    console.log(bntPep.classList);
  } else {
    bntPep.classList.remove("active");
    console.log(bntPep.classList);
  }

  const bntMush = document.querySelector(".btn-mushrooms");
  console.log(bntMush.classList);
  if (state.mushrooms) {
    bntMush.classList.add("active");
    console.log(bntMush.classList);
  } else {
    bntMush.classList.remove("active");
    console.log(bntMush.classList);
  }

  const bntGreenPep = document.querySelector(".btn-green-peppers");
  console.log(bntGreenPep.classList);
  if (state.greenPeppers) {
    bntGreenPep.classList.add("active");
    console.log(bntGreenPep.classList);
  } else {
    bntGreenPep.classList.remove("active");
    console.log(bntGreenPep.classList);
  }

  const btnWhiteS = document.querySelector(".btn-sauce");
  console.log(btnWhiteS.classList);
  if (state.whiteSauce) {
    btnWhiteS.classList.add("active");
    console.log(btnWhiteS.classList);
  } else {
    btnWhiteS.classList.remove("active");
    console.log(btnWhiteS.classList);
  }

  const bntCrust = document.querySelector(".btn-crust");
  console.log(bntCrust.classList);
  if (state.glutenFreeCrust) {
    bntCrust.classList.add("active");
    console.log(bntCrust.classList);
  } else {
    bntCrust.classList.remove("active");
    console.log(bntCrust.classList);
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const totalPrice = 0;
  const itemsList = document.querySelectorAll(".panel-price > ul > li");
  console.log(itemsList);
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
