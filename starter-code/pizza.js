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
  pepperonni: false,
  mushrooms: false,
  greenPeppers: false,
  whiteSauce: false,
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
    if (state.mushroom) {
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
  document.querySelectorAll('.sauce-white').forEach(function($whiteSauce){
    if (state.whiteSauce) {
      $whiteSauce.style.visibility = "visible";
    }
    else {
      $whiteSauce.style.visibility = "hidden";
    }
  })
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(function($glutenFreeCrust){
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.style.visibility = "visible";
    }
    else {
      $glutenFreeCrust.style.visibility = "hidden";
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperonni == true) {
    document.querySelector('.btn-pepperonni').classList.add('active');
  } else {
    document.querySelector('.btn-pepperonni').classList.remove('active');
  }

  if (state.mushrooms == true) {
  document.querySelector('.btn-mushrooms').classList.add('active');
  } else {
  document.querySelector('.btn-mushrooms').classList.remove('active');
  }

  if (state.greenPeppers == true) {
  document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else {
  document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  }

  if (state.whiteSauce == true) {
  document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
  document.querySelector('.btn.btn-sauce').classList.remove('active');
  }

  if (state.glutenFreeCrust == true) {
  document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
  document.querySelector('.btn.btn-crust').classList.remove('active');
  }
}

function renderPrice() {
	let total = 10;

   if (state.pepperonni){
    document.getElementById('pricePep').style.display = 'block';
    total += 1
  }
  else {
    document.getElementById('pricePep').style.display = 'none';
  }
  if (state.mushrooms){
    document.getElementById('priceMush').style.display = 'block';
    total +=1
  }
  else {
    document.getElementById('priceMush').style.display = 'none';
  }
  if (state.greenPeppers){
    document.getElementById('priceGreen').style.display = 'block';
    total +=1
  }
  else {
    document.getElementById('priceGreen').style.display = 'none';
  }
  if (state.whiteSauce){
    document.getElementById('priceWhite').style.display = 'block';
    total +=3
  }
  else {
    document.getElementById('priceWhite').style.display = 'none';
  }
  if (state.glutenFreeCrust){
    document.getElementById('priceGluten').style.display = 'block';
    total +=5
  }
  else {
    document.getElementById('priceGluten').style.display = 'none';
  }

  document.getElementById('total').innerHTML = `${total}`
  
}
  






renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything();
  renderButtons();
  renderPrice();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything();
  renderButtons();
  renderPrice();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  renderButtons();
  renderPrice();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
  renderButtons();
  renderPrice();
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  renderButtons();
  renderPrice();

}