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
  document.querySelectorAll(".pep").forEach(function(pep) {
    if (state.pepperonni) {
      pep.style.visibility = "visible";
    } else {
      pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function(mush) {
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    } else {
      mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function(gPep) {
    if (state.greenPeppers) {
      gPep.style.visibility = "visible";
    } else {
      gPep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // document.querySelectorAll(".btn").forEach(function(btn) {
  //   btn.classList.toggle("active");
  // });

  if (state.pepperonni) {
    document.querySelector(".btn-pepperonni").classList.add("active");
  } else {
    document.querySelector(".btn-pepperonni").classList.remove("active");
  }

  if (state.mushrooms) {
    document.querySelector(".btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn-mushrooms").classList.remove("active");
  }

  if (state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn-green-peppers").classList.remove("active");
  }

  if (state.whiteSauce) {
    document.querySelector(".btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn-sauce").classList.remove("active");
  }

  if (state.glutenFreeCrust) {
    document.querySelector(".btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn-crust").classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let priceList = document.querySelector(".panel.price>ul");
  priceList.innerHTML = "";

  if (state.mushrooms) {
    priceList.innerHTML += `<li>$ ${ingredients.mushrooms.price} mushrooms</li>`;
  }

  if (state.pepperonni) {
    priceList.innerHTML += `<li>$ ${ingredients.pepperonni.price} pepperonni</li>`;
  }

  if (state.greenPeppers) {
    priceList.innerHTML += `<li>$ ${ingredients.greenPeppers.price} green Peppers</li>`;
  }

  if (state.whiteSauce) {
    priceList.innerHTML += `<li>$ ${ingredients.whiteSauce.price} white Sauce</li>`;
  }

  if (state.glutenFreeCrust) {
    priceList.innerHTML += `<li>$ ${ingredients.glutenFreeCrust.price} gluten-free Crust</li>`;
  }

  document.querySelector(
    ".panel.price>strong"
  ).innerHTML = `$ ${calculatePrice()}`;
}

function calculatePrice() {
  let ingredientsPrice = 0;
  if (state.mushrooms) {
    ingredientsPrice += ingredients.mushrooms.price;
  }

  if (state.pepperonni) {
    ingredientsPrice += ingredients.pepperonni.price;
  }

  if (state.greenPeppers) {
    ingredientsPrice += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    ingredientsPrice += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    ingredientsPrice += ingredients.glutenFreeCrust.price;
  }

  return basePrice + ingredientsPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = pepperonniClick;

function pepperonniClick() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").onclick = mushroomClick;

function mushroomClick() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector(".btn.btn-green-peppers").onclick = pepperClick;

function pepperClick() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").onclick = sauceClick;

function sauceClick() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").onclick = crustClick;

function crustClick() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}
