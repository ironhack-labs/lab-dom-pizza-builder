// Write your Pizza Builder JavaScript in this file.

// Constants 
const basePrice = 10
const ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}



// const renderPepperonni = () =>  {
//   document.querySelectorAll('.pep').forEach($pep => {
//     if (state.pepperonni) {
//       $pep.style.visibility = "visible";
//     }
//     else {
//       $pep.style.visibility = "hidden";
//     }
//   })
// }

const renderPepperonni = () =>  document.querySelectorAll('.pep').forEach($pep =>  (state.pepperonni) ?  $pep.style.visibility = "visible" :  $pep.style.visibility = "hidden");

const renderMushrooms = () => {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach($mush => (state.mushrooms) ? $mush.style.visibility = "visible" : $mush.style.visibility = "hidden")
};

  // Iteration 1: set the visibility of `<section class="green-pepper">`
const renderGreenPeppers = () => document.querySelectorAll('.green-pepper').forEach($gpepper => {
  (state.greenPeppers) ? $gpepper.style.visibility = "visible" : $gpepper.style.visibility = "hidden"

});


const renderWhiteSauce = () => document.querySelectorAll('.sauce').forEach($sauce => (state.whiteSauce) ? $sauce.classList.add ("sauce-white") : $sauce.classList.remove("sauce-white") );
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`


const renderGlutenFreeCrust = () => document.querySelectorAll(".crust").forEach ($crust => state.glutenFreeCrust ? $crust.classList.add ("crust-gluten-free") : $crust.classList.remove("crust-gluten-free"))
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
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

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function()   {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick  = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}