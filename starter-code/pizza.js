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

var finalPrice = 21;
renderPrice();
renderPepperonni();
renderMushrooms();
renderGreenPeppers();
renderPrice();



// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
// function renderEverything() {
//   renderPepperonni()
//   renderMushrooms()
//   renderGreenPeppers()
//   renderWhiteSauce()
//   renderGlutenFreeCrust()

//   renderButtons()
//   renderPrice()
// }

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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPep){
    if (state.greenPeppers) {
      $greenPep.style.visibility = "visible";
    }
    else {
      $greenPep.style.visibility = "hidden";
    }
  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sauce){
    $sauce.classList.toggle('sauce-white');
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($crust){
  
  $crust.classList.toggle('crust-gluten-free');
  });
}

function renderButtons(e) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  e.classList.toggle('active');
}
    


function renderPrice(v) {
  // Iteration 4: change the HTML of `<aside class="panel price">`
 let totalPrice = document.querySelectorAll(".total-price")[0].innerHTML;
 document.querySelectorAll(".total-price")[0].innerHTML = "$" + finalPrice;
 

}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderButtons(this);
  renderPepperonni();
  
  if (state.pepperonni) {
    document.querySelector('.pep-price').style.visibility = "visible";
    finalPrice += 1;
  }
  else {
    document.querySelector('.pep-price').style.visibility = "hidden";
    finalPrice -= 1;
  }
  renderPrice();
}




// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderButtons(this);
  renderMushrooms();
  renderPrice();
  if (state.mushrooms) {
    document.querySelector('.mushroom-price').style.visibility = "visible";
    finalPrice += 1;
  }
  else {
    document.querySelector('.mushroom-price').style.visibility = "hidden";
    finalPrice -= 1;
  }
  renderPrice();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderButtons(this);
  renderGreenPeppers();
  if (state.greenPeppers) {
    document.querySelector('.green-pep-price').style.visibility = "visible";
    finalPrice += 1;
  }
  else {
    document.querySelector('.green-pep-price').style.visibility = "hidden";
    finalPrice -= 1;
  }
  renderPrice();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderButtons(this);
  renderWhiteSauce();
  if (state.whiteSauce) {
    document.querySelector('.sauce-price').style.visibility = "visible";
    finalPrice += 3;
  }
  else {
    document.querySelector('.sauce-price').style.visibility = "hidden";
    finalPrice -= 3;
  }
  renderPrice();
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderButtons(this);
  renderGlutenFreeCrust();
  if (state.glutenFreeCrust) {
    document.querySelector('.crust-price').style.visibility = "visible";
    finalPrice += 5;
  }
  else {
    document.querySelector('.crust-price').style.visibility = "hidden";
    finalPrice -= 5;
  }
  renderPrice();
}






