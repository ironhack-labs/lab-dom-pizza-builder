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
  document.querySelectorAll(".mushroom").forEach(function($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($greenPepp) {
    if (state.greenPeppers) {
      $greenPepp.style.visibility = "visible";
    } else {
      $greenPepp.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function($sauce) {
    if (state.whiteSauce) {
      $sauce.classList.add("sauce-white");
    } else {
      $sauce.classList.remove("sauce-white");
    }
  });
}
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function($crust) {
    if (state.glutenFreeCrust) {
      $crust.classList.add("crust-gluten-free");
    } else {
      $crust.classList.remove("crust-gluten-free");
    }
  });
}

//Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  /*créer le tableau allBtn qui recupère tous les button avec la class "btn"
  parcourir le tableau avec la boucle for et enlever a chaque élement 
  du tableau la class "active"
  let allBtn = document.getElementsByClassName("btn");
  for (let i = 0; i < allBtn.length; i++) {
    console.log(allBtn[i]);
    allBtn[i].classList.remove("active");
  }*/
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
renderEverything();

// // Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  let content = document.querySelector(".price");
  let sum = content.querySelector("strong");

  let tagContent = content.querySelector("ul");
  tagContent.innerHTML = "";
  sum.innerHTML = basePrice;
  let newPrice = basePrice;

  if (state.pepperonni) {
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
