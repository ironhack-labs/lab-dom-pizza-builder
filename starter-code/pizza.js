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
  whiteSauce: true,
  glutenFreeCrust: true,
  active: true
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
  console.log("mush");
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function(mush) {
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    } else {
      mush.style.visibility = "hidden";
    }
  });
  /*
    document.querySelectorAll".mushroom").forEach(function(mushroom) {
    mushroom.style.visibility = state.mushrooms ? "visibility" : "hidden";
    }); 
  */
}

function renderGreenPeppers() {
  console.log("greenpep");
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function(greenPepper) {
    if (state.greenPeppers) {
      greenPepper.style.visibility = "visible";
    } else {
      greenPepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  console.log("sauce");
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }

  // document.querySelector(".sauce").classList.toggle("sauce-white");
}

function renderGlutenFreeCrust() {
  console.log("crust");
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }

  // document.querySelector(".crust").classList.toggle("crust-gluten-free");
}

var pepBtn = document.querySelector(".btn-pepperonni");
var mushBtn = document.querySelector(".btn-mushrooms");
var greenPepBtn = document.querySelector(".btn-green-peppers");
var whiteSauceBtn = document.querySelector(".btn-sauce");
var crustBtn = document.querySelector(".btn-crust");


function renderButtons() {

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // document.querySelectorAll(".btn").forEach(function(btn) {
  //   console.log(btn);
  //   if (btn.className.includes("btn-pepperonni") && state.pepperonni) {btn.classList.toggle("active")
  // } else if (btn.className.includes("btn-mushrooms") && state.mushroom) {btn.classList.toggle("active")
  // } else if (btn.className.includes("btn-sauce") && state.whiteSauce) {btn.classList.toggle("active")
  // } else if (btn.className.includes("btn-crust") && state.glutenFreeCrust) {btn.classList.toggle("active")}
  // });


}

// var ingredientsArray = Object.keys(ingredients)

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var endPrice = basePrice;
  var list = document.querySelector("aside.panel.price ul");
  list.innerHTML = "";
  for (ingredientKeys in ingredients) {
    if (state[ingredientKeys] === true) {
      endPrice += ingredients[ingredientKeys].price;
      list.innerHTML += `<li>+ $${ingredients[ingredientKeys].price} ${ingredients[ingredientKeys].name.toLowerCase()}<li>`;
    }
  }
  document.querySelector("aside.panel.price strong").innerHTML = "$" + endPrice;
};

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  pepBtn.classList.toggle("active");
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  mushBtn.classList.toggle("active");
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  greenPepBtn.classList.toggle("active");
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  whiteSauceBtn.classList.toggle("active");
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  crustBtn.classList.toggle("active");
  renderEverything();
};

