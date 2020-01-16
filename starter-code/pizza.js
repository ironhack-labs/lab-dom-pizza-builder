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

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
  // renderButtons()
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
  document.querySelectorAll('.mushroom').forEach(function(mush){
    if (state.mushrooms) {
     mush.style.visibility = "visible";
    }
    else {
     mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function(green){
    if (state.greenPeppers) {
     green.style.visibility = "visible";
    }
    else {
     green.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  let sauce = document.querySelector(".sauce") ;
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");
   }
   else {
    sauce.classList.remove("sauce-white");
   }
 }


function renderGlutenFreeCrust() {
  let crust = document.querySelector(".crust")
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
   }
   else {
    crust.classList.remove("crust-gluten-free");
   }
}

var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}


function renderPrice() {
let price = 10 ;
let ingList = document.querySelector("aside ul");
ingList.innerHTML ="";
  for (property in state) {
    if (state[property]){ 
        price += ingredients[property].price;
      ingList.innerHTML += `<li>${ingredients[property].price} ${ingredients[property].name}`
    } 
      
    }
    document.getElementById("price").innerHTML = `${price}`;
  }




renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  this.classList.toggle("active");
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  this.classList.toggle("active");
  renderEverything()
}

document.querySelector('.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  this.classList.toggle("active");
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  this.classList.toggle("active");
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn-crust").onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  this.classList.toggle("active");
  renderEverything()
}



