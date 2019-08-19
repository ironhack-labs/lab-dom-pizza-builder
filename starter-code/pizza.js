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
  document.querySelectorAll('.pep').forEach(function (pep) {
    if (state.pepperonni) {
      pep.style.visibility = "visible";
    } else {
      pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function (mushroom) {
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
    } else {
      mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function (greenPepper) {
    if (state.greenPeppers) {
      greenPepper.style.visibility = "visible";
    } else {
      greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function (whiteSauce) {
    if (state.whiteSauce) {
      whiteSauce.classList.add("sauce-white");
    } else {
      whiteSauce.classList.remove("sauce-white");
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function (glutenFreeCrust) {
    if (state.glutenFreeCrust) {
      glutenFreeCrust.classList.add("crust-gluten-free");
    } else {
      glutenFreeCrust.classList.remove("crust-gluten-free");
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepperoniButton = document.querySelector("button.btn-pepperonni")
  if (state.pepperonni) {
    pepperoniButton.classList.add("active")
  } else {
    pepperoniButton.classList.remove("active")
  }
  let mushroomButton = document.querySelector("button.btn-mushrooms")
  if (state.mushrooms) {
    mushroomButton.classList.add("active")
  } else {
    mushroomButton.classList.remove("active")
  }
  let greenPepperButton = document.querySelector("button.btn-green-peppers")
  if (state.greenPeppers) {
    greenPepperButton.classList.add("active")
  } else {
    greenPepperButton.classList.remove("active")
  }
  let whiteSauceButton = document.querySelector("button.btn-sauce")
  if (state.whiteSauce) {
    whiteSauceButton.classList.add("active")
  } else {
    whiteSauceButton.classList.remove("active")
  }
  let crustButton = document.querySelector("button.btn-crust")
  if (state.glutenFreeCrust) {
    crustButton.classList.add("active")
  } else {
    crustButton.classList.remove("active")
  }
}

function renderPrice() {

  let newString = ""
  let totPrice = 10;
  document.querySelector(".price ul").innerHTML = ""
  for (let ingredient in state) {
    if (state[ingredient]) {
      newString += `  <li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
      totPrice += ingredients[ingredient].price
    }

  }
  document.querySelector(".price ul").innerHTML = newString
  document.querySelector(".price strong").innerHTML = `$${totPrice} `

  // thanks Min!!

}
renderEverything()
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}