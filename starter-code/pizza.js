// Write your Pizza Builder JavaScript in this file.

// Constants 
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
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();

  whiteSauceLoad();
  glutenFreeCrustLoad();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
      document.getElementById("bt-pepperonni").classList.remove("active");
    }
    else {
      $pep.style.visibility = "hidden";
      document.getElementById("bt-pepperonni").classList.add("active");
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($pep){
    if (state.mushrooms) {
      $pep.style.visibility = "visible";
      document.getElementById("bt-mushroom").classList.remove("active");
    }
    else {
      $pep.style.visibility = "hidden";
      document.getElementById("bt-mushroom").classList.add("active");
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($pep){
    if (state.greenPeppers) {
      document.getElementById("bt-green-pepper").classList.remove("active");
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
      document.getElementById("bt-green-pepper").classList.add("active");
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">

  let basePrice = 10;
  let localPrice = 0;
  if (state.pepperonni) {
      localPrice += ingredients.pepperonni.price;
      document.getElementById("priceP").classList.remove("priceActive");
  } else {
      document.getElementById("priceP").classList.add("priceActive");
  }
  if (state.mushrooms) {
      localPrice += ingredients.mushrooms.price;
      document.getElementById("priceM").classList.remove("priceActive");
  } else {
      document.getElementById("priceM").classList.add("priceActive");
  }
  if (state.greenPeppers) {
      localPrice += ingredients.greenPeppers.price;
      document.getElementById("priceG").classList.remove("priceActive");
  } else {
      document.getElementById("priceG").classList.add("priceActive");
  }
  if (state.whiteSauce) {
      localPrice += ingredients.whiteSauce.price;
      document.getElementById("priceW").classList.remove("priceActive");
  } else {
      document.getElementById("priceW").classList.add("priceActive");
  }
  if (state.glutenFreeCrust) {
      localPrice += ingredients.glutenFreeCrust.price;
      document.getElementById("priceC").classList.remove("priceActive");
  } else {
      document.getElementById("priceC").classList.add("priceActive");
  }
  
  basePrice += localPrice;    
  document.getElementById("priceTotal").innerHTML = basePrice;
  
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
  document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}

function whiteSauceLoad(){
        
        const buttonS = document.getElementById("wsa");
        const crust = document.getElementById("crust-gluten-free");
        const ws = document.getElementById("sauce-white"); 
        buttonS.onclick = function(evt) {
            ws.classList.toggle("sauce-white");
            buttonS.classList.toggle("active");
            state.whiteSauce = !state.whiteSauce ;
            renderEverything();
        };
}

function glutenFreeCrustLoad() {
    
        const buttonX = document.getElementById("crust");
        const crust = document.getElementById("crust-gluten-free");
        const ws = document.getElementById("sauce-white"); 
        buttonX.onclick = function(evt) {
            crust.classList.toggle("crust-gluten-free");
            buttonX.classList.toggle("active");
            state.glutenFreeCrust = !state.glutenFreeCrust ;
            renderEverything();
        };
    
}

window.addEventListener("DOMContentLoaded", whiteSauceLoad); 
window.addEventListener("DOMContentLoaded", glutenFreeCrustLoad); 
