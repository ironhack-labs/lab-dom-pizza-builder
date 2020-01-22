// Write your Pizza Builder JavaScript in this file.

// Constants 
let contentAside;
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
      $mushroom.style.visibility = "visible";
    }
    else{
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-peppers">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers){
    if(state.greenPeppers){
      $greenPeppers.style.visibility = "visible";
    }
    else{
      $greenPeppers.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let removeSauce = document.querySelector(".sauce");
  removeSauce.classList.remove("sauce-white")
  
  if(state.whiteSauce){
    let addWhiteSauce = document.querySelector(".sauce");
    addWhiteSauce.classList.add("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let removeGlutenFreeCrust = document.querySelector(".crust");
  removeGlutenFreeCrust.classList.remove("crust-gluten-free");

  if(state.glutenFreeCrust){
    let addGlutenFreeCrust = document.querySelector(".crust");
    addGlutenFreeCrust.classList.add("crust-gluten-free")
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let btns = document.getElementsByClassName("btn");
  for(let i = 0; i < btns.length; i++){
    btns[i].classList.remove("active");
  }
  if(state.pepperonni){
    let peperoniBtn = document.querySelector(".btn-pepperonni");
    peperoniBtn.classList.add("active")
    
  }
  if(state.mushrooms){
    let mushroomsBtn = document.querySelector(".btn-mushrooms");
    mushroomsBtn.classList.add("active")
  }
  if(state.greenPeppers){
    let greenPeppersBtn = document.querySelector(".btn-green-peppers");
    greenPeppersBtn.classList.add("active")
  }
  if(state.whiteSauce){
    let whiteSauceBtn = document.querySelector(".btn-sauce");
    whiteSauceBtn.classList.add("active")
  }
  if(state.glutenFreeCrust){
    let glutenFreeCrustBtn = document.querySelector(".btn-crust");
    glutenFreeCrustBtn.classList.add("active")
  }
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = 10;
  let totalPeperoni = 0;
  let totalMushrooms = 0;
  let totalGreenPeppers = 0;
  let totalWhiteSauce = 0;
  let totalGlutenFreeCrust = 0;
  
  if(state.pepperonni){
    total += ingredients.pepperonni.price;
    totalPeperoni = ingredients.pepperonni.price;
  }
  if(state.mushrooms){
    total += ingredients.mushrooms.price;
    totalMushrooms = ingredients.mushrooms.price;

  }
  if(state.greenPeppers){
    total += ingredients.greenPeppers.price;
    totalGreenPeppers = ingredients.greenPeppers.price;
  }
  if(state.whiteSauce){
    total += ingredients.whiteSauce.price;
    totalWhiteSauce = ingredients.whiteSauce.price;
  }
  if(state.glutenFreeCrust){
    total += ingredients.glutenFreeCrust.price;
    totalGlutenFreeCrust = ingredients.glutenFreeCrust;
  }

  contentAside = `<h2>Your pizza's price</h2>
  <b>$10 cheese pizza</b>
  <ul>
    <li>${totalPeperoni} pepperonni</li>
    <li>${totalMushrooms} mushrooms</li>
    <li>${totalGreenPeppers} green peppers</li>
    <li>${totalWhiteSauce} white sauce</li>
    <li>${totalGlutenFreeCrust} gluten-free crust</li>
  </ul>
  <strong>${total}</strong>`

  let asideElement = document.getElementsByTagName("aside")
  asideElement[0].innerHTML = contentAside
}


renderEverything()


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').onclick = function(){
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').onclick = function(){
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').onclick = function(){
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').onclick = function(){
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}
