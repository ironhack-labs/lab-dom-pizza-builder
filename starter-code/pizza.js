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

/* Initial value of the state (the state values can change over time)
When the user clicks on it, the value will be changed to the opposite 
*/
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

const parentCrust = document.querySelector('.crust');
const childrenCrust = parentCrust.children;

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
    if (state.greenPepper) {//true
      $greenPepper.style.visibility = "hidden";
    }
    else {
      $greenPepper.style.visibility = "visible";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  for (let i = 0; i < childrenCrust.length; i++) {
    if(!state.whiteSauce){
      childrenCrust[1].style.visibility = "hidden";
    }else{
      childrenCrust[1].style.visibility = "visible";
    }   
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    if (!state.glutenFreeCrust) {
      parentCrust.classList.add('crust');
      parentCrust.classList.remove('crust-gluten-free');
    }
    else {
      parentCrust.classList.add('crust-gluten-free');
    }
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // document.querySelectorAll('.btn').forEach(function($btn){
  //   $btn.onclick = function(){$btn.classList.toggle('active');}
    
  // })
  // allBtn = document.querySelectorAll('.btn');

  // allBtn.onclick = function() {
  //   btn.classList.toggle('active');
  // }  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const list = document.querySelector('aside.panel.price ul');
  list.innerHTML = "";
  let total = document.querySelector('aside.panel.price strong');
  let finalPrice = basePrice;

  for (let ingreKey in ingredients) {
    if(state[ingreKey]){
      list.innerHTML += `<li>$${ingredients[ingreKey].price} ${ingredients[ingreKey].name}</li>`;
      finalPrice += ingredients[ingreKey].price;
    }
  }

  total.innerHTML = "$" + finalPrice;
}


renderEverything()


//Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPepper = !state.greenPepper;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}