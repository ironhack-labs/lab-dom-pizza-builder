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
  document.querySelectorAll(".sauce,.sauce-white").forEach(function($sauce) {
    if (state.whiteSauce) {
      $sauce.className = "sauce-white";
    } else {
      $sauce.className = "sauce";
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document
    .querySelectorAll(".crust,.crust-gluten-free")
    .forEach(function($gluten) {
      if (state.glutenFreeCrust) {
        $gluten.className = "crust-gluten-free";
      } else {
        $gluten.className = "crust";
      }
    });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // let obj = {
  //   pepperonni: ".btn btn-pepperonni",
  //   mushrooms: ".btn btn-mushrooms",
  //   greenPeppers: ".btn btn-green-peppers",
  //   whiteSauce: ".btn btn-sauce",
  //   glutenFreeCrust: ".btn btn-crus"
  // };
  // for (const key in state) {
  //   console.log(obj[key]);
  //   if (state[key]) {
  //     console.log(document.querySelector(".btn btn-pepperonni active"));
  //     document.querySelector(obj[key]).classList.add("active");
  //   } else {
  //     document.querySelector(obj[key]).classList.remove("active");
  //   }
  // }

  document.querySelectorAll(".btn").forEach((el, index) => {
    if (index === 0) {
      if (state.pepperonni) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    } else if (index === 1) {
      if (state.mushrooms) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    } else if (index === 2) {
      if (state.greenPeppers) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    } else if (index === 3) {
      if (state.whiteSauce) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    } else if (index === 4) {
      if (state.glutenFreeCrust) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  if (state.pepperonni) {
    documen.querySelector(".panel-price");
  }
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
document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
