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

  //renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
  renderButtons(".btn-pepperonni", state.pepperonni);
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function(eachMushroomElement) {
    if (state.mushrooms) {
      eachMushroomElement.style.visibility = "visible";
    } else {
      eachMushroomElement.style.visibility = "hidden";
    }
  });
  renderButtons(".btn-mushrooms", state.mushrooms);
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function(eachGreenPepper) {
    if (state.greenPeppers) {
      eachGreenPepper.style.visibility = "visible"; //syntax??;
    } else {
      eachGreenPepper.style.visibility = "hidden";
    }
  });
  renderButtons(".btn-green-peppers", state.greenPeppers);
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  renderButtons(".btn-sauce", state.whiteSauce);
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector(".crust").classList.toggle("crust-gluten-free");
  renderButtons(".btn-crust", state.glutenFreeCrust);
}

function renderButtons(foodClass, state) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //document.querySelector(foodClass).classList.toggle("active");

  if (state) {
    document.querySelector(foodClass).classList.add("active");
  } else {
    document.querySelector(foodClass).classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  basePrice = 10;

  if (state.pepperonni) {
    basePrice += ingredients.pepperonni.price;
    document.querySelector(".price li").style.visibility = "visible";
    document.querySelector(".price li").style.position = "relative";
  } else {
    document.querySelector(".price li").style.visibility = "hidden";
    document.querySelector(".price li").style.position = "absolute";
  }
  if (state.mushrooms) {
    basePrice += 1;
    //   document.querySelector(".price ul:nth-child(2)").style.visibility =
    //     "visible";
    //   document.querySelector(".price ul:nth-child(2)").style.position =
    //     "relative";
    // } else {
    //   document.querySelector(".price ul:nth-child(2)").style.visibility =
    //     "hidden";
    //   document.querySelector(".price ul:nth-child(2)").style.position =
    //     "absolute";
  }
  if (state.greenPeppers) {
    basePrice += 1;
    //   document.querySelector(".price ul:nth-child(3)").style.visibility =
    //     "visible";
    //   document.querySelector(".price ul:nth-child(3)").style.position =
    //     "relative";
    // } else {
    //   document.querySelector(".price ul:nth-child(3)").style.visibility =
    //     "hidden";
    //   document.querySelector(".price ul:nth-child(3)").style.position =
    //     "absolute";
  }

  if (state.whiteSauce) {
    basePrice += 3;
    //   document.querySelector(".price ul:nth-child(4)").style.visibility =
    //     "visible";
    //   document.querySelector(".price ul:nth-child(4)").style.position =
    //     "relative";
    // } else {
    //   document.querySelector(".price ul:nth-child(4)").style.visibility =
    //     "hidden";
    //   document.querySelector(".price ul:nth-child(4)").style.position =
    //     "absolute";
  }

  if (state.glutenFreeCrust) {
    basePrice += 5;
    //   document.querySelector(".price ul:nth-child(5)").style.visibility =
    //     "visible";
    //   document.querySelector(".price ul:nth-child(5)").style.position =
    //     "relative";
    // } else {
    //   document.querySelector(".price ul:nth-child(5)").style.visibility =
    //     "hidden";
    //   document.querySelector(".price ul:nth-child(5)").style.position =
    //     "absolute";
  }

  document.querySelector(".price strong").innerText = `$${basePrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
