// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10;
var cdp=0,cdm=0,cdp=0,cds=0,cdf=0;
var dp,dm,dg,ds,df;
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
  click = 
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers){
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    }
    else {
      $greenPeppers.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sauce1){
    if (state.whiteSauce) {
      $sauce1.style.visibility = "visible";
    }
    else {
      $sauce1.style.visibility = "hidden";
    }
})
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(function($crust1){
    if (state.glutenFreeCrust) {
      $crust1.style.background = "rgb(221,208,202)";
    }
    else {
      $crust1.style.background = "rgb(193,121,50)";
    }
})
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperonni){
    dp = document.getElementById("pepper").style.display = "inherit";
  } else {
    dp = document.getElementById("pepper").style.display = "none";
  }
  if(state.mushrooms){
    dm = document.getElementById("mush").style.display = "inherit";
  } else {
    dm = document.getElementById("mush").style.display =  "none";
  } 
  if(state.greenPeppers){
    dg = document.getElementById("greens").style.display = "inherit";
  } else {
    dg = document.getElementById("greens").style.display = "none";
  }
  if(!state.whiteSauce){
    ds = document.getElementById("wsauce").style.display = "inherit";
  } else {
    ds = document.getElementById("wsauce").style.display = "none";
  } 
  if(state.glutenFreeCrust){
    df = document.getElementById("gluten").style.display = "inherit";
  } else {
    df = document.getElementById("gluten").style.display = "none";
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  document.getElementById("prices").innerHTML = basePrice;
  if(dp === "none"){
    cdp += 1;
  }
  else{
    cdp -= 1;
  }
  (cdm === "none")?cdm+=1:cdm-=1;
  basePrice = cdp+cdm;
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