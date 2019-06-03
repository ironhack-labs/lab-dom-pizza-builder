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
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function($greenPeppers) {
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    } else {
      $greenPeppers.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  let anySauce = document.querySelector("section.sauce");
  if (state.whiteSauce) {
    anySauce.classList.add("sauce-white");
  } else {
    anySauce.classList.remove("sauce-white");
  }
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderGlutenFreeCrust() {
  let crust = document.querySelector("section.crust");
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  let pepButton = document.querySelector(".btn.btn-pepperonni");
  if (state.pepperonni) {
    pepButton.classList.add("active");
  } else {
    pepButton.classList.remove("active");
  }
  let mushButton = document.querySelector(".btn.btn-mushrooms");
  if (state.mushrooms) {
    mushButton.classList.add("active");
  } else {
    mushButton.classList.remove("active");
  }
  let greenButton = document.querySelector(".btn.btn-green-peppers");
  if (state.greenPeppers) {
    greenButton.classList.add("active");
  } else {
    greenButton.classList.remove("active");
  }
  let sauceButton = document.querySelector(".btn.btn-sauce");
  if (state.whiteSauce) {
    sauceButton.classList.add("active");
  } else {
    sauceButton.classList.remove("active");
  }
  let crustButton = document.querySelector(".btn.btn-crust");
  if (state.glutenFreeCrust) {
    crustButton.classList.add("active");
  } else {
    crustButton.classList.remove("active");
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderPrice() {
  let totalPrice = 10;
  // clear the price list
  document.querySelector("ul.ingredients-price").innerHTML = "";
  // find keys from state
  Object.keys(state).forEach(key => {
    //For each true value, increment the total price with
    //the price value found in ingredients
    if (state[key]) {
      totalPrice += ingredients[key].price;
      //add an item for the ingredient in the HTML
      let liTag = document.createElement("li");
      liTag.innerHTML = `$ ${ingredients[key].price} ${ingredients[key].name}`;
      let parent = document.querySelector("ul.ingredients-price");
      parent.appendChild(liTag);
    }
  });
  document.querySelector(".total-price").innerHTML = `$ ${totalPrice}`;
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function(e) {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function(e) {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function(e) {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function(e) {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function(e) {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
