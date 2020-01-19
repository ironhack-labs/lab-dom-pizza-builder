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
function renderEverything(stateName, className, innerTextString, priceAmount) {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice(stateName, className, innerTextString, priceAmount)
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
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($grpep){
    if (state.greenPeppers) {
      $grpep.style.visibility = "visible";
    }
    else {
      $grpep.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  }
  else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  }
  else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (event){
    if (event.currentTarget.classList.contains('active')) {
      event.currentTarget.classList.remove('active');
    }
    else {
      event.currentTarget.classList.add('active');
    }
  } 
}

function renderPrice(className, innerTextString, stateName, priceAmount) {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  if (innerTextString){
    //if innerTextString we know user is updating
    //update list of ingredients
    const $parent = document.querySelector('.price ul');
    if (state[stateName]) {
      const $ingredient = document.createElement('li');
      $ingredient.classList.add(className);
      $ingredient.innerHTML =`$${priceAmount} ${innerTextString}`;
      $parent.appendChild($ingredient);
    } else if (!state[stateName] && document.querySelector(`.price ul li.${className}`)){
      $parent.removeChild(document.querySelector(`.price ul li.${className}`));
    }
    //update total price
    let totalPrice = 10;
    const entries = Object.entries(state);
    for (const [ingredient, bool] of entries) {
      if (
        (bool === true) && (
        ingredient === 'pepperonni' ||
        ingredient === 'mushrooms' || 
        ingredient ==='greenPeppers')){
        totalPrice +=1;
      }
      if ((bool === true) && (ingredient === 'whiteSauce')){
        totalPrice +=3;
      }
      if ((bool === true) && (ingredient === 'glutenFreeCrust')){
        totalPrice +=5;
      }
    }
    document.querySelector('.price strong').innerHTML=`$${totalPrice}`;
  }
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything('pepperonni','pepperonni','pepperonni',1)
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything('mushrooms', 'mushrooms', 'mushrooms', 1)
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything('green-peppers', 'green peppers','greenPeppers', 1)
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything('white-sauce', 'white sauce', 'whiteSauce',3)
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything('gluten-free-crust', 'gluten-free-crust','glutenFreeCrust', 5)
}