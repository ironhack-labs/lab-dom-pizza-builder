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
  document.querySelectorAll('.mushroom').forEach(function(mush){
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    }
    else {
      mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(green){
    if (state.greenPeppers) {
      green.style.visibility = "visible";
    }
    else {
      green.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  var sauce = document.querySelector('.crust .sauce');
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white")
  }
  else sauce.classList.remove("sauce-white")
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  var crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free")
  }
  else crust.classList.remove("crust-gluten-free")
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  var buttonPep = document.querySelector(".btn.btn-pepperonni");
  if (state.pepperonni === true) {
    buttonPep.classList.remove("active")
  } else buttonPep.classList.add("active");

  var buttonMush = document.querySelector(".btn.btn-mushrooms");
  if (state.mushrooms === true) {
    buttonMush.classList.remove("active")
  } else buttonMush.classList.add("active");

  var buttonGreen = document.querySelector(".btn.btn-green-peppers");
  if (state.greenPeppers === true) {
    buttonGreen.classList.remove("active")
  } else buttonGreen.classList.add("active");

  var buttonSauce = document.querySelector(".btn.btn-sauce");
  if (state.whiteSauce === false) {
    buttonSauce.classList.remove("active")
  } else buttonSauce.classList.add("active");

  var buttonCrust = document.querySelector(".btn.btn-crust");
  if (state.glutenFreeCrust === false) {
    buttonCrust.classList.remove("active")
  } else buttonCrust.classList.add("active");
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var itemList = document.getElementById("itemList");
  var totalPrice = document.getElementById("sumPrice");
  var newLi = document.createElement("li");
  var price = 10;

  itemList.innerHTML = "";

  if (state.pepperonni) {
    itemList.innerHTML += `<li>$1 pepperonni</li>`;
    price += ingredients.pepperonni.price;
  }

  if (state.mushrooms) {
    itemList.innerHTML += `<li>$1 mushrooms</li>`;
    price += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    itemList.innerHTML += `<li>$1 green peppers</li>`;
    price += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    itemList.innerHTML += `<li>$3 white sauce</li>`;
    price += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    itemList.innerHTML += `<li>$5 gluten-free crust</li>`;
    price += ingredients.glutenFreeCrust.price;
  }

  totalPrice.innerHTML = `$${price}`;
}



renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}