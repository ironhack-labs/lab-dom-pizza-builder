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
let state = {
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
      $pep.style.display = 'block';
    }
    else {
      $pep.style.display = 'none';
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the display of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.display = 'block';
    } else {
      $mush.style.display = 'none';
    }
  });

  }


function renderGreenPeppers() {
  // Iteration 1: set the display of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(green){
    if (state.greenPeppers){
      green.style.display = 'block';
    } else {
      green.style.display = 'none';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');

  if (!state.whiteSauce) {
    sauce.classList.remove('sauce-white');
  } else {
    sauce.classList.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let gluten = document.querySelector('.crust');
  if (!state.glutenFreeCrust) {
    gluten.classList.remove('crust-gluten-free');
  } else {
    gluten.classList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if ( state.pepperonni) {
    document.querySelector('.btn-pepperonni').classList.remove('active');
  } else {
    document.querySelector('.btn-pepperonni').classList.add('active');
  }

  if ( state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.remove('active');
  } else {
    document.querySelector('.btn-mushrooms').classList.add('active');
  }

  if ( state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.remove('active');
  } else {
    document.querySelector('.btn-green-peppers').classList.add('active');
  }

  if ( state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.remove('active');
  } else {
    document.querySelector('.btn-sauce').classList.add('active');
  }

  if ( state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.remove('active');
  } else {
    document.querySelector('.btn-crust').classList.add('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = document.querySelector('.price.panel strong');
  let pInit = 10;
  //price.innerHTML = `$${pInit}`
  if ( state.pepperonni) {
    document.querySelector('.panel.price ul li:nth-child(1)').style.display='block';
    pPepperoni = 1;
    pInit = pInit + pPepperoni;
  } else {
    document.querySelector('.panel.price ul li:nth-child(1)').style.display='none';
    //price.innerHTML = `$${pInit}`
  }

  if (state.mushrooms) {
    document.querySelector('.panel.price ul li:nth-child(2)').style.display='block';
    pMushrooms = 1;
    pInit = pInit + pMushrooms;
  } else {
    document.querySelector('.panel.price ul li:nth-child(2)').style.display='none';
  }

  if ( state.greenPeppers) {
    document.querySelector('.panel.price ul li:nth-child(3)').style.display='block';
    pGreenPeppers = 1;
   pInit = pInit + pGreenPeppers;
  } else {
    document.querySelector('.panel.price ul li:nth-child(3)').style.display='none';
  }

  if ( state.whiteSauce) {
    document.querySelector('.panel.price ul li:nth-child(4)').style.display='block';
    pWhiteSauce = 3;
    pInit = pInit + pWhiteSauce;
  } else {
    document.querySelector('.panel.price ul li:nth-child(4)').style.display='none';
  }

  if ( state.glutenFreeCrust) {
    document.querySelector('.panel.price ul li:nth-child(5)').style.display='block';
    pGluten = 5;
   pInit = pInit + pGluten;
  } else {
    document.querySelector('.panel.price ul li:nth-child(5)').style.display='none';
  }
price.innerHTML = `$${pInit}`;
}



renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
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
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}