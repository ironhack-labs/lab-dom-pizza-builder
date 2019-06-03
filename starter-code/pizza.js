// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3000 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
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
  renderPrice2()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function ($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function ($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function ($sauce) {
    if (state.whiteSauce) {
      $sauce.classList.add('sauce-white');
    }
    else {
      $sauce.classList.remove('sauce-white');
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function ($crust) {
    if (state.glutenFreeCrust) {
      $crust.classList.add('crust-gluten-free');
    }
    else {
      $crust.classList.remove('crust-gluten-free');
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice2() {

  document.getElementById("ingredients").innerHTML = "";
  amount = 10;

  for (let item in ingredients) {

    (state[item]) ? addChildToIngredients(item) : removeChildFromIngredients(item);
    amount += + (Boolean(state[item])) * +(ingredients[item].price);
  }

  document.getElementById("sum").innerHTML = "$ " + amount;

}

function removeChildFromIngredients(child) {

  ItemToRemove = document.getElementById(child);
  if (ItemToRemove) document.getElementById("ingredients").removeChild(ItemToRemove);

}

function addChildToIngredients(child) {

  newItem = document.createElement("li");
  newItem.id = child;
  newItem.innerHTML = "$" + ingredients[child].price + " " + ingredients[child].name;
  document.getElementById("ingredients").appendChild(newItem);

}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function (e) {

  e.target.classList.toggle("active");
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').onclick = function (e) {
  e.target.classList.toggle("active");
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').onclick = function (e) {
  e.target.classList.toggle("active");
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = function (e) {
  e.target.classList.toggle("active");
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').onclick = function (e) {
  e.target.classList.toggle("active");
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}
