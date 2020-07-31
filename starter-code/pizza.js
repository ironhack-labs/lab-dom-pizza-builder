// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function(mushroom){
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
    } else {
      mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper ').forEach(function(greenpepper){
    if (state.greenPeppers) {
      greenpepper.style.visibility = "visible";
    } else {
      greenpepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
  if(state.whiteSauce) {
    sauce.classList.toggle("sauce-white");
  } else {
    sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  if(state.glutenFreeCrust) {
    crust.classList.toggle("crust-gluten-free");
    // crust.classList.toggle("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

document.querySelectorAll('.btn').forEach(button => {
  let buttonClasses = button.getAttribute("class");

  if(buttonClasses.includes("btn-pepperonni")) {
    if(state.pepperonni) {
      button.setAttribute("class", "btn btn-pepperonni active");
    } else {
      button.setAttribute("class", "btn btn-pepperonni");
    }
  }

  if(buttonClasses.includes("btn-mushrooms")) {
    if(state.mushrooms) {
      button.setAttribute("class", "btn btn-mushrooms active");
    } else {
      button.setAttribute("class", "btn btn-mushrooms");
    }
  }

  if(buttonClasses.includes("btn-green-peppers")) {
    if(state.greenPeppers) {
      button.setAttribute("class", "btn btn-green-peppers active");
    } else {
      button.setAttribute("class", "btn btn-green-peppers");
    }
  }

  if(buttonClasses.includes("btn-sauce")) {
    if(state.whiteSauce) {
      button.setAttribute("class", "btn btn-sauce active");
    } else {
      button.setAttribute("class", "btn btn-sauce");
    }
  }

  if(buttonClasses.includes("btn-crust")) {
    if(state.glutenFreeCrust) {
      button.setAttribute("class", "btn btn-crust active");
    } else {
      button.setAttribute("class", "btn btn-crust");
    }
  }

});

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let price = 10;
  let totalPrice = document.querySelector(".total-price");
  let pepperonniPrice = document.querySelector(".pepperonni-price");
  let mushroomsPrice = document.querySelector(".mushrooms-price");
  let greenPeppersPrice = document.querySelector(".greenPeppers-price");
  let saucePrice = document.querySelector(".whiteSauce-price");
  let crustPrice = document.querySelector(".glutenFreeCrust-price");

  if(state.pepperonni) {
    price += ingredients.pepperonni.price;
    pepperonniPrice.innerHTML = `$${ingredients.pepperonni.price} pepperonni`;
  } else {
    pepperonniPrice.innerHTML = '';
  }
  if(state.mushrooms) {
    price += ingredients.mushrooms.price;
    mushroomsPrice.innerHTML = `$${ingredients.mushrooms.price} mushrooms`;
  } else {
    mushroomsPrice.innerHTML = '';
  }
  if(state.greenPeppers) {
    price += ingredients.greenPeppers.price;
    greenPeppersPrice.innerHTML = `$${ingredients.greenPeppers.price} green peppers`;
  } else {
    greenPeppersPrice.innerHTML = '';
  }
  if(state.whiteSauce) {
    price += ingredients.whiteSauce.price;
    saucePrice.innerHTML = `$${ingredients.whiteSauce.price} white sauce`;
  } else {
    saucePrice.innerHTML = '';
  }
  if(state.glutenFreeCrust) {
    price += ingredients.glutenFreeCrust.price;
    crustPrice.innerHTML = `$${ingredients.glutenFreeCrust.price} gluten free crust`;
  } else {
    crustPrice.innerHTML = '';
  }

totalPrice.innerHTML = `$${price}`;

}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">

document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}