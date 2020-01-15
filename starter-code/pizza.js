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
 Array.from(document
  .querySelectorAll('.mushroom'))
  .forEach(el =>{
  (state.mushrooms)?
  el.style.visibility = 'visible':
  el.style.visibility = 'hidden'
      })
}
function renderGreenPeppers() {

  // Iteration 1: set the visibility of `<section class="green-pepper">`
   Array.from(document
  .querySelectorAll('#pizza>.green-pepper'))
  .forEach(el =>{
  (state.greenPeppers)?
  el.style.visibility = 'visible':
  el.style.visibility = 'hidden'
      })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
          (state.whiteSauce)? 
          document.querySelector('.sauce')
          .classList.remove('sauce-white'):
          document.querySelector('.sauce')
          .classList.add('sauce-white')


}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
let gluten = document.getElementsByClassName('crust')[0];
      (gluten.classList==='crust-gluten-free')?
      gluten.classList.remove('crust-gluten-free'):
      gluten.classList.add('crust-gluten-free')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

    Array.from(document.querySelectorAll('button')).forEach( (el) => {
    (el.classList[2]==='active')? 
    el.classList.remove('.active') :
    el.classList.add('.active') 


   } )
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let aside  = document.getElementsByTagName('aside');

          console.log(aside[0]);



    
  
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = (a) => {
  state.mushrooms = !state.mushrooms

  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').onclick = (a) => {
  state.greenPeppers = !state.greenPeppers

  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').onclick = (a) => {
  state.whiteSauce = !state.whiteSauce

  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').onclick = (a) => {
  state.glutenFreeCrust = !state.glutenFreeCrust

  renderEverything()
}