// Write your Pizza Builder JavaScript in this file.

// Constants
var btnclicked = ""
var basePrice = 10;
var ingredients = {
  pepperonni: {
    name: "Pepperonni",
    price: 1
  },
  mushrooms: {
    name: "Mushrooms",
    price: 1
  },
  greenPeppers: {
    name: "Green Peppers",
    price: 1
  },
  whiteSauce: {
    name: "White sauce",
    price: 3
  },
  glutenFreeCrust: {
    name: "Gluten-free crust",
    price: 5
  }
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};



// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function (element) {
    if (state.pepperonni) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  document.querySelectorAll(".mushroom").forEach(function (element) {
    if (state.mushrooms) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function (element) {
    if (state.greenPeppers) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");

  } else {
    sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let button = document.querySelectorAll(".btn");
  if (btnclicked) {
    console.log(btnclicked);
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  /*   const source = document.querySelectorAll(".price li");
    source.forEach(function (element) {
      if (!element.classList.contains("active")) {
        element.style.display = "none";
      }
    }); */
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni, .btn.btn-pepperonni").onclick = function (evt) {
  //var btnclicked = evt.target;
  //console.log(btnclicked);
  state.pepperonni = !state.pepperonni;
  renderEverything();
  return btnclicked = evt.target;
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function (evt) {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  return btnclicked = evt.target;
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function (evt) {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  return btnclicked = evt.target;
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function (evt) {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
  return btnclicked = evt.target;
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function (evt) {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  return btnclicked += evt.target;
};