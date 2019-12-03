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
const renderEverything = () => {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}


const renderPepperonni = () => {
  document.querySelectorAll('.pep').forEach(($pep) => {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

// Iteration 1: set the visibility of `<section class="mushroom">`
const renderMushrooms = () => {
  document.querySelectorAll('.mushroom').forEach(($mushroom) =>{
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
     $mushroom.style.visibility = "hidden";
    }
  })
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
const renderGreenPeppers = () => {
  document.querySelectorAll('.green-pepper').forEach(($greenPepper) =>{
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
const renderWhiteSauce = () => {
  document.querySelectorAll('.sauce').forEach(($sauce) =>{
    if (state.whiteSauce) {
      $sauce.classList.add('sauce-white');
    }
    else {
      $sauce.classList.remove('sauce-white');
    }
  })
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
const renderGlutenFreeCrust = () => {
  document.querySelectorAll('.crust').forEach(($crust) =>{
    if (state.glutenFreeCrust) {
      $crust.classList.add('crust-gluten-free');
    }
    else {
      $crust.classList.remove('crust-gluten-free');
    }
  })
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
const renderButtons = () => {
  document.querySelectorAll('.btn').forEach(($btn) =>{
    if (document.querySelector('active')) {
      $btn.classList.remove('active');
    }
    else {
      $btn.classList.add('active');
    }
  })
}

function renderPrice() {
  let priceListValue = document.querySelectorAll('aside li');
  if (state.pepperonni) {
    priceListValue[0].innerHTML = '$1 pepperonni';
  } else {
    priceListValue[0].innerHTML = '';
  }
  if (state.mushrooms) {
    priceListValue[1].innerHTML = '$1 mushrooms'
  } else {
    priceListValue[1].innerHTML = '';
  }
  if (state.greenPeppers) {
    priceListValue[2].innerHTML = '$1 green peppers';
  } else {
    priceListValue[2].innerHTML = '';
  }
  if (state.whiteSauce) {
    priceListValue[3].innerHTML = '$3 white sauce';
  } else {
    priceListValue[3].innerHTML = '';
  }
  if (state.glutenFreeCrust) {
    priceListValue[4].innerHTML = '$5 gluten-free crust';
  } else {
    priceListValue[4].innerHTML = '';
  }
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}



