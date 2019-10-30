/*jshint esversion: 6 */

// Write your Pizza Builder JavaScript in this file.
// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function(mush){
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    }
    else {
      mush.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function(greenPep){
    if (state.greenPeppers) {
      greenPep.style.visibility = "visible";
    }
    else {
      greenPep.style.visibility = "hidden";
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function(sauce){
    if (state.whiteSauce) {
			sauce.classList.add('sauce-white');
		} else {
			sauce.classList.remove('sauce-white');
		}
  });
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(function(crust){
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free');
    }
    else {
      crust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  //const el = document.querySelector('.btn');
  //el.classList.toggle("active");
}



function renderPrice() {
  let price = document.querySelector('strong');
  var a = calcPrice();
  price.innerHTML = a;
  // Iteration 4: change the HTML of `<aside class="panel price">`
}



function calcPrice(){
  let totalPrice = 10;
  if(('.btn-pepperoni').hasClass('active')){
    totalPrice += 1;
  } else{
    totalPrice -= 1;
  }
  if(('.btn-mushrooms').hasClass('active')){
    totalPrice += 1;
  } else{
    totalPrice -= 1;
  }
  if(('.btn-green-peppers').hasClass('active')){
    totalPrice += 1;
  } else{
    totalPrice -= 1;
  }
  if(('.btn-sauce').hasClass('active')){
    totalPrice += 3;
  }else{
    totalPrice -= 3;
  }
  if(('.btn-crust').hasClass('active')){
    totalPrice += 5;
  }else{
    totalPrice -= 5;
  }
  return totalPrice;
}




// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function(t) {
  t.target.classList.toggle('active');
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function(t) {
  t.target.classList.toggle('active');
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function(t) {
  t.target.classList.toggle('active');
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function(t) {
  t.target.classList.toggle('active');
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function(t) {
  t.target.classList.toggle('active');
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
