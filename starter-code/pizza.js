// Write your Pizza Builder JavaScript in this file.

// Constants
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
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function ($mush) {
    if (state.mushroom) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function ($green) {
    if (state.greenPepper) {
      $green.style.visibility = "visible";
      // console.log("visible")
    } else {
      $green.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach(function (sauce) {
    if (state.sauceWhite) {
      sauce.classList.add("sauce-white");
    } else {
      sauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function ($crust) {
    if (state.crustGlutenFree) {
      $crust.classList.add("crust-gluten-free");
    } else {
      $crust.classList.remove("crust-gluten-free");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var li = document.querySelectorAll("ul li")
  li.forEach(function (li) {
    if (!state.pepperonni) {
      return
    }
  })
}

renderEverything();


var pepButton = document.querySelector(".btn.btn-pepperonni");
var mushButton = document.querySelector(".btn.btn-mushrooms");
var sauceButton = document.querySelector(".btn.btn-sauce");
var greenButton = document.querySelector(".btn.btn-green-peppers");
var gfreeButton = document.querySelector(".btn.btn-crust");
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
pepButton.onclick = function () {
  state.pepperonni = !state.pepperonni;
  pepButton.classList.toggle("active");
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

mushButton.onclick = function () {
  state.mushroom = !state.mushroom;
  renderEverything();
  mushButton.classList.toggle("active");
};

greenButton.onclick = function () {
  state.greenPepper = !state.greenPepper;
  renderEverything();
  greenButton.classList.toggle("active");
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

sauceButton.onclick = function () {
  state.sauceWhite = !state.sauceWhite;
  renderEverything();
  sauceButton.classList.toggle("active");
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

gfreeButton.onclick = function () {
  state.crustGlutenFree = !state.crustGlutenFree;
  renderEverything();
  gfreeButton.classList.toggle("active");
};