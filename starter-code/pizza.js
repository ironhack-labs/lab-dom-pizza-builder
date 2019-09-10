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
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers){
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    }
    else {
      $greenPeppers.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    let sauceAdR = document.querySelector('.sauce'); 
    if (state.whiteSauce) {
      sauceAdR.classList.add("sauce-white");
    }
    else {
      sauceAdR.classList.remove("sauce-white");
    }
  }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustAdR = document.querySelector('.crust'); 
  if (state.glutenFreeCrust) {
    crustAdR.classList.add("crust-gluten-free");
  }
  else {
    crustAdR.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttomPepperoni = document.querySelector('.btn-pepperonni');
  let buttomMushroom = document.querySelector('.btn-mushrooms');
  let buttomGreenPepper = document.querySelector('.btn-green-peppers');
  let buttomSauce =  document.querySelector('.btn-sauce');
  let buttomCrust = document.querySelector('.btn-crust');


  if (state.pepperonni) {
    buttomPepperoni.classList.add("active");
  }
  else {
    buttomPepperoni.classList.remove("active");
  }

  if (state.mushrooms) {
    buttomMushroom.classList.add("active");
  }
  else {
    buttomMushroom.classList.remove("active");
  }

  if (state.greenPeppers) {
    buttomGreenPepper.classList.add("active");
  }
  else {
    buttomGreenPepper.classList.remove("active");
  }

  if (state.whiteSauce) {
    buttomSauce.classList.add("active");
  }
  else {
    buttomSauce.classList.remove("active");
  }

  if (state.glutenFreeCrust) {
    buttomCrust.classList.add("active");
  }
  else {
    buttomCrust.classList.remove("active");
  }
}

function renderPrice() {

  // Iteration 4: change the HTML of `<aside class="panel price">`
  let panelPrice = document.querySelectorAll(".price > ul")[0].innerHTML = "";

  let price = document.querySelectorAll(".price > ul")[0]
  let result = basePrice;
  
  if (state.pepperonni) {
    let pricePepperonni = document.createElement("li")
    pricePepperonni.innerHTML = `$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}`;
    price.appendChild(pricePepperonni);
    result += ingredients.pepperonni.price
  }
  if (state.mushrooms) {
    let priceMushrooms = document.createElement("li")
    priceMushrooms.innerHTML = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
    price.appendChild(priceMushrooms);
    result += ingredients.mushrooms.price
  }
  if (state.greenPeppers) {
    let priceGreenPeppers = document.createElement("li")
    priceGreenPeppers.innerHTML = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
    price.appendChild(priceGreenPeppers);
    result += ingredients.greenPeppers.price
  }
  if (state.whiteSauce) {
    let priceWhiteSauce = document.createElement("li")
    priceWhiteSauce.innerHTML = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
    price.appendChild(priceWhiteSauce);
    result += ingredients.whiteSauce.price
  }
  if (state.glutenFreeCrust) {
    let priceGlutenFreeCrust = document.createElement("li")
    priceGlutenFreeCrust.innerHTML = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
    price.appendChild(priceGlutenFreeCrust);
    result += ingredients.glutenFreeCrust.price
  }
    let priceResult = document.querySelectorAll(".price > strong")[0]
    priceResult.innerHTML = `$${result}`;
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
