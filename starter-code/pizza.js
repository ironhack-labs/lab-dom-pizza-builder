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
  document.querySelectorAll('.green-pepper').forEach(function($gPep){
    if (state.greenPeppers) {
      $gPep.style.visibility = "visible";
    }
    else {
      $gPep.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($wSau){
    if (state.whiteSauce) {
      $wSau.style.visibility = "visible";
    }
    else {
      $wSau.style.visibility = "hidden";
    }
  })
}
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  if(state.glutenFreeCrust){
  document.querySelector('.crust').classList.add('crust-gluten-free')
  }
  else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
document.querySelector
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = 10
  if (state.pepperonni){
    document.getElementById('onnipeppe').style.display = 'block';
    total += 1
  }
  else {
    document.getElementById('onnipeppe').style.display = 'none';
  }
  if (state.mushrooms){
    document.getElementById('roommuch').style.display = 'block';
    total +=1
  }
  else {
    document.getElementById('roommuch').style.display = 'none';
  }
  if (state.greenPeppers){
    document.getElementById('pepperGreen').style.display = 'block';
    total +=1
  }
  else {
    document.getElementById('pepperGreen').style.display = 'none';
  }
  if (state.whiteSauce){
    document.getElementById('souceWhite').style.display = 'block';
    total +=3
  }
  else {
    document.getElementById('souceWhite').style.display = 'none';
  }
  if (state.glutenFreeCrust){
    document.getElementById('freeGluten').style.display = 'block';
    total +=3
  }
  else {
    document.getElementById('freeGluten').style.display = 'none';
  }
  
  document.getElementById('total').innerHTML = `${total}`
  console.log(total)
  }

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  if(state.pepperonni){
    document.querySelector('.btn.btn-pepperonni').classList.add('active')  
  }
  else {
  document.querySelector('.btn.btn-pepperonni').classList.remove('active')
  }

  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  if(state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').classList.add('active')  
  }
  else {
  document.querySelector('.btn.btn-mushrooms').classList.remove('active')
  }
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  if(state.greenPeppers){
    document.querySelector('.btn.btn-green-peppers').classList.add('active')  
  }
  else {
  document.querySelector('.btn.btn-green-peppers').classList.remove('active')
  }
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function(){
  state.whiteSauce = !state.whiteSauce
  if(state.whiteSauce){
    document.querySelector('.btn.btn-sauce').classList.remove('active')  
  }
  else {
  document.querySelector('.btn.btn-sauce').classList.add('active')
  }
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function(){
  state.glutenFreeCrust = !state.glutenFreeCrust
  if(state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').classList.remove('active')  
  }
  else {
  document.querySelector('.btn.btn-crust').classList.add('active')
  }
  renderEverything()
}