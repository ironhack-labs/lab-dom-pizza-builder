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

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach(function($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function($green) {
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
    } else {
      $green.style.visibility = "hidden";
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  const sauce = document.querySelector(".sauce");
  if (state.whiteSauce === false) {
    return sauce.classList.remove("sauce-white");
  } else {
    return sauce.classList.add("sauce-white");
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const crust = document.querySelector(".crust");
  if (state.glutenFreeCrust === false) {
    return crust.classList.remove("crust-gluten-free");
  } else {
    return crust.classList.add("crust-gluten-free");
  }
}

function renderButtons() {
  var ingArr = Object.keys(state);
  document.querySelectorAll(".btn").forEach(function(item, index) {
    if (state[ingArr[index]]) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function renderPrice() {
  var sum = basePrice;
  var ingArr = Object.keys(state);
  document.querySelectorAll(".price li").forEach(function(item, index) {
    if (state[ingArr[index]]) {
      sum = sum + ingredients[ingArr[index]].price;
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
  document.querySelector(".price strong").innerText = `$ ${sum}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  if (state.pepperonni) {
    state.pepperonni = false;
  } else {
    state.pepperonni = true;
  }
  // event.currentTarget.classList.toggle("active");
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  if (state.mushrooms) {
    state.mushrooms = false;
  } else {
    state.mushrooms = true;
  }
  // event.currentTarget.classList.toggle("active");
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  if (state.greenPeppers) {
    state.greenPeppers = false;
  } else {
    state.greenPeppers = true;
  }
  // event.currentTarget.classList.toggle("active");
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  if (state.whiteSauce) {
    state.whiteSauce = false;
  } else {
    state.whiteSauce = true;
  }
  // event.currentTarget.classList.toggle("active");
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
  if (state.glutenFreeCrust) {
    state.glutenFreeCrust = false;
  } else {
    state.glutenFreeCrust = true;
  }
  // event.currentTarget.classList.toggle("active");
  renderEverything();
};
