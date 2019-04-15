// Write your Pizza Builder JavaScript in this file.

// Constants 
var totalPrice = document.getElementById("total-price")
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
  document.querySelectorAll(".mushroom").forEach($mushroom => {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach($green => {
    if (state.green) {
      $green.style.visibility = "visible";
    } else {
      $green.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
     document.querySelectorAll(".sauce").forEach($sauce => {
      if (state.whiteSauce) {
        $sauce.classList.add("sauce-white");
      } else {
        $sauce.classList.remove("sauce-white");
      }
    });
   }
  

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach($crust=> {
    if (state.glutenFreeCrust){
      $crust.classList.add("crust-gluten-free");
    } else {
      $crust.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  let state2Btn = {
    pepperonni: '.btn-pepperonni',
    mushrooms: '.btn-mushrooms',
    greenPeppers: '.btn-green-peppers',
    whiteSauce: '.btn-sauce',
    glutenFreeCrust: '.btn-crust',
  }

  document.querySelectorAll(".btn").forEach($btn => {
    if(state.pepperonni){
      document.querySelector('.btn-pepperonni').classList.add('active')
    } else{
      document.querySelector('.btn-pepperonni').classList.remove('active')
    }
    if (state.mushrooms){
      document.querySelector('.btn-mushrooms').classList.add('active')
    } else {
      document.querySelector('.btn-mushrooms').classList.remove('active')
    }
    if (state.greenPeppers){
      document.querySelector('.btn-green-peppers').classList.add('active')
    } else {
      document.querySelector('.btn-green-peppers').classList.remove('active')
    }
    if (state.whiteSauce){
      document.querySelector('.btn-sauce').classList.add('active')
    } else {
      document.querySelector('.btn-sauce').classList.remove('active')
    }
    if (state.glutenFreeCrust){
      document.querySelector('.btn-crust').classList.add('active')
    } else {
      document.querySelector('.btn-crust').classList.remove('active')
    }
 });
}

function renderPrice() {
  basePrice = 10;
  if(state.pepperonni){
    basePrice+= ingredients.pepperonni.price
  } 
  if(state.mushrooms){
    basePrice += ingredients.mushrooms.price
  }
  if(state.greenPeppers){
    basePrice += ingredients.greenPeppers.price
  }
  if(state.whiteSauce){
    basePrice += ingredients.whiteSauce.price
  }
  if(state.glutenFreeCrust){
    basePrice += ingredients.glutenFreeCrust.price
  }
  totalPrice.innerText=`$ ${basePrice}`
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