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
  whiteSauce: true,
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
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($wSauce){
    if (state.whiteSauce) {
      $wSauce.style.visibility = "visible";
    }
    else {
      $wSauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($glutenCrust){
    if (state.glutenFreeCrust) {
      $glutenCrust.style.visibility = "visible";
    }
    else {
      $glutenCrust.style.visibility = "hidden";
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnActive = document.getElementsByClassName('btn');

  btnActive.onclick = (event) => {
  const target = event.target
  target.classList.toggle ('active');

  btnActive.onclick = () => 
    target.classList.toggle('active');
}
  
  
  //const btnActive = document.getElementsByClassName('btn');

  // for (let i = 0; i < state.length; i++) {
  //   if(state === true) {
  //     // add class active to the button in the html file
  //     btnActive.classList.add('active');
  //   }
  //   else {
  //     btnActive.classList.remove('active');
  //     // remove class active
  //   }
      
  // document.getElementsByClassName('btn').forEach(function(btnActive) {
  //   if(state === true) {
  //     btnActive.classList.add('active');
  //   }
  //   else {
  //     btnActive.classList.remove('active');
  //   }
  // });


  // go through the stats {} to see if the buttons has to be active or inactive
  // add the class active in the html if the button is active
  // if the state is true -> active
  // if the state is false -> remove class active 

  // for (let i = 0; i < state.length; i++) {
// state is an object no array

  


}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // use for in loop  for(let ingr(key) in ingedients) log state[ingr]
  // modify the ingediants with active: true

  const price = document.getElementsByClassName('price');

  for (let ingr in ingredients) {
    if (ingredients.active === true) {
      // make the price visible on the webpage
    }
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
document.querySelector('.btn.btn-crust').onclick = function(evt) {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}



// evt.target.classList.toggle('active')


