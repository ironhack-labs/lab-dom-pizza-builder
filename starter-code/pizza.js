// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: {
    name: "Pepperonni",
    price: 1
  },
  mushrooms: {
    name: "Mushrooms",
    price: 1
  },
  greenPeppers: {
    name: "Green Peppers",
    price: 1
  },
  whiteSauce: {
    name: "White sauce",
    price: 3
  },
  glutenFreeCrust: {
    name: "Gluten-free crust",
    price: 5
  }
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
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function ($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function ($green) {
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
      // console.log("visible")
    } else {
      $green.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach(function (sauce) {
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white");
    } else {
      sauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function ($crust) {
    if (state.glutenFreeCrust) {
      $crust.classList.add("crust-gluten-free");
    } else {
      $crust.classList.remove("crust-gluten-free");
    }
  });
}

function renderPrice() {
  // on récupère le block aside .price
  let content = document.querySelector(".price");

  // on recupere la balise strong qui est dans l'element "content"
  // créé au dessus
  let sum = content.querySelector("strong");

  // on récupère l'element ul de la variable "content"
  let tagContent = content.querySelector("ul");

  // on initialise tagContent vide à chaque appel de la fonction
  tagContent.innerHTML = "";
  sum.innerHTML = basePrice;
  let newPrice = basePrice;

  if (state.pepperonni) {
    // si state pepperonni true on ajoute li dans le tagcontent
    tagContent.innerHTML = "<li>$1 pepperonni</li>";
    newPrice = newPrice + ingredients.pepperonni.price;
  }
  if (state.mushrooms) {
    tagContent.innerHTML += "<li>$1 mushrooms</li>";
    newPrice = newPrice + ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    tagContent.innerHTML += "<li>$1 green peppers</li>";
    newPrice = newPrice + ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    tagContent.innerHTML += "<li>$3 white sauce</li>";
    newPrice = newPrice + ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    tagContent.innerHTML += "<li>$5 gluten-free crust</li>";
    newPrice = newPrice + ingredients.glutenFreeCrust.price;
  }

  sum.innerHTML = "$" + newPrice;
}
renderEverything();


var pepButton = document.querySelector(".btn.btn-pepperonni");
var mushButton = document.querySelector(".btn.btn-mushrooms");
var sauceButton = document.querySelector(".btn.btn-sauce");
var greenButton = document.querySelector(".btn.btn-green-peppers");
var gfreeButton = document.querySelector(".btn.btn-crust");
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
pepButton.onclick = function () {
  state.pepperonni = !state.pepperonni;
  pepButton.classList.toggle("active");
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

mushButton.onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  mushButton.classList.toggle("active");
};

greenButton.onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  greenButton.classList.toggle("active");
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

sauceButton.onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
  sauceButton.classList.toggle("active");
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

gfreeButton.onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  gfreeButton.classList.toggle("active");
};