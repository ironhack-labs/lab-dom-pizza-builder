// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
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
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible"
    } else {
      $pep.style.visibility = "hidden"
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible"
    } else {
      $mushroom.style.visibility = "hidden"
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible"
    } else {
      $greenPepper.style.visibility = "hidden"
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.getElementsByClassName("sauce")
  if (state.whiteSauce) {
    sauce[0].classList.add("sauce-white")
  } else {
    sauce[0].classList.remove("sauce-white")
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.getElementsByClassName("crust")
  if (state.glutenFreeCrust) {
    crust[0].classList.add("crust-gluten-free")
  } else {
    crust[0].classList.remove("crust-gluten-free")
  }
}

function renderButtons(stateIngredient, btnIngredient) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  for (const ing in state) {
    let ingClass = ing
    if (ing === "greenPeppers") ingClass = "green-peppers"
    if (ing === "glutenFreeCrust") ingClass = "crust"
    if (ing === "whiteSauce") ingClass = "sauce"
    if (state[ing]) {
      document.querySelector(`.btn.btn-${ingClass}`).classList.add("active")
    } else {
      document.querySelector(`.btn.btn-${ingClass}`).classList.remove("active")
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = 10
  const panel = document.querySelector(".panel.price ul")
  panel.classList.add("list-price")
  const list = document.querySelectorAll(".list-price li")
  list.forEach(li => {
    for (const ing in state) {
      let ingSearch = ing
      if (ing === "greenPeppers") ingSearch = "green peppers"
      if (ing === "glutenFreeCrust") ingSearch = "gluten-free crust"
      if (ing === "whiteSauce") ingSearch = "white sauce"
      if (li.innerHTML.indexOf(ingSearch) >= 0) {
        if (!state[ing]) li.style.visibility = "hidden"
        if (state[ing]) li.style.visibility = "visible"
      }
    }
    if (li.innerText.indexOf("$") >= 0) {
      const priceNumber = Number(li.innerText.split(" ")[0].replace("$", ""))
      total += priceNumber
    }
  })
  document.querySelector(".panel.price strong").innerText = `$${total}`
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}
