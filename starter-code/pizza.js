// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function(pep){
    if (state.pepperonni) {
      pep.style.visibility = "visible";
    }
    else {
      pep.style.visibility = "hidden";
    }
  })
};

// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach(function(mushroom){
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
    }
    else {
      mushroom.style.visibility = "hidden";
    }
  })
}

// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function(greenPepper){
    if (state.greenPeppers) {
      greenPepper.style.visibility = "visible";
    }
    else {
      greenPepper.style.visibility = "hidden";
    }
  })
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach(function(sauce){
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white");
    }
    else {
      sauce.classList.remove("sauce-white");
    }
  })
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust").forEach(function(crust){
    if (state.glutenFreeCrust) {
      crust.classList.add("crust-gluten-free");
    }
    else {
      crust.classList.remove("crust-gluten-free");
    }
  })
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  if (state.pepperonni) {
    document.querySelectorAll(".btn-pepperonni").forEach(function(btnPep) {
      btnPep.classList.add("active");
    })
  } else {
    document.querySelectorAll(".btn-pepperonni").forEach(function(btnPep) {
      btnPep.classList.remove("active");
    })
  }

  if (state.mushrooms) {
    document.querySelectorAll(".btn-mushrooms").forEach(function(btnMush) {
      btnMush.classList.add("active");
    })
  } else {
    document.querySelectorAll(".btn-mushrooms").forEach(function(btnMush) {
      btnMush.classList.remove("active");
    })
  }

  if (state.greenPeppers) {
    document.querySelectorAll(".btn-green-peppers").forEach(function(btnGr) {
      btnGr.classList.add("active");
    })
  } else {
    document.querySelectorAll(".btn-green-peppers").forEach(function(btnGr) {
      btnGr.classList.remove("active");
    })
  }
  
  if (state.whiteSauce) {
    document.querySelectorAll(".btn-sauce").forEach(function(btnSauce) {
      btnSauce.classList.add("active");
    })
  } else {
    document.querySelectorAll(".btn-sauce").forEach(function(btnSauce) {
      btnSauce.classList.remove("active");
    })
  }

  if (state.glutenFreeCrust) {
    document.querySelectorAll(".btn-crust").forEach(function(btnCrust) {
      btnCrust.classList.add("active");
    })
  } else {
    document.querySelectorAll(".btn-crust").forEach(function(btnCrust) {
      btnCrust.classList.remove("active");
    })
  }
}

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  var endPrice = basePrice;
  var list = document.querySelector("aside.panel.price ul");
  list.innerHTML = "";
  for (var ingredientKey in ingredients) {
    if (state[ingredientKey]) {
      endPrice += ingredients[ingredientKey].price;
      list.innerHTML += `<li>$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name.toLowerCase()}<li>`;
    }
  }
  document.querySelector("aside.panel.price strong").innerHTML = "$" + endPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}