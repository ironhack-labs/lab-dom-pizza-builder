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
  document.querySelectorAll('.mushroom').forEach(function($msh){
    if (state.mushrooms) {
      $msh.style.visibility = "visible";
    }
    else {
      $msh.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  //green-pepper
  document.querySelectorAll('.green-pepper').forEach(function($gp){
    if (state.greenPeppers) {
      $gp.style.visibility = "visible";
    }
    else {
      $gp.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sa){
    if (state.whiteSauce) {
      $sa.style.visibility = "visible";
    }
    else {
      $sa.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(function($gf){
    if (state.glutenFreeCrust) {
      $gf.style.visibility = "visible";
    }
    else {
      $gf.style.visibility = "hidden";
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperonni === false) {
   const pepper = document.querySelector('.btn-pepperonni')
   pepper.classList.remove('active')
  }
  else {
    const pepper = document.querySelector('.btn-pepperonni')
    pepper.classList.add('active')
  }

  if(state.mushrooms === false) {
    const mushr = document.querySelector('.btn-mushrooms')
    mushr.classList.remove('active')
   }
   else {
     const mushr = document.querySelector('.btn-mushrooms')
     mushr.classList.add('active')
   }

   if(state.greenPeppers === false) {
    const gren = document.querySelector('.btn-green-peppers')
    gren.classList.remove('active')
   }
   else {
     const gren = document.querySelector('.btn-green-peppers')
     gren.classList.add('active')
   }

   if(state.whiteSauce === false) {
    const sauce = document.querySelector('.btn-sauce')
    sauce.classList.remove('active')
   }
   else {
     const sauce = document.querySelector('.btn-sauce')
     sauce.classList.add('active')
   }

   if(state.glutenFreeCrust === false) {
    const crust = document.querySelector('.btn-crust')
    crust.classList.remove('active')
   }
   else {
     const crust = document.querySelector('.btn-crust')
     crust.classList.add('active')
   }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pizza = document.querySelector('.panelprice').innerHTML;
  const pripep = document.querySelector('.panelpricepep').innerHTML;
  const primush = document.querySelector('.panelpricemus').innerHTML;
  const prigre = document.querySelector('.panelpricegre').innerHTML;
  const prisau = document.querySelector('.panelpricesau').innerHTML;
  const pricru = document.querySelector('.panelpricecru').innerHTML;
  const totalPrices = parseInt(pizza)+parseInt(pripep)+parseInt(primush)+parseInt(prigre)+parseInt(prisau)+parseInt(pricru)
  document.querySelector('.totalPanelPrice').innerHTML =  " $ " +totalPrices
  
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  if(state.pepperonni===false) {document.querySelector('.panelpricepep').innerHTML = 0} 
  else {document.querySelector('.panelpricepep').innerHTML = 1}
   renderEverything()
  
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  if(state.mushrooms===true)
  {document.querySelector('.panelpricemus').innerHTML = 1} else {
    document.querySelector('.panelpricemus').innerHTML = 0
  }
  renderEverything()
  
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  if(state.greenPeppers===true)
  {document.querySelector('.panelpricegre').innerHTML = 1} else {
    document.querySelector('.panelpricegre').innerHTML = 0
  }
  renderEverything()
  
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  if(state.whiteSauce===true)
  {document.querySelector('.panelpricesau').innerHTML = 3} else {
    document.querySelector('.panelpricesau').innerHTML = 0
  }
  renderEverything()
  
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  if(state.glutenFreeCrust===true)
  {document.querySelector('.panelpricecru').innerHTML = 5} else {
    document.querySelector('.panelpricecru').innerHTML = 0
  }
  renderEverything()
  
 
}


