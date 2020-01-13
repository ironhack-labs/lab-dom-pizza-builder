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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    } else {
      $greenPepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function(element) {
    if (state.whiteSauce) {
      element.classList.add("sauce-white");
    } else {
      element.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function(element) {
    if (state.glutenFreeCrust) {
      element.classList.add("crust-gluten-free");
    } else {
      element.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // This is included in the click event listeners below
  // if (state.pepperonni) {
  //   document.querySelector(".btn.btn-pepperonni").classList.add("active");
  // } else {
  //   document.querySelector(".btn.btn-pepperonni").classList.remove("active");
  // }
  // if (state.mushrooms) {
  //   document.querySelector(".btn.btn-mushrooms").classList.add("active");
  // } else {
  //   document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  // }
  // if (state.greenPeppers) {
  //   document.querySelector(".btn.btn-green-peppers").classList.add("active");
  // } else {
  //   document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  // }
  // if (state.whiteSauce) {
  //   document.querySelector(".btn.btn-sauce").classList.add("active");
  // } else {
  //   document.querySelector(".btn.btn-sauce").classList.remove("active");
  // }
  // if (state.glutenFreeCrust) {
  //   document.querySelector(".btn.btn-crust").classList.add("active");
  // } else {
  //   document.querySelector(".btn.btn-crust").classList.remove("active");
  // }
}

// if (state.mushrooms) {
//   element.classList.add("active");
// } else {
//   element.classList.remove("active");
// }

// if (state.greenPeppers) {
//   element.classList.add("active");
// } else {
//   element.classList.remove("active");
// }

// if (state.whiteSauce) {
//   element.classList.add("active");
// } else {
//   element.classList.remove("active");
// }

// if (state.glutenFreeCrust) {
//   element.classList.add("active");
// } else {
//   element.classList.remove("active");
// }

//element.onclick = toggleButtonStyle;
//   for (key in state) {
//  if (key) {
//    element.classList.add(".active");
//  } else {
//    element.classList.remove(".active");

//  function toggleButtonStyle(event) {
//   const currentTarget = event.target;
//   currentTarget.classList.toggle(".active");

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  //iterate through state
  let finalString = "";
  finalString += "<li>$1 pepperonni</li>";
  for (key in state) {
    //is value of key true?
    if (state[key]) {
      // Step 1: if true than add ingredients[key].price to baseprice
      totalPrice += ingredients[key].price;
    }

    // Step 2: set li elements to hidden or visible
    document.querySelectorAll(".panel.price > ul > li").forEach(element => {
      if (
        element.innerHTML.indexOf(ingredients[key].name.toLowerCase()) !== -1
      ) {
        element.style.visibility = state[key] ? "visible" : "hidden";
      }
    });
  }

  document.querySelector("body > aside > strong").innerHTML = "$" + totalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  event.target.classList.toggle("active");
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  event.target.classList.toggle("active");
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  event.target.classList.toggle("active");
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  event.target.classList.toggle("active");
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
  event.target.classList.toggle("active");
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
