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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function(mush) {
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    } else {
      mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function(greenPep) {
    if (state.greenPeppers) {
      greenPep.style.visibility = "visible";
    } else {
      greenPep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let a = document.querySelector(".sauce");
  if (state.whiteSauce) {
    a.classList.add("sauce-white");
  } else {
    a.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let a = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    a.classList.add("crust-gluten-free");
  } else {
    a.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let a = document.querySelector(".btn-pepperonni");
  (!state.pepperonni ? a.classList.remove("active") : a.classList.add("active"));

  let b = document.querySelector(".btn-mushrooms");
  (!state.mushrooms ? b.classList.remove("active") : b.classList.add("active"));

  let c = document.querySelector(".btn-green-peppers");
  (!state.greenPeppers ? c.classList.remove("active") : c.classList.add("active"));

  let d = document.querySelector(".btn-sauce");
  (!state.whiteSauce ? d.classList.remove("active") : d.classList.add("active"));

  let e = document.querySelector(".btn-crust");
  (!state.glutenFreeCrust ? e.classList.remove("active") : e.classList.add("active"));
};




function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var endPrice = basePrice;
  var list = document.querySelector("aside.panel.price ul");
  list.innerHTML = "";

  for (let ingredientKey in ingredients){
    if(state[ingredientKey]){
      endPrice += ingredients[ingredientKey].price;
      list.innerHTML += `<li>$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name.toLowerCase()}</li>`;
    }
  }
  document.querySelector("aside.panel.price strong").innerHTML = "$" + endPrice;
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
