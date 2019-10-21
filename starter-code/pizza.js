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
function renderEverything(elem) {
  var button = elem;
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons(button)
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
  document.querySelectorAll(".mushroom").forEach(function ($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(function ($greenPepper) {
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    } else {
      $greenPepper.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white")
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white")
  }

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free")
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free")
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons(button) {

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (button !== undefined) {
    button.classList.toggle("active")
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const panelPrice = document.querySelector(".panel.price ul");

  panelPrice.innerText = ""

  let totalPrice = document.querySelector(".panel.price strong");
  let total = parseInt(document.querySelector(".panel.price b").innerText.slice(1));
  Object.keys(state).map(function (key, index, array) {

    let newPriceItem = document.createElement("li");
    if (state[key]) {
      if (array[index] === "pepperonni") {
        newPriceItem.innerText = "$1 pepperonni"
        panelPrice.appendChild(newPriceItem)
        total += ingredients.pepperonni.price
      }
      if (array[index] === "mushrooms") {
        newPriceItem.innerText = "$1 mushrooms"
        panelPrice.appendChild(newPriceItem)
        total += ingredients.mushrooms.price
      }
      if (array[index] === "greenPeppers") {
        newPriceItem.innerText = "$1 green peppers"
        panelPrice.appendChild(newPriceItem)
        total += ingredients.greenPeppers.price
      }
      if (array[index] === "whiteSauce") {
        newPriceItem.innerText = "$3 white sauce"
        panelPrice.appendChild(newPriceItem)
        total += ingredients.whiteSauce.price
      }
      if (array[index] === "glutenFreeCrust") {
        newPriceItem.innerText = "$5 gluten-free crust"
        panelPrice.appendChild(newPriceItem)
        total += ingredients.glutenFreeCrust.price
      }
    }
  })
  totalPrice.innerText = "$" + String(total)

}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function (event) {
  state.pepperonni = !state.pepperonni
  renderEverything(event.currentTarget)
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function (event) {
  state.mushrooms = !state.mushrooms
  renderEverything(event.currentTarget)
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function (event) {
  state.greenPeppers = !state.greenPeppers
  renderEverything(event.currentTarget)
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").onclick = function (event) {
  state.whiteSauce = !state.whiteSauce
  renderEverything(event.currentTarget)
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function (event) {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything(event.currentTarget)
}