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
    if(state.mushrooms){
      $mushroom.style.visibility = "hidden";
    }
    else {
      $mushroom.style.visibility = "visible";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($green){
    if(state.green){
      $green.style.visibility = 'hidden';
    }else {
      $green.style.visibility = 'visible';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  document.querySelectorAll('.sauce').forEach(function($sauce){
    if(state.sauce){
      $sauce.className += 'sauce-white'
    }else{
      $sauce.className += 'sauce'
    }
  })
}	


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($sauce){
    if(state.sauce){
      $sauce.className += 'crust-gluten-free'
    }else{
      $sauce.className += 'crust'
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    for (let key in state) {
      let value = state[key];
      let className;
      switch (key) {
        case 'greenPeppers':
          className = 'green-peppers';
          break;
        case 'green':
            className = 'green-peppers';
            break;
        case 'whiteSauce':
          className = 'sauce';
          break;
        case 'glutenFreeCrust':
          className = 'crust';
          break;
        default:
          className = key;
          break;
      }
      console.log(key);
      var verBtn = document.getElementsByClassName("btn-" + className);
      if (value) {
        verBtn[0].classList.add("active");
      } else {
        verBtn[0].classList.remove('active');
      }
    }
    
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  /* cómo????s */
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
  document.querySelector('.btn.btn-mushrooms ').onclick = function(){
    state.mushrooms = !state.mushrooms
    renderEverything()
  }
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(`.btn.btn-green-peppers`).onclick = function(){
  state.green = !state.green
  renderEverything();
}


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function(){
  state.sauce = !state.sauce
  renderEverything();
}


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function(){
  state.crust = !state.crust
  renderEverything();
}