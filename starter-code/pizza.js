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
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })    
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(function($whiteSauce){
    if (state.whiteSauce) {
      $whiteSauce.style.visibility = "visible";
    }
    else {
      $whiteSauce.style.visibility = "hidden";
    }
  })  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($glutenFreeCrust){
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.style.visibility = "visible";
    }
    else {
      $glutenFreeCrust.style.visibility = "visible";
    }
  }) 
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni){
    document.querySelector('.btn.btn-pepperonni').className += ' active';
  } else{
    document.querySelector('.btn.btn-pepperonni').classList.remove('active');
  }
  if (state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').className += ' active';
  } else{
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  }
  if (state.greenPeppers){
    document.querySelector('.btn.btn-green-peppers').className += ' active';
  } else{
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  }
  if (state.whiteSauce){
    document.querySelector('.btn.btn-sauce').className += ' active';
  } else{
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }
  if (state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').className += ' active';
  } else{
    document.querySelector('.crust').classList.remove('active');
  }  
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  if (state.pepperonni){
    document.querySelector('.panel.price ul li').innerText = '$1 pepperoni';
  } else{
    document.querySelector('.panel.price ul li').innerText = 'Pepperoni not selected';
  }
  if (state.mushrooms){
    document.querySelector('.panel.price ul li+li').innerText = '$1 mushrooms';
  } else{
    document.querySelector('.panel.price ul li+li').innerText = 'Mushrooms not selected';
  }
  if (state.greenPeppers){
    document.querySelector('.panel.price ul li+li+li').innerText = '$1 green peppers';
  } else{
    document.querySelector('.panel.price ul li+li+li').innerText = 'Green Peppers not selected';
  }
  if (state.whiteSauce){
    document.querySelector('.panel.price ul li+li+li+li').innerText = '$3 white sauce';
  } else{
    document.querySelector('.panel.price ul li+li+li+li').innerText = 'White sauce not selected';
  }  
  if (state.glutenFreeCrust){
    document.querySelector('.panel.price ul li+li+li+li+li').innerText = '$5 gluten-free crust';
  } else{
    document.querySelector('.panel.price ul li+li+li+li+li').innerText = 'Gluten-free crust not selected';
  }

  let price = 10;

  if (state.pepperonni){
    price +=1
  }
  if (state.mushrooms){
    price +=1
  }
  if (state.greenPeppers){
    price +=1
  }
  if (state.whiteSauce){
    price +=3
  }
  if (state.glutenFreeCrust){
    price +=5
  }

  document.querySelector('.panel.price strong').innerText = `$${price}`
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



