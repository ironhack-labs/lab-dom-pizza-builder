// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1, state: true},
  mushrooms: {name: 'Mushrooms', price: 1, state: true},
  greenPeppers: {name: 'Green Peppers', price: 1, state: true},
  whiteSauce: {name: 'White sauce', price: 3, state: false},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5, state: false}
}

// Initial value of the state (the state values can change over time)
// var state = {
//   pepperonni: true,
//   mushrooms: true,
//   greenPeppers: true,
//   whiteSauce: false,
//   glutenFreeCrust: false
// }

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
  document.querySelectorAll('.pep').forEach(function(pep){
    if (ingredients.pepperonni.state) {
      pep.style.visibility = "visible";
    }
    else {
      pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function(mush){
    if (ingredients.mushrooms.state) {
      mush.style.visibility = "visible";
    }
    else {
      mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(gp){
    if (ingredients.greenPeppers.state) {
      gp.style.visibility = "visible";
    }
    else {
      gp.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const wSauce = document.querySelector('.sauce');
    if (!ingredients.whiteSauce.state) {
      wSauce.classList.remove("sauce-white");
    }
    else {
      wSauce.classList.add("sauce-white");
    }
}

function renderGlutenFreeCrust() {
  const glutenFree = document.querySelector('.crust')
  if (!ingredients.glutenFreeCrust.state) {
    glutenFree.classList.remove("crust-gluten-free");
  }
  else {
    glutenFree.classList.add("crust-gluten-free");
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttonPep = document.querySelector(".btn-pepperonni");
  (!ingredients.pepperonni.state ? buttonPep.classList.remove("active") : buttonPep.classList.add("active"));

  const buttonMush = document.querySelector(".btn-mushrooms");
  (!ingredients.mushrooms.state ? buttonMush.classList.remove("active") : buttonMush.classList.add("active"));

  const buttonGp = document.querySelector(".btn-green-peppers");
  (!ingredients.greenPeppers.state ? buttonGp.classList.remove("active") : buttonGp.classList.add("active"));

  const buttonSauce = document.querySelector(".btn-sauce");
  (!ingredients.whiteSauce.state ? buttonSauce.classList.remove("active") : buttonSauce.classList.add("active"));

  const buttonCrust = document.querySelector(".btn-crust");
  (!ingredients.glutenFreeCrust.state ? buttonCrust.classList.remove("active") : buttonCrust.classList.add("active"));
}

function displayLi() {

}

function renderPrice() {
  let total = basePrice;
  let list = document.querySelector(".price > ul");
  list.innerHTML = "";
    if (ingredients.pepperonni.state) {
      total+=ingredients.pepperonni.price;
      list.innerHTML += `<li>$${ingredients.pepperonni.price} ${ingredients.pepperonni.name}</li>`;
    }
    if (ingredients.mushrooms.state) {
      total+=ingredients.mushrooms.price;
      list.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    }
    if (ingredients.greenPeppers.state) {
      total+=ingredients.greenPeppers.price;
      list.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    }
    if (ingredients.whiteSauce.state) {
      total+=ingredients.whiteSauce.price;
      list.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    }
    if (ingredients.glutenFreeCrust.state) {
      total+=ingredients.glutenFreeCrust.price;
      list.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    }
  const totalPayment = document.getElementById("total");
  totalPayment.innerHTML = "$" + total;
}

const totalPayment = document.querySelector("#total");
console.log(totalPayment);


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  ingredients.pepperonni.state = !ingredients.pepperonni.state
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  ingredients.mushrooms.state = !ingredients.mushrooms.state;
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  ingredients.greenPeppers.state = !ingredients.greenPeppers.state;
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  ingredients.whiteSauce.state = !ingredients.whiteSauce.state;
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  ingredients.glutenFreeCrust.state = !ingredients.glutenFreeCrust.state;
  renderEverything()
}