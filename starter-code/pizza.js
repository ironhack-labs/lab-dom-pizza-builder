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
  document.querySelectorAll(".mushroom").forEach(function($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function($greenP) {
    if (state.greenPeppers) {
      $greenP.style.visibility = "visible";
    } else {
      $greenP.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  const sauceWhite = document.querySelectorAll(".sauce");

  for (let i = 0; i < sauceWhite.length; i++) {
    if (
      !sauceWhite[i].getAttribute("class").includes("sauce-white") &
      (state.whiteSauce)
    ) {
      sauceWhite[i].classList.toggle("sauce-white");
    } else {
      sauceWhite[i].setAttribute("class", "sauce");
    }
  }
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderGlutenFreeCrust() {
  const GlutenFreeCrust = document.querySelectorAll(".crust");

  for (let i = 0; i < GlutenFreeCrust.length; i++) {
    if (state.glutenFreeCrust) {
      GlutenFreeCrust[i].classList.toggle("crust-gluten-free");
    } else {
      GlutenFreeCrust[i].setAttribute("class", "crust");
    }
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderButtons(buttonClicked) {
  buttonClicked.target.classList.toggle("active");
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderPrice() {
  var asideTag = "";
  var TotalPrice = basePrice;

  if (state.pepperonni) {
    TotalPrice += ingredients.pepperonni.price;
    asideTag += `<li>$1 pepperonni</li>`;
  }
  if (state.mushrooms) {
    TotalPrice += ingredients.mushrooms.price;
    asideTag += `<li>$1 mushrooms</li>`;
  }
  if (state.greenPeppers) {
    TotalPrice += ingredients.greenPeppers.price;
    asideTag += `<li>$1 green peppers</li>`;
  }
  if (state.whiteSauce) {
    TotalPrice += ingredients.whiteSauce.price;
    asideTag += `<li>$3 white sauce</li>`;
  }
  if (state.glutenFreeCrust) {
    TotalPrice += ingredients.glutenFreeCrust.price;
    asideTag += `<li>$5 gluten-free crust</li>`;
  }

  asideTag += `</ul><strong>$${TotalPrice}</strong>`;
  document.getElementById("price").innerHTML = asideTag;
}

// Iteration 4: change the HTML of `<aside class="panel price">`

renderPrice();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function(event) {
  state.pepperonni = !state.pepperonni;
  renderPepperonni();
  renderButtons(event);
  renderPrice();
};
document.querySelector(".btn.btn-mushrooms").onclick = function(event) {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  renderButtons(event);
  renderPrice();
};
document.querySelector(".btn.btn-green-peppers").onclick = function(event) {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
  renderButtons(event);
  renderPrice();
};
document.querySelector(".btn.btn-sauce").onclick = function(event) {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderButtons(event);
  renderPrice();
};
document.querySelector(".btn.btn-crust").onclick = function(event) {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderButtons(event);
  renderPrice();
};
