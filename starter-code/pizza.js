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


  // Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

  // Iteration 1: set the visibility of `<section class="green-pepper">`


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenpeppers){
    if (state.greenPeppers) {
      $greenpeppers.style.visibility = "visible";
    }
    else {
      $greenpeppers.style.visibility = "hidden";
    }
  })
}


  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  let a = document.querySelector('.sauce');
    if (state.whiteSauce) {
      a.classList.add("sauce-white");
    }
    else {
      a.classList.remove("sauce-white");
    }

}


  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
 let a = document.querySelector('.crust');
    if (state.glutenFreeCrust) {
      a.classList.add("crust-gluten-free");
    }
    else {
      a.classList.remove("crust-gluten-free");
    }
  
}
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  function renderButtons() {
    let a = document.querySelector('.btn-pepperonni');
    if (a.classList.contains("active")) {
      a.classList.remove("active");
    }
    else a.classList.add("active");
}

function renderButtons() {
  let a = document.querySelector('.btn-mushrooms');
  if (a.classList.contains("active")) {
    a.classList.remove("active");
  }
  else a.classList.add("active");
}

function renderButtons() {
  let a = document.querySelector('.btn-green-peppers');
  if (a.classList.contains("active")) {
    a.classList.remove("active");
  }
  else a.classList.add("active");
}

function renderButtons() {
  let a = document.querySelector('.btn-sauce');
  if (a.classList.contains("active")) {
    a.classList.remove("active");
  }
  else a.classList.add("active");
}

function renderButtons() {
  let a = document.querySelector('.btn-crust');
  if (a.classList.contains("active")) {
    a.classList.remove("active");
  }
  else a.classList.add("active");
}

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  let price = basePrice;
  let liste = document.querySelector(".price > ul");
  let total = document.querySelector("strong");
  liste.innerHTML = "";
  if (state.pepperonni){
    liste.innerHTML += `<li>$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}</li>`;
    price += ingredients.pepperonni.price;
  }
  if (state.mushrooms){
    liste.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    price += ingredients.mushrooms.price;
  }
  if (state.greenPeppers){
    liste.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    price += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce){
    liste.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    price += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust){
    liste.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    price += ingredients.glutenFreeCrust.price;
  }
  total.innerHTML = `$ ${price}`
}

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
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
 document.querySelector('.btn.btn-sauce').onclick  = function() {
  state.whiteSauce = !state.whiteSauce
   renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
 document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
 }