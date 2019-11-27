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


 // Iteration 1: set the visibility of `<section class="mushroom">`


function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(function($mush){
      if (state.mush) {
        $mush.style.visibility = "visible";
      }
      else {
        $mush.style.visibility = "hidden";
      }
    })
  }


// Iteration 1: set the visibility of `<section class="green-pepper">`


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($pepper){
    if (state.peppers) {
      $pepper.style.visibility = "visible";
    }
    else {
      $pepper.style.visibility = "hidden";
    }
  })
}

  
 // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`


function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(function($white){
    if (state.whiteSauce) {
      $white.classList.add("sauce-white")    }
    else {
      $white.classList.remove("sauce-white")    }
  })
 
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(function($crust){
    if (state.glutenFreeCrust) {
      $crust.classList.add("crust-gluten-free");
    }
    else {
      $crust.classList.remove("crust-gluten-free")
    }
  })
 
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
      if (state.pepperonni == true){
        document.querySelector(".btn.btn-pepperonni").classList.remove("active");
      } else {
        document.querySelector(".btn.btn-pepperonni").classList.add("active");
      }
      if (state.mush == true){
        document.querySelector(".btn.btn-mushrooms").classList.remove("active");
      } else {
        document.querySelector(".btn.btn-mushrooms").classList.add("active");
      }
      if (state.peppers == true){
        document.querySelector(".btn.btn-green-peppers").classList.remove("active");
      } else {
        document.querySelector(".btn.btn-green-peppers").classList.add("active");
      }
      if (state.whiteSauce == true){
        document.querySelector(".btn.btn-sauce").classList.remove("active");
      } else {
        document.querySelector(".btn.btn-sauce").classList.add("active");
      }
      if (state.glutenFreeCrust == true){
        document.querySelector(".btn.btn-crust").classList.remove("active");
      } else {
        document.querySelector(".btn.btn-crust").classList.add("active");
      }
    }

// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  //idea
  //remove all li's
  let ingridientsListTag = document.querySelectorAll(".panel.price ul li");
  for (let abc in ingridientsListTag){
    console.log(abc)
    //i.parentNode.removeChild(li);
  }
  //console.log(ingridientsListTag)
  for (ingredient in ingredients){

    //console.log(ingredient);
  }
  }
  

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mush = !state.mush
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.peppers = !state.peppers
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

