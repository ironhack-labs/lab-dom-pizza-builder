ConvolverNode// Write your Pizza Builder JavaScript in this file.

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
  document.querySelectorAll('.green-pepper').forEach(function($gpep){
    if (state.greenPeppers) {
      $gpep.style.visibility = "visible";
    }
    else {
      $gpep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($wsauce){
    if (state.whiteSauce) {
      $wsauce.classList.add("sauce-white");
    }
    else {
      $wsauce.classList.remove("sauce-white");
    }
    
  });
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($cruust){
    if (state.glutenFreeCrust) {
      $cruust.classList.add("crust-gluten-free");
    }
    else {
      $cruust.classList.remove("crust-gluten-free");
    }
    
  });
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn-pepperonni').forEach(function($button){
    if (state.pepperonni) {
      $button.classList.add("active");
    }
    else {
      $button.classList.remove("active");
    }
    
  });
  document.querySelectorAll('.btn-mushrooms').forEach(function($button){
    if (state.mushrooms) {
      $button.classList.add("active");
    }
    else {
      $button.classList.remove("active");
    }
    
  });
  document.querySelectorAll('.btn-green-peppers').forEach(function($button){
    if (state.greenPeppers) {
      $button.classList.add("active");
    }
    else {
      $button.classList.remove("active");
    }
    
  });
  document.querySelectorAll('.btn-sauce').forEach(function($button){
    if (state.whiteSauce) {
      $button.classList.add("active");
    }
    else {
      $button.classList.remove("active");
    }
    
  });
  document.querySelectorAll('.btn-crust').forEach(function($button){
    if (state.glutenFreeCrust) {
      $button.classList.add("active");
    }
    else {
      $button.classList.remove("active");
    }
    
  });
  
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = [];
  
  
 
  if (state.pepperonni) {
    let pricePepperonni = 1;
    document.getElementById('pricePep').innerHTML=`$${pricePepperonni} pepperonni`;
    document.getElementById('pricePep').style.visibility = "visible";
    price.push(pricePepperonni);
  }
  else {
    document.getElementById('pricePep').style.visibility = "hidden";
  }
  if (state.greenPeppers) {
    let pricePeppers = 1;
    document.getElementById('priceGree').innerHTML=`$${pricePeppers} green peppers`;
    document.getElementById('priceGree').style.visibility = "visible";
    price.push(pricePeppers);
  }
  else {
    document.getElementById('priceGree').style.visibility = "hidden";
  }
  if (state.mushrooms) {
    let priceMushrooms = 1;
    document.getElementById('priceMush').innerHTML=`$${priceMushrooms} Mushrooms`;
    document.getElementById('priceMush').style.visibility = "visible";
    price.push(priceMushrooms);
  }
  else {
    document.getElementById('priceMush').style.visibility = "hidden";
  }
  if (state.whiteSauce) {
    let priceSauce = 3;
    document.getElementById('priceSauce').innerHTML=`$${priceSauce} white sauce`;
    document.getElementById('priceSauce').style.visibility = "visible";
    price.push(priceSauce);
  }
  else {
    document.getElementById('priceSauce').style.visibility = "hidden";
  }
  if (state.glutenFreeCrust) {
    let priceCrust = 5;
    document.getElementById('priceCrust').innerHTML=`$${priceCrust} gluten-free crust`;
    document.getElementById('priceCrust').style.visibility = "visible";
    price.push(priceCrust);
  }
  else {
    document.getElementById('priceCrust').style.visibility = "hidden";
  }
  
  var total = price.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 10);
  document.getElementById("total_price").innerHTML=`$${total}`;

  
 
}



renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`