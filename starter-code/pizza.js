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

console.log(ingredients.pepperonni.price);

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderPrice();
  renderGreenPeppers();
  renderButtons();
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
  document.querySelectorAll(".greenpepper").forEach(function($greenpepper) {
    if (state.greenPeppers) {
      $greenpepper.style.visibility = "visible";
    } else {
      $greenpepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach(function($sauce) {
    if (state.whiteSauce) {
      document.querySelector(".sauce").classList.add("sauce-white");
    } else {
      document.querySelector(".sauce").classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust").forEach(function($crust) {
    if (state.glutenFreeCrust) {
      document.querySelector(".crust").classList.add("crust-gluten-free");
    } else {
      document.querySelector(".crust").classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperonni) {
    document.querySelector(".btn.btn-pepperonni").classList.add("active");
    document.querySelectorAll(".price ul > li")[0].style.visibility = "visible";
  } else {
    document.querySelector(".btn.btn-pepperonni").classList.remove("active");
    document.querySelectorAll(".price ul > li")[0].style.visibility = "hidden";
  }

  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
    document.querySelectorAll(".price ul > li")[1].style.visibility = "visible";
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
    document.querySelectorAll(".price ul > li")[1].style.visibility = "hidden";
  }

  if (state.greenPeppers) {
    document.querySelector(".btn.btn-greenpeppers").classList.add("active");
    document.querySelectorAll(".price ul > li")[2].style.visibility = "visible";
  } else {
    document.querySelector(".btn.btn-greenpeppers").classList.remove("active");
    document.querySelectorAll(".price ul > li")[2].style.visibility = "hidden";
  }

  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active");
    document.querySelectorAll(".price ul > li")[3].style.visibility = "visible";
  } else {
    document.querySelector(".btn.btn-sauce").classList.remove("active");
    document.querySelectorAll(".price ul > li")[3].style.visibility = "hidden";
  }

  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active");
    document.querySelectorAll(".price ul > li")[4].style.visibility = "visible";
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
    document.querySelectorAll(".price ul > li")[4].style.visibility = "hidden";
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var ret = [];
  for (var key in state) {
    if (state[key] === true) {
      ret.push(ingredients[key]); // push element itself
    }
  }
  // console.log(ret);
  let sum = 10;
  for (let i = 0; i < ret.length; i++) {
    sum += ret[i].price; // add ret element price
  }
  document.querySelector(".panel strong").innerText = "$" + sum;

  console.log(sum);
}

// Object.keys(state)
// .filter(function(k){return state[k]})
// .map(Number)
// }

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

// Iteration 1: Add click event listener on `<button class="btn btn-greenpepper">`
document.querySelector(".btn.btn-greenpeppers").onclick = function() {
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
