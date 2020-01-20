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
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

var sauce = document.querySelector(".sauce");

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
  let mushrooms = document.querySelectorAll('.mushroom')
  mushrooms.forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = "visible"
    }
    else {
      mushroom.style.visibility = "hidden"
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  let greenPeppers = document.querySelectorAll('.green-pepper')
  greenPeppers.forEach(gPepper => {
    if (state.greenPeppers) {
      gPepper.style.visibility = "visible"
    }
    else {
      gPepper.style.visibility = "hidden"
    }
  });
}



function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white")
  }
  else {
    sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  var crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  }
  else {
    crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni) {
    document.querySelector(".btn.btn-pepperonni").classList.add("active");
  } else {
    document.querySelector(".btn.btn-pepperonni").classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn.btn-sauce").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn.btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  }
}

function renderPrice() {
  //   // Iteration 4: change the HTML of `<aside class="panel price">`
  //   // let panel = document.querySelector(".panel-price")
  //   // let total = 0;
  //   const chosenIngredients = { ...ingredients };
  //   // chosenIngredients.filter(ingredient => state[ingredient] === true)
  //   chosenIngredients.reduce((accum, current) => {...accum, state[current] === true}, { })
  // console.log(ingredients);

  //   // let li = document.createElement("LI")

  //   // li.innerHTML = `<li>$1 pepperonni</li>`
  //   // panel.appendChild(li)
}



renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni;
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything();
}

// ingredient(ingredient, targetclass)