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
  document.querySelectorAll(".mushroom").forEach(function(mushrooms) {
    if (state.mushrooms) {
      mushrooms.style.visibility = "visible";
    } else {
      mushrooms.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function(peppers) {
    if (state.greenPeppers) {
      peppers.style.visibility = "visible";
    } else {
      peppers.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce-white").forEach(function(whiteSauce) {
    if (state.whiteSauce) {
      whiteSauce.style.visibility = "visible";
    } else {
      whiteSauce.style.visibility = "hidden";
    }
  });
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // if (state.pepperonni) {
  //   document.querySelector(".btn.btn-pepperonni").classList.add("active");
  // } else {
  //   document.querySelector(".btn.btn-pepperonni").classList.remove("active");
  // }
  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn-sauce").classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  }
}

//for (const key in state) {
//  document.querySelectorAll(".btn").forEach(function(button) {
//    button.classList.toggle("active");
//  });
// }

function renderPrice() {
  document.querySelector(".price ul").innerHTML = "";
  let newText = "";
  let sum = basePrice;
  for (const element in state) {
    if (state[element]) {
      sum += ingredients[element].price;
      newText += `<li>$${ingredients[element].price} ${ingredients[element].name}  </li>`;
    }
  }
  document.querySelector("strong").innerText = `$${sum}`;
  document.querySelector(".price ul").innerHTML = newText;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  document.querySelector(".btn.btn-pepperonni").classList.toggle("active");
  renderEverything();
};

document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
