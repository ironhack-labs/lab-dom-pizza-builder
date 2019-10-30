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
  document.querySelectorAll('.green-pepper').forEach(function($gp){
    if (state.greenPeppers) {
      $gp.style.visibility = "visible";
    }
    else {
      $gp.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector(".sauce")
  if(sauce.className === "sauce sauce-white"){
    sauce.setAttribute('class','sauce')
  } else {
    sauce.setAttribute('class','sauce sauce-white')
  }  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let sauce = document.querySelector(".crust")
  if(sauce.className === "crust crust-gluten-free"){
    sauce.setAttribute('class','crust')
  } else {
    sauce.setAttribute('class','crust crust-gluten-free')
  }  
}

let btnPepperonni= document.querySelector('.btn.btn-pepperonni')
let btnMushrooms= document.querySelector('.btn.btn-mushrooms')
let btnGreenPeppers= document.querySelector('.btn.btn-green-peppers')
let btnSauce= document.querySelector('.btn.btn-sauce')
let btnCrust= document.querySelector('.btn.btn-crust')
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if(pepClicked){
    pepClicked = !pepClicked;
    btnPepperonni.className === "btn btn-pepperonni active" ? btnPepperonni.setAttribute('class','btn btn-pepperonni') : btnPepperonni.setAttribute('class','btn btn-pepperonni active')
  }
  if(musClicked){
    musClicked = !musClicked;
    btnMushrooms.className === "btn btn-mushrooms active" ? btnMushrooms.setAttribute('class','btn btn-mushrooms') : btnMushrooms.setAttribute('class','btn btn-mushrooms active')
  }
  if(greClicked){
    greClicked = !greClicked;
    btnGreenPeppers.className === "btn btn-green-peppers active" ? btnGreenPeppers.setAttribute('class','btn btn-green-peppers') : btnGreenPeppers.setAttribute('class','btn btn-green-peppers active')
  }
  if(sauClicked){
    sauClicked = !sauClicked
    btnSauce.className === "btn btn-sauce active" ? btnSauce.setAttribute('class','btn btn-sauce') : btnSauce.setAttribute('class','btn btn-sauce active')

  }
  if(cruClicked){
    cruClicked = !cruClicked
    btnCrust.className === "btn btn-crust active" ? btnCrust.setAttribute('class','btn btn-crust') : btnCrust.setAttribute('class','btn btn-crust active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceDOM = document.querySelector('.panel strong')  
  priceDOM.innerHTML = `\$${basePrice}`;
}



var pepClicked = !state.pepperonni;
var musClicked = !state.mushrooms;
var greClicked = !state.greenPeppers;
var sauClicked = !state.sau;
var cruClicked = !state.glutenFreeCrust;

for(ingredient in ingredients){
  if(state[ingredient]) basePrice += ingredients[ingredient].price;
}
renderEverything()


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  btnPepperonni.className === "btn btn-pepperonni active" ? basePrice -= ingredients['pepperonni'].price : basePrice += ingredients['pepperonni'].price;
  pepClicked = true;
  renderPepperonni()
  renderButtons()
  renderPrice()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  btnMushrooms.className === "btn btn-mushrooms active" ? basePrice -= ingredients['mushrooms'].price : basePrice += ingredients['mushrooms'].price ;
  state.mushrooms = !state.mushrooms
  musClicked=true;
  renderMushrooms()
  renderButtons()
  renderPrice()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  btnGreenPeppers.className === "btn btn-green-peppers active" ? basePrice -= ingredients['greenPeppers'].price : basePrice += ingredients['greenPeppers'].price ;
  state.greenPeppers = !state.greenPeppers
  greClicked =true;
  renderGreenPeppers()
  renderButtons()
  renderPrice()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  btnSauce.className === "btn btn-sauce active" ? basePrice -= ingredients['whiteSauce'].price : basePrice += ingredients['whiteSauce'].price;
  state.whiteSauce = !state.whiteSauce;
  sauClicked=true;
  renderWhiteSauce();
  renderButtons()
  renderPrice()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  btnCrust.className === "btn btn-crust active" ? basePrice -= ingredients['glutenFreeCrust'].price : basePrice += ingredients['glutenFreeCrust'].price;
  state.glutenFreeCrust = !state.glutenFreeCrust;
  cruClicked=true;
  renderGlutenFreeCrust();
  renderButtons()
  renderPrice()
}