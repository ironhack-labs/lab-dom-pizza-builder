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
  document.querySelectorAll('.green-pepper').forEach(function($greenpepper){
    if (state.greenPeppers) {
      $greenpepper.style.visibility = "visible";
    }
    else {
      $greenpepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let element = document.querySelector(".sauce")
  if (!state.whiteSauce){
    element.classList.remove("sauce-white")
  } else {
    element.classList.add("sauce-white")
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let element = document.querySelector(".crust")
  if (!state.glutenFreeCrust){
    element.classList.remove("crust-gluten-free")
  } else{
    element.classList.add("crust-gluten-free")
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  const buttonPep = document.querySelector(".btn-pepperonni");
  if (!state.pepperonni) {
    buttonPep.classList.remove("active");
  } else {
    buttonPep.classList.add("active");
  }

  const buttonMush = document.querySelector(".btn-mushrooms");
  if (!state.mushrooms) {
    buttonMush.classList.remove("active");
  } else {
    buttonMush.classList.add("active");
  }

  const buttonPeppers = document.querySelector(".btn-green-peppers");
  if (!state.greenPeppers) {
    buttonPeppers.classList.remove("active");
  } else {
    buttonPeppers.classList.add("active");
  }

  const buttonSouce = document.querySelector(".btn-sauce");
  if (!state.whiteSauce) {
    buttonSouce.classList.remove("active");
  } else {
    buttonSouce.classList.add("active");
  }

  const buttonGlutenFree = document.querySelector(".btn-crust");
  if (!state.glutenFreeCrust) {
    buttonGlutenFree.classList.remove("active");
  } else {
    buttonGlutenFree.classList.add("active");
  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let price = basePrice;
  let list = document.querySelector(".price > ul");
  let total = document.querySelector("strong"); 

  list.innerHTML = "";

  if (state.pepperonni){
    list.innerHTML += `<li>$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}</li>`;
    price += ingredients.pepperonni.price;
  }

  if (state.mushrooms){
    list.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    price += ingredients.mushrooms.price;
  }

  if (state.greenPeppers){
    list.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    price += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce){
    list.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    price += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust){
    list.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    price += ingredients.glutenFreeCrust.price;
  }

  total.innerHTML = `$${price}`;


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