// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: {
    name: "Pepperonni",
    price: 1
  },
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
var pepBtn = document.querySelector(".btn-pepperonni");

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
      pepBtn.classList.add("active");
      // let li = document.createElement("li");
      // let ul = document.querySelector(".panel.price");
      // // ul.appendChild(li);
      // // li.innerHTML = "$1 pepperonni";
      // ul.innerHTML += `<li class="deffk" >vnelnkel</li`;
    } else {
      $pep.style.visibility = "hidden";
      pepBtn.classList.remove("active");
      //pepAppearPrice.remove();
    }
  });
}
var mushBtn = document.querySelector(".btn-mushrooms");
function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
      mushBtn.classList.add("active");
    } else {
      $mushroom.style.visibility = "hidden";
      mushBtn.classList.remove("active");
    }
  });
}
var greenBtn = document.querySelector(".btn-green-peppers");
function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
      greenBtn.classList.add("active");
    } else {
      $greenPepper.style.visibility = "hidden";
      greenBtn.classList.remove("active");
    }
  });
}
var sauceBtn = document.querySelector(".btn-sauce");
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function(sauce) {
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white");
      sauceBtn.classList.add("active");
    } else {
      sauce.classList.remove("sauce-white");
      sauceBtn.classList.remove("active");
    }
  });
}
var glutenBtn = document.querySelector(".btn-crust");
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function($crust) {
    if (state.glutenFreeCrust) {
      $crust.classList.add("crust-gluten-free");
      glutenBtn.classList.add("active");
    } else {
      $crust.classList.remove("crust-gluten-free");
      glutenBtn.classList.remove("active");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //   document.querySelectorAll(".btn").forEach(function(element) {
  //     for (var ingredient in state) {
  //       if (!state[ingredient]) {
  //         element.classList.toggle("active");
  //       }
  //       // else {
  //       //   element.classList.remove("active");
  //       // }
  //     }
  //   });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pepPrice = document.querySelectorAll("aside ul li")[0];
  let mushPrice = document.querySelectorAll("aside ul li")[1];
  let greenPepPrice = document.querySelectorAll("aside ul li")[2];
  let whiteSaucePrice = document.querySelectorAll("aside ul li")[3];
  let crustPrice = document.querySelectorAll("aside ul li")[4];
  let totalPrice = document.querySelector("aside strong");

  let sum =
    basePrice +
    state.pepperonni * ingredients.pepperonni.price +
    state.mushrooms * ingredients.mushrooms.price +
    state.greenPeppers * ingredients.greenPeppers.price +
    state.whiteSauce * ingredients.whiteSauce.price +
    state.glutenFreeCrust * ingredients.glutenFreeCrust.price;

  if (state.pepperonni) {
    pepPrice.style.display = "block";
  } else {
    pepPrice.style.display = "none";
  }

  if (state.mushrooms) {
    mushPrice.style.display = "block";
  } else {
    mushPrice.style.display = "none";
  }

  if (state.greenPeppers) {
    greenPepPrice.style.display = "block";
  } else {
    greenPepPrice.style.display = "none";
  }

  if (state.whiteSauce) {
    whiteSaucePrice.style.display = "block";
  } else {
    whiteSaucePrice.style.display = "none";
  }

  if (state.glutenFreeCrust) {
    crustPrice.style.display = "block";
  } else {
    crustPrice.style.display = "none";
  }
  totalPrice.innerHTML = `$${sum}`;
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
