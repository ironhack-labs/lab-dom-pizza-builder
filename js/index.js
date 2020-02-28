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
  let position = document.querySelectorAll(".price ul li")[0];
  document.querySelectorAll(".pep").forEach($pep => {
    if (state.pepperoni) {
      $pep.style.visibility = "visible";
      position.style.display = "block";
    } else {
      $pep.style.visibility = "hidden";
      position.style.display = "none";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  let $position = document.querySelectorAll(".price ul li")[1];
  document.querySelectorAll(".mushroom").forEach($mushroom => {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
      $position.style.display = "block";
    } else {
      $mushroom.style.visibility = "hidden";
      $position.style.display = "none";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  let $position = document.querySelectorAll(".price ul li")[2];
  document.querySelectorAll(".green-pepper").forEach($pepper => {
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
      $position.style.display = "block";
    } else {
      $pepper.style.visibility = "hidden";
      $position.style.display = "none";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let $position = document.querySelectorAll(".price ul li")[3];

  if (state.whiteSauce) {
    document.getElementsByClassName("sauce")[0].classList.add("sauce-white");
    $position.style.display = "block";
  } else {
    document.getElementsByClassName("sauce")[0].classList.remove("sauce-white");
    $position.style.display = "none";
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let $position = document.querySelectorAll(".price ul li")[4];
  let crusts = document.getElementsByClassName("crust")[0].classList;
  if (state.glutenFreeCrust) {
    crusts.add("crust-gluten-free");
    $position.style.display = "block";
  } else {
    crusts.remove("crust-gluten-free");
    $position.style.display = "none";
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn").forEach(button => {
    let active = false;
    if (button.classList.contains("btn-pepperoni")) {
      active = state.pepperoni;
    } else if (button.classList.contains("btn-mushrooms")) {
      active = state.mushrooms;
    } else if (button.classList.contains("btn-green-peppers")) {
      active = state.greenPeppers;
    } else if (button.classList.contains("btn-sauce")) {
      active = state.whiteSauce;
    } else {
      active = state.glutenFreeCrust;
    }
    if (!active) {
      button.classList.remove("active");
    } else {
      button.classList.add("active");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;

  let price = 0;
  if (state.pepperoni) {
    price = ingredients.pepperoni.price;
    totalPrice += price;
    document.querySelector(".price strong").innerText = totalPrice;
  }
  if (state.mushrooms) {
    price = ingredients.mushrooms.price;
    totalPrice += price;
    document.querySelector(".price strong").innerText = totalPrice;
  }
  if (state.greenPeppers) {
    price = ingredients.greenPeppers.price;
    totalPrice += price;
    document.querySelector(".price strong").innerText = totalPrice;
  }
  if (state.whiteSauce) {
    price = ingredients.whiteSauce.price;
    totalPrice += price;
    document.querySelector(".price strong").innerText = totalPrice;
  }
  if (state.glutenFreeCrust) {
    price = ingredients.glutenFreeCrust.price;
    totalPrice += price;
    document.querySelector(".price strong").innerText = totalPrice;
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").onclick = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
