// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {
    name: 'Pepperonni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
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
  document.querySelectorAll('.pep').forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function ($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    } else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function ($green) {
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
    } else {
      $green.style.visibility = "hidden";
    }
  })
}


function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function ($sauce) {
    if (state.whiteSauce) {
      $sauce.style.visibility = "visible";
    } else {
      $sauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(function ($crust) {
    if (state.glutenFreeCrust) {
      $crust.style.visibility = "visible";
    } else {
      $crust.style.visibility = "hidden";
    }
  })
}

// get keys to use for matching the indices by extracting keys from state-object
let ingredientKeys = Object.keys(state);

function renderButtons() {
  // based on index being identical for both the buttons and their corresponding position in the state-object, add/remove .active according to state being true/false
  document.querySelectorAll('.btn').forEach(function (ingredient, index) {
    if (state[ingredientKeys[index]]) {
      ingredient.classList.add("active");
    } else {
      ingredient.classList.remove("active");
    }
  })
}


function renderPrice() {
  // base price for pizza is 10
  let totalPrice = 10;
  // access each list item inside .price class and change visibility according to state (again based on the index being identical)
  document.querySelectorAll('.price li').forEach(function (ingredient, index) {
    if (state[ingredientKeys[index]]) {
      // if state == true --> make list item visible
      ingredient.style.visibility = "visible";
      // if state == true --> append ingredient price from ingredients-object to totalPrice
      totalPrice += ingredients[ingredientKeys[index]].price
    } else {
      ingredient.style.visibility = "hidden";
    }
  })
  // overwrite the total price display --> change innerText to the new totalPrice
  document.querySelectorAll(".price strong")[0].innerText = "$" + totalPrice;
}




renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}