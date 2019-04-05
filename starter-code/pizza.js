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
  whiteSauce: true,
  glutenFreeCrust: true
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
  document.querySelectorAll('.pep').forEach(function($linguica){
    if (state.pepperonni) {
      $linguica.style.visibility = "visible";

    }
    else {
      $linguica.style.visibility = "hidden";
    }
  })
}
  
  function renderMushrooms() {
    // Iteration 1: set the visibility of `<section class="mushroom">`
  
  document.querySelectorAll('.mushroom').forEach(function($cogumeloParis){
    if (state.mushrooms) {
      $cogumeloParis.style.visibility = "visible";
    }
    else {
      $cogumeloParis.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($pimentaoVerde){
    if (state.greenPeppers) {
      $pimentaoVerde.style.visibility = "visible";
    }
    else {
      $pimentaoVerde.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add(".sauce-white");
    }
    else {
      document.querySelector('.sauce').classList.remove(".sauce-white");
    }
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add(".crust-gluten-free");
    }
    else {
      document.querySelector('.crust').classList.remove(".crust-gluten-free");
    }
} 

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperonni){
    document.querySelector('.btn-pepperonni').classList.add("active")    
  }else {
    document.querySelector('.btn-pepperonni').classList.remove("active")
  }
  if(state.greenPeppers){
    document.querySelector('.btn-green-peppers').classList.add("active")    
  }else {
    document.querySelector('.btn-green-peppers').classList.remove("active")
  }
  if(state.mushrooms){
    document.querySelector('.btn-mushrooms').classList.add("active")    
  }else {
    document.querySelector('.btn-mushrooms').classList.remove("active")
  }
  if(state.whiteSauce){
    document.querySelector('.btn-sauce').classList.add("active")    
  }else {
    document.querySelector('.btn-sauce').classList.remove("active")
  }
  if(state.glutenFreeCrust){
    document.querySelector('.btn-crust').classList.add("active")    
  }else {
    document.querySelector('.btn-crust').classList.remove("active")
  }
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">
  let precoTotal = basePrice;
  let listaTag = document.querySelector('aside.panel.price ul');
  listaTag.innerHTML = '';

  for( let item in ingredients){
    if(state[item]){
      precoTotal += ingredients[item].price;
      listaTag.innerHTML += `<li>${ingredients[item].price} ${ingredients[item].name.toLowerCase()}</li>`
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = '$' + precoTotal;  
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
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}