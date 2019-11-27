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
  document.querySelectorAll('.green-pepper').forEach(function($green_pepper){
    if (state.greenPeppers) {
      $green_pepper.style.visibility = "visible";
    }
    else {
      $green_pepper.style.visibility = "hidden";
    }
  })

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($whiteSauce){
    if (state.whiteSauce) {
      $whiteSauce.classList.add('sauce-white')
    }
    else {
      $whiteSauce.classList.remove('sauce-white')
    }
  })
  

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($glutenFree){
    if (state.glutenFreeCrust) {
      $glutenFree.classList.add('crust-gluten-free')
    }
    else {
      $glutenFree.classList.remove('crust-gluten-free')
    }
  })
  
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
const allButtons = [{theClass: ".btn-pepperonni",theState: "pepperonni"}, {theClass: ".btn-mushrooms",theState: "mushrooms"},
{theClass: ".btn-green-peppers",theState: "greenPeppers"}, {theClass: ".btn-sauce",theState: "whiteSauce"}, {theClass: ".btn-crust",theState: "glutenFreeCrust"}]



allButtons.map(function(elem){

  document.querySelectorAll(elem.theClass.toString()).forEach(function($button){
    if (state[elem.theState]) {
      $button.classList.add('active')
    }
    else {
      $button.classList.remove('active')
    }
  })

})
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
const priceList = document.getElementById('bill')
//const priceListItems = priceList.getElementsByTagName('li')

let billElem = "";
priceList.innerHTML = billElem;
  if(state.pepperonni){
    billElem += "<li>$1 pepperonni</li>"
  }
  if(state.mushrooms){
    billElem += "<li>$1 mushrooms</li>"
  }

  if(state.greenPeppers){
    billElem += "<li>$1 green peppers</li>"
  }

  if(state.whiteSauce){
    billElem +=  "<li>$3 white sauce</li>"
  }
  
  if(state.glutenFreeCrust){
    billElem +=  "<li>$5 gluten-free crust</li>"
  }
  priceList.innerHTML = billElem;
  
let finalPrice = basePrice;
document.querySelector('strong').innerText=finalPrice;

if(state.pepperonni){
  finalPrice += ingredients.pepperonni.price
}
if(state.mushrooms){
  finalPrice += ingredients.mushrooms.price
}

if(state.greenPeppers){
  finalPrice += ingredients.greenPeppers.price
}

if(state.whiteSauce){
  finalPrice +=  ingredients.whiteSauce.price
}

if(state.glutenFreeCrust){
  finalPrice +=  ingredients.glutenFreeCrust.price
}

document.querySelector('strong').innerText= "$" +finalPrice;

  
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