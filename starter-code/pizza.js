// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  extraCheese: {name: 'Extra Cheese', price: 1},
  extraCut: {name: 'Extra Cut', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  extraCheese: false,
  extraCut: false,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderExtraCheese()

  renderExtraCut();

  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    $pep.style.visibility = (state.pepperonni === true) ? "visible" : "hidden";
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    $mushroom.style.visibility = (state.mushrooms === true) ? "visible" : "hidden";
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    $greenPepper.style.visibility = (state.greenPeppers === true) ? "visible" : "hidden";
  })
}

function renderExtraCheese() {
  // Iteration 1: set the visibility of `<section class="extra-cheese">`
  document.querySelectorAll('.extra-cheese').forEach(function($extraCheese){
    $extraCheese.style.visibility = (state.extraCheese === true) ? "visible" : "hidden";
  })
}

function renderExtraCut() {
  // Iteration 1: set the visibility of `<section class="extra-cut">`
  document.querySelectorAll('.extra-cut').forEach(function($extraCut){
    $extraCut.style.visibility = (state.extraCut === true) ? "visible" : "hidden";
    if (state.glutenFreeCrust === true) {
      $extraCut.style.margin = "50px 0 0 50px";
      $extraCut.style.width = "600px";
      $extraCut.style.height = "600px";
    } else {
      $extraCut.style.margin = "0";
      $extraCut.style.width = "700px";
      $extraCut.style.height = "700px";
    }
  })
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce === true) {
    document.querySelector('.sauce').classList.add("sauce-white");
  }
  else {
    document.querySelector('.sauce').classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust === true) {
    document.querySelector('.crust').classList.add("crust-gluten-free");
  }
  else {
    document.querySelector('.crust').classList.remove("crust-gluten-free");
  }
}

function toggleButton( key, state, button ){
  if( button.className.includes(key) ) {
    if( state === true ) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }
}
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(function($button){
    toggleButton("btn-pepperonni", state.pepperonni, $button );
    toggleButton("btn-mushrooms", state.mushrooms, $button );
    toggleButton("btn-green-peppers", state.greenPeppers, $button );
    toggleButton("btn-sauce", state.whiteSauce, $button );
    toggleButton("btn-crust", state.glutenFreeCrust, $button );
    toggleButton("btn-extra-cheese", state.extraCheese, $button );
    toggleButton("btn-extra-cut", state.extraCut, $button );
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  let priceItems = document.querySelectorAll('.price li');
  let priceOutput = document.querySelector('.panel.price ul');

  let ingredientsKeys = Object.keys(ingredients);

  priceOutput.innerText="";

  ingredientsKeys.forEach( ingredientsKey => {
        if( state[ingredientsKey]===true ){
            let newLI = document.createElement("LI");
            newLI.innerText = `${ingredients[ingredientsKey].price} ${ingredients[ingredientsKey].name}`;
            priceOutput.appendChild( newLI );
            totalPrice += ingredients[ingredientsKey].price;
        }
      });
  let totalPriceElement = document.querySelector('.price strong');
  totalPriceElement.innerText = `$${totalPrice} Total`;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything("pepperonni")
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

// Iteration 1: Add click event listener on `<button class="btn btn-extra-cheese">`
document.querySelector('.btn.btn-extra-cheese').onclick = function() {
  state.extraCheese = !state.extraCheese
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-extra-cut">`
document.querySelector('.btn.btn-extra-cut').onclick = function() {
  state.extraCut = !state.extraCut
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
