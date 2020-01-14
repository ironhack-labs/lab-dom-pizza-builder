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
//状態の初期値（状態値は時間とともに変化する可能性があります）
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
//この関数は、状態に基づいてピザをレンダリングします
//この関数は、開始時に一度、状態が変更されるたびにトリガーされます
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
  document.querySelectorAll(".mushroom").forEach(function(mushroom) {
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
    } else {
      mushroom.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function(greenPepper) {
    if (state.greenPeppers) {
      greenPepper.style.visibility = "visible";
    } else {
      greenPepper.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach(function(white) {
    if (state.whiteSauce) {
      white.classList.add("sauce-white");
    } else {
      white.classList.remove("sauce-white");
    }
  });
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust").forEach(function(crustFree) {
    if (state.glutenFreeCrust) {
      crustFree.classList.add("crust-gluten-free");
    } else {
      crustFree.classList.remove("crust-gluten-free");
    }
  });

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

document.querySelectorAll("active").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};

function renderButtons() {
  /*
  document.getElementsByClassName(".btn").forEach(function(button) {
    button.onclick = toggleButton;
  });

  function toggleButton() {
    const currenButton = event.target;
    currentButton.classList.toggle("btn.active");
  }
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`*/

  if (state.pepperonni) {
    document.querySelector(".btn.btn-pepperonni").classList.add("active");
  } else {
    document.querySelector(".btn.btn-pepperonni").classList.remove("active");
  }

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
    document.querySelector(".btn.btn-sauce").classList.remove("active");
  }

  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  }
}

function renderPrice() {
  document.querySelector(".price").onclick = function() {
    state.pepperonni = !state.pepperonni;
    renderEverything();
  };
}

// Iteration 4: change the HTML of `<aside class="panel price">`

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

function hjbu() {
  return;
  console.log("hhuihi");
}
