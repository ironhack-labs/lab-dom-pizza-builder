// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
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
  document.querySelectorAll(".pep").forEach(function(pep) {
    if (state.pepperonni) {
      pep.style.visibility = "visible";
    } else {
      pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach(function(mush) {
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    } else {
      mush.style.visibility = "hidden";
    }
  });

  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function(green) {
    if (state.greenPeppers) {
      green.style.visibility = "visible";
    } else {
      green.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach(function(white) {
    if (state.whiteSauce) {
      white.classList.add("sauce-white");
    } else {
      white.classList.remove("sauce-white");
    }
  });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust").forEach(function(gluten) {
    if (state.glutenFreeCrust) {
      gluten.classList.add("crust-gluten-free");
    } else {
      gluten.classList.remove("crust-gluten-free");
    }
  });
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  let totalPrice = 10;
  let stringFinished = "";
  if (state.pepperonni) {
    stringFinished += "<li>$1 pepperonni</li>";
    totalPrice += ingredients.pepperonni.price;
  }
  if (state.mushrooms) {
    stringFinished += "<li>$1 mushrooms</li>";
    totalPrice += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    stringFinished += "<li>$1 green peppers</li>";
    totalPrice += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    stringFinished += "<li>$3 white sauce</li>";
    totalPrice += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    stringFinished += "<li>$5 gluten-free crust</li>";
    totalPrice += ingredients.glutenFreeCrust.price;
  }

  document.querySelector("aside > ul").innerHTML = stringFinished;
  document.querySelector("aside > strong").innerHTML = "$" + totalPrice;
}

// Iteration 4: change the HTML of `<aside class="panel price">`
/*let stringFinished = "";
  if (state.pepperonni) {
    stringFinished = document.createElement(<li>$1 pepperonni</li>);
  }
  if (state.mushrooms) {
    stringFinished = document.createElement(<li>$1 mushrooms</li>);
  }
  if (state.greenPeppers) {
    stringFinished = document.createElement(<li>$1 green peppers</li>);
  }
  if (state.whiteSauce) {
    stringFinished = document.createElement(<li>$3 white sauce</li>);
  }
  if (state.glutenFreeCrust) {
    stringFinished = document.createElement(<li>$5 gluten-free</li>);
  }
  document.querySelector("body > aside > ul").innerHTML = stringFinished;
  return stringFinished;
}*/

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
