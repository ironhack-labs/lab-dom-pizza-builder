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
  document.querySelectorAll('.green-pepper').forEach(function($gp){
    if (state.greenPeppers) {
      $gp.style.visibility = "visible";
    }
    else {
      $gp.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

    if (state.whiteSauce) {
      document.querySelector('.sauce').className = "sauce sauce-white";
    }
    else {
      document.querySelector('.sauce').className = "sauce";
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').className = "crust crust-gluten-free";
  }
  else {
    document.querySelector('.crust').className = "crust";
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  var stateArray = Object.values(state);
  document.querySelectorAll('.btn').forEach(function($rb, i){
  if($rb.className.includes("active")){
    if ((stateArray[i] == false))
    $rb.classList.remove("active");
  } else if ((stateArray[i] == true)){
    $rb.classList.add("active");
  }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var ingredientArray = Object.values(ingredients);
  var stateArray = Object.values(state);
  let totalPrice = 0;
  document.querySelectorAll('.price ul li').forEach(function($pr, i){
          if (stateArray[i] == false) {
            $pr.style.display = "none";
          }
          else { 
            $pr.style.display = "block";
            totalPrice += ingredientArray[i].price;
          }
    })
    document.querySelector('.price strong').innerText = "$" + (totalPrice + basePrice);
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
document.querySelector('.btn.btn-crust').onclick = function($cr) {
 
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}

