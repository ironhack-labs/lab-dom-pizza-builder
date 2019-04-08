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
  renderPrice()
}
function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";

    }
    else {
      $pep.style.visibility = "hidden";
      $(`.pep-price`).hide()
      //.pep-price is a unique class just assigned to the li

    }
  })
}
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  
}

function renderWhiteSauce() {
if (!state.whiteSauce) {
$(".sauce").removeClass("sauce-white");
} else {
  $(".sauce").addClass("sauce-white");
  }
}


function renderGlutenFreeCrust() {

  //if ($(".crust").hasClass("crust-gluten-free")) {
        if (!state.glutenFreeCrust) {
    $(".crust").removeClass("crust-gluten-free");
    } else  {
      $(".crust").addClass("crust-gluten-free");
    }
}

function renderButtons() {
  $(`.btn`).click(function() {
    $(this).toggleClass(`active`)
  })
  
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}


// function getTotal(){
  function renderPrice() {
// let panel = <ul>
// <li class="pep-price">$1 pepperonni</li>
// <li class="mush-price">$1 mushrooms</li>
// <li class="green-price">$1 green peppers</li>
// <li class="sauce-price">$3 white sauce</li>
// <li class="crust-price">$5 gluten-free crust</li>
// </ul>
// <strong class="total-price">$21</strong>
      


  let sum=basePrice;
  let prices = ''
  let panel = ""
  for(let key in state){
    if (state[key]){
      //console.log('key',key, 'state[key]',state[key])
      console.log('we have ',key)
      //basePrice
      console.log(ingredients[key].price)
      prices+=`<li>${ingredients[key].name}</li>`
      sum+=ingredients[key].price
      panel+=`<li>$([i].price</li>`
      //Niko's version
    }
    document.querySelectorAll(".total-price")[0].innerHTML = "$" + sum;
    console.log("Sum is "+sum)
  }}

 
renderEverything()
renderButtons()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

document.querySelector(".btn.btn-crust").onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`