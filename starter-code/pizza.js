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
  pepperonni: false,
  mushrooms: false,
  greenPeppers: false,
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
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function($greenPeppers) {
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    } else {
      $greenPeppers.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  if (state["whiteSauce"] === true) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  if (state["glutenFreeCrust"] === true) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

function renderPrice() {
  var totalPrice = 0;
  for (let topping in ingredients) {
    if (state[topping] === true) {
      totalPrice += ingredients[topping].price;
    }
  }
  document.querySelector(".panel.price strong").innerHTML =
    basePrice + totalPrice;
}

renderEverything();

document.querySelector(".btn.btn-pepperonni").onclick = function(evt) {
  evt.target.classList.toggle("active");
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

document.querySelector(".btn.btn-mushrooms").onclick = function(evt) {
  evt.target.classList.toggle("active");
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

document.querySelector(".btn.btn-green-peppers").onclick = function(evt) {
  evt.target.classList.toggle("active");
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

document.querySelector(".btn.btn-sauce").onclick = function(evt) {
  evt.target.classList.toggle("active");
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

document.querySelector(".btn.btn-crust").onclick = function(evt) {
  evt.target.classList.toggle("active");
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
