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
  console.log(state);
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

  document.querySelectorAll(".green-pepper").forEach(function($greenPeppers) {
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    } else {
      $greenPeppers.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  const newSauce = document.querySelector(".sauce");

  if (state.whiteSauce) {
    newSauce.classList.add("sauce-white");
  } else {
    newSauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  const newCrust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    newCrust.classList.add("crust-gluten-free");
  } else {
    newCrust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  const newPepperonni = document.querySelector(".btn-pepperonni");
  if (state.pepperonni) {
    newPepperonni.classList.add("active");
  } else {
    newPepperonni.classList.remove("active");
  }
  const newMushrooms = document.querySelector(".btn-mushrooms");
  if (state.mushrooms) {
    newMushrooms.classList.add("active");
  } else {
    newMushrooms.classList.remove("active");
  }
  const newGreenPepper = document.querySelector(".btn-green-peppers");
  if (state.greenPeppers) {
    newGreenPepper.classList.add("active");
  } else {
    newGreenPepper.classList.remove("active");
  }

  const newSauce = document.querySelector(".btn-sauce");
  if (state.whiteSauce) {
    newSauce.classList.add("active");
  } else {
    newSauce.classList.remove("active");
  }
  const newCrust = document.querySelector(".btn-crust");
  if (state.glutenFreeCrust) {
    newCrust.classList.add("active");
  } else {
    newCrust.classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let totalPrice = 10;

  const listPepperonni = document.querySelectorAll("aside > ul > li")[0];

  if (state.pepperonni) {
    listPepperonni.style.visibility = "visible";
    totalPrice += ingredients.pepperonni.price;
  } else {
    listPepperonni.style.visibility = "hidden";
  }

  const listMushrooms = document.querySelectorAll("aside > ul > li")[1];

  if (state.mushrooms) {
    listMushrooms.style.visibility = "visible";
    totalPrice += ingredients.mushrooms.price;
  } else {
    listMushrooms.style.visibility = "hidden";
  }

  const listGreenPepper = document.querySelectorAll("aside > ul > li")[2];

  if (state.greenPeppers) {
    listGreenPepper.style.visibility = "visible";
    totalPrice += ingredients.greenPeppers.price;
  } else {
    listGreenPepper.style.visibility = "hidden";
  }

  const listWhiteSauce = document.querySelectorAll("aside > ul > li")[3];

  if (state.whiteSauce) {
    listWhiteSauce.style.visibility = "visible";
    totalPrice += ingredients.whiteSauce.price;
  } else {
    listWhiteSauce.style.visibility = "hidden";
  }

  const listCrust = document.querySelectorAll("aside > ul > li")[4];

  if (state.glutenFreeCrust) {
    listCrust.style.visibility = "visible";
    totalPrice += ingredients.glutenFreeCrust.price;
  } else {
    listCrust.style.visibility = "hidden";
  }

  const price = document.querySelector("strong");
  price.innerText = `$ ${totalPrice}`;
}

// renderEverything

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
