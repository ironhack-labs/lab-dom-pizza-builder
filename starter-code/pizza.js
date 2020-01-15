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
      $mushroom.style.visibility ="hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility ="hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const SW = document.querySelector('.sauce');
    if (state.whiteSauce) {
      SW.classList.add('sauce-white');
    }
    else {
      SW.classList.remove('sauce-white');
    }
    // SW.classList.toggle("sauce-white");
  }


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const FC = document.querySelector('.crust');
    if (state.glutenFreeCrust) {
      FC.classList.add('crust-gluten-free');
    }
    else {
      FC.classList.remove('crust-gluten-free');
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepButton = document.querySelector('.btn.btn-pepperonni');
  if (state.pepperonni) {
    pepButton.classList.add('active');
   } 
   else {
    pepButton.classList.remove('active');
  }
  
  const mushButton = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    mushButton.classList.add('active');
  }
  else {mushButton.classList.remove('active');
}
  
  const greenButton = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    greenButton.classList.add('active');
  }
  else {greenButton.classList.remove('active');
}
  
  const sauceButton = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    sauceButton.classList.add('active');
  }
  else {sauceButton.classList.remove('active');
}
  
  const crustButton = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    crustButton.classList.add('active');
  }
  else {crustButton.classList.remove('active');
}
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var endPrice = basePrice;
  var list = document.querySelector("aside.panel.price ul");
  list.innerHTML = "";

  for (let i in ingredients) {
    if (state[i]) {
      endPrice += ingredients[i].price;
      list.innerHTML += `<li>${ingredients[i].price} ${ingredients[i].name}</li>`
    }
  }
  document.querySelector("aside.panel.price strong").innerHTML = "$" + endPrice;
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

