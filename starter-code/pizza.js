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
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni) {
    document.querySelector(".btn-pepperonni").classList.add("active");
  } else if (!state.pepperoni) {
    document.querySelector(".btn-pepperonni").classList.remove("active");
  }

  if (state.mushrooms) {
    document.querySelector(".btn-mushrooms").classList.add("active");
  } else if (!state.mushrooms) {
    document.querySelector(".btn-mushrooms").classList.remove("active");
  }

  if (state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.add("active");
  } else if (!state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.remove("active");
  }

  if (document.querySelector(".sauce").classList.contains("sauce-white")) {
    document.querySelector(".btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn-sauce").classList.remove("active");
  }

  if (
    document.querySelector(".crust").classList.contains("crust-gluten-free")
  ) {
    document.querySelector(".btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn-crust").classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let finalString = "";
  let finalPrice = 10;
  if (state.pepperonni) {
    finalString += "<li>$1 pepperonni</li>";
    finalPrice += ingredients.pepperonni.price;
  }
  if (state.mushrooms) {
    finalString += "<li>$1 mushrooms</li>";
    finalPrice += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    finalString += "<li>$1 green peppers</li>";
    finalPrice += ingredients.greenPeppers.price;
  }
  if (document.querySelector(".sauce").classList.contains("sauce-white")) {
    finalString += "<li>$3 white sauce</li>";
    finalPrice += ingredients.whiteSauce.price;
  }
  if (
    document.querySelector(".crust").classList.contains("crust-gluten-free")
  ) {
    finalString += "<li>$5 gluten-free crust</li>";
    finalPrice += ingredients.glutenFreeCrust.price;
  }

  document.querySelector("body > aside > ul").innerHTML = finalString;
  document.querySelector("body > aside > strong").innerHTML = finalPrice;
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
  document.querySelector(".sauce").classList.toggle("sauce-white");
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
  document.querySelector(".crust").classList.toggle("crust-gluten-free");
  renderEverything();
};
