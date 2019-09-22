// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: false,
  mushrooms: false,
  greenPeppers: false,
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
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = "visible"
    } else {
      mush.style.visibility = "hidden"
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(green => {
    state.greenPeppers ? green.style.visibility = "visible" : green.style.visibility = "hidden"
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(sauce => {
    state.whiteSauce ? sauce.style.visibility = "visible" : sauce.style.visibility = "hidden"
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(crust => {
    state.glutenFreeCrust ? crust.style.visibility = "visible" : crust.style.visibility = "hidden"
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  Array.from(document.getElementsByClassName("btn")).forEach(btn => {

    const btnName = btn.getAttribute("class")
    if (btnName.includes("pepperonni")) {
      state.pepperonni ? btn.classList.add("active") : btn.classList.remove("active")
    } else if (btnName.includes("mushroom")) {
      state.mushrooms ? btn.classList.add("active") : btn.classList.remove("active")
    } else if (btnName.includes("green")) {
      state.greenPeppers ? btn.classList.add("active") : btn.classList.remove("active")
    } else if (btnName.includes("sauce")) {
      state.whiteSauce ? btn.classList.add("active") : btn.classList.remove("active")
    } else if (btnName.includes("crust")) {
      state.glutenFreeCrust ? btn.classList.add("active") : btn.classList.remove("active")
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const list = document.getElementById("ingredients-list")

  // Primero se elimina la lista entera
  document.querySelectorAll(".ingredients-list").forEach(ingredient => {
    ingredient.remove()
  })

  // Se crean los elementos
  const stateKeys = Object.keys(state)
  let totalPrice = basePrice
  for (let i = 0; i < stateKeys.length; i++) {
    if (state[stateKeys[i]] === true) {
      const li = document.createElement("li")
      li.innerText = `$${ingredients[stateKeys[i]].price}  ${ingredients[stateKeys[i]].name}`
      li.setAttribute('class', 'ingredients-list')
      list.append(li)
      totalPrice += ingredients[stateKeys[i]].price
    }
  }

  // Se actualiza el precio final
  const totalPriceElement = document.getElementById("total-price")
  totalPriceElement.innerText = `$${totalPrice}`

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
document.querySelector(".btn.btn-green-peppers").onclick = function () {
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