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
  document.querySelectorAll(".green-pepper").forEach(function($greenpepper) {
    if (state.greenPeppers) {
      $greenpepper.style.visibility = "visible";
    } else {
      $greenpepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }
  // document.querySelector('.sauce')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

let classesInHtml = {
  pepperonni: "pepperonni",
  greenPeppers: "green-peppers",
  mushrooms: "mushrooms",
  whiteSauce: "sauce",
  glutenFreeCrust: "crust"
};

function renderButtons() {
  console.log(state);
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  for (let something in state) {
    if (state[something]) {
      document
        .querySelector(`.btn-${classesInHtml[something]}`)
        .classList.add("active");
    } else {
      document
        .querySelector(`.btn-${classesInHtml[something]}`)
        .classList.remove("active");
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let total = 10;
  // console.log(document.querySelectorAll(".price > ul > li"));

  let $ingredients = document.querySelectorAll(".price > ul > li");
  console.log($ingredients);
  console.log($ingredients[0]);

  if (state.pepperonni === true) {
    $ingredients[0].style.visibility = "visible";
    total += 1;
  } else {
    $ingredients[0].style.visibility = "hidden";
  }

  if (state.mushrooms === true) {
    $ingredients[1].style.visibility = "visible";
    total += 1;
  } else {
    $ingredients[1].style.visibility = "hidden";
  }

  if (state.greenPeppers === true) {
    $ingredients[2].style.visibility = "visible";
    total += 1;
  } else {
    $ingredients[2].style.visibility = "hidden";
  }

  if (state.whiteSauce === true) {
    $ingredients[3].style.visibility = "visible";
    total += 3;
  } else {
    $ingredients[3].style.visibility = "hidden";
  }

  if (state.glutenFreeCrust === true) {
    $ingredients[4].style.visibility = "visible";
    total += 5;
  } else {
    $ingredients[4].style.visibility = "hidden";
  }

  document.querySelector(".price > strong").innerHTML = `$${total}`;
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
