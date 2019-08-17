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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    } else {
      $greenPepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce-white").forEach(function($whiteSauce) {
    if (state.whiteSauce) {
      $whiteSauce.style.visibility = "visible";
    } else {
      $whiteSauce.style.visibility = "hidden";
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document
    .querySelectorAll(".crust-gluten-free")
    .forEach(function($glutenFreeCrust) {
      if (state.glutenFreeCrust) {
        $glutenFreeCrust.style.visibility = "visible";
      } else {
        $glutenFreeCrust.style.visibility = "hidden";
      }
    });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // "btn btn-pepperonni active"
  document.querySelectorAll(".btn").forEach(function(btn) {
    if (btn.className.includes("pepperonni")) {
      if (state.pepperonni === true) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    }
    if (btn.className.includes("green-peppers")) {
      if (state.greenPeppers === true) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    }
    if (btn.className.includes("mushroom")) {
      if (state.mushrooms === true) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    }
  });
}

// Iteration 4: change the HTML of `<aside class="panel price">`
// Display the list of all items selected & Display the total price

function renderPrice() {
  var totalPrice = 0;
  const list = document.getElementById("ingredients_prices");
  const price = document.querySelector(".panel.price strong");
  list.innerHTML = "";

  for (let topping in state) {
    if (state[topping].isActive) {
      list.innerHTML += `<li>$${state[topping].price} ${state[
        topping
      ].name.toLowerCase()}</li>`;
      totalPrice += state[topping].price;
    }
  }
  price.textContent = `$${basePrice + totalPrice}`;
}

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
  //evt.target.classList.toggle("active");
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function(evt) {
  evt.target.classList.toggle("active");
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function(evt) {
  evt.target.classList.toggle("active");
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};