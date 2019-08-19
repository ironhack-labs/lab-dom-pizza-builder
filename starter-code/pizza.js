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
  let sauce = document.querySelector(".sauce");
  if (state.whiteSauce) sauce.classList.add("sauce-white");
  else sauce.classList.remove("sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) crust.classList.add("crust-gluten-free");
  else crust.classList.remove("crust-gluten-free");
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni)
    document.querySelector(".btn.btn-pepperonni").classList.add("active");
  else document.querySelector(".btn.btn-pepperonni").classList.remove("active");

  if (state.mushrooms)
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  else document.querySelector(".btn.btn-mushrooms").classList.remove("active");

  if (state.greenPeppers)
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  else
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");

  if (state.whiteSauce)
    document.querySelector(".btn.btn-sauce").classList.add("active");
  else document.querySelector(".btn.btn-sauce").classList.remove("active");

  if (state.glutenFreeCrust)
    document.querySelector(".btn.btn-crust").classList.add("active");
  else document.querySelector(".btn.btn-crust").classList.remove("active");
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let basicpizzaprice = document.querySelector(".panel.price");
  let pizzaselect = basicpizzaprice.getElementsByTagName("li");
  let totalprice = 10;

  document.querySelector(".price ul").innerHTML = "";
  let newString = "";
  for (let key in state) {
    if (state[key]) {
      newString += ` <li>$${ingredients[key].price} ${
        ingredients[key].name
      }</li>`;
      totalprice += ingredients[key].price;
    }
  }
  document.querySelector(".price ul").innerHTML = newString;
  // if (state.pepperonni) {
  //   pizzaselect[0].style.display = "block";
  //   totalprice++;
  // } else {
  //   pizzaselect[0].style.display = "none";
  // }

  // if (state.mushrooms) {
  //   pizzaselect[1].style.display = "block";
  //   totalprice++;
  // } else {
  //   pizzaselect[1].style.display = "none";
  // }

  // if (state.greenPeppers) {
  //   pizzaselect[2].style.display = "block";
  //   totalprice++;
  // } else {
  //   pizzaselect[2].style.display = "none";
  // }

  // if (state.whiteSauce) {
  //   pizzaselect[3].style.display = "block";
  //   totalprice += 3;
  // } else {
  //   pizzaselect[3].style.display = "none";
  // }

  // if (state.glutenFreeCrust) {
  //   pizzaselect[4].style.display = "block";
  //   totalprice += 5;
  // } else {
  //   pizzaselect[4].style.display = "none";
  // }

  basicpizzaprice.querySelector("strong").innerText = "$" + totalprice;
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
