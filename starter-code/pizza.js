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
  document.querySelectorAll(".mushroom").forEach(function($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($greenPep) {
    if (state.greenPeppers) {
      $greenPep.style.visibility = "visible";
    } else {
      $greenPep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function($whiteSauce) {
    if (state.whiteSauce) {
      $whiteSauce.classList.add("sauce-white");
    } else {
      $whiteSauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function($glutenFreeCrust) {
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.classList.add("crust-gluten-free");
    } else {
      $glutenFreeCrust.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  /* state.forEach((elem, i) => {
      if (elem) {
        document.querySelectorAll(".panel price > ul")[i].style.visibility =
          "visible";
      } else {
        document.querySelectorAll(".panel price > ul")[i].style.visibility =
          "hidden";
      }
    }); */
  let newSum = "";
  let sum = basePrice;
  for (const element in state) {
    if (state[element]) {
      sum += ingredients[element].price;
      newSum += `<li>${ingredients[element].price} ${ingredients[element].name}</li>`;
    }
  }
  document.querySelector("strong").innerText = `$${sum}`;
  document.querySelector(".price ul").innerHTML = newSum;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function(event) {
  event.target.classList.toggle("active");
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn-mushrooms").onclick = function(event) {
  event.target.classList.toggle("active");
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").onclick = function(event) {
  event.target.classList.toggle("active");
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").onclick = function(event) {
  event.target.classList.toggle("active");
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
