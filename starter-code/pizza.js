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
  document.querySelectorAll(".cap").forEach(function($cap) {
    if (state.mushrooms) {
      $cap.style.visibility = "visible";
    } else {
      $cap.style.visibility = "hidden";
    }
  });
  document.querySelectorAll(".stem").forEach(function($stem) {
    if (state.mushrooms) {
      $stem.style.visibility = "visible";
    } else {
      $stem.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function($green) {
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
    } else {
      $green.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  let sauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");
  } else {
    sauce.classList.remove("sauce-white");
  }
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  let btnPepperonni = document.querySelector(".btn-pepperonni");
  if (state.pepperonni) {
    btnPepperonni.classList.add("active");
  } else {
    btnPepperonni.classList.remove("active");
  }

  let btnMushrooms = document.querySelector(".btn-mushrooms");
  if (state.mushrooms) {
    btnMushrooms.classList.add("active");
  } else {
    btnMushrooms.classList.remove("active");
  }

  let btnGreenPeppers = document.querySelector(".btn-green-peppers");
  if (state.greenPeppers) {
    btnGreenPeppers.classList.add("active");
  } else {
    btnGreenPeppers.classList.remove("active");
  }

  let btnSauce = document.querySelector(".btn-sauce");
  if (state.whiteSauce) {
    btnSauce.classList.add("active");
  } else {
    btnSauce.classList.remove("active");
  }

  let btnCrust = document.querySelector(".btn-crust");
  if (state.crust) {
    btnCrust.classList.add("active");
  } else {
    btnCrust.classList.remove("active");
  }
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  let priceList = document.getElementsByTagName("ul")[1];
  priceList.innerHTML = "";
  let total = 10;
  for (let key in state) {
    if (state[key]) {
      priceList.innerHTML += `<li>$${ingredients[key].price} ${
        ingredients[key].name
      }</li>`;
      total += ingredients[key].price;
    }
    document.querySelector("strong").innerHTML = `$${total}`;
  }
  // Iteration 4: change the HTML of `<aside class="panel price">`
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
