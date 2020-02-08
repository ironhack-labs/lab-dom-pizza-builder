// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1 , isAdded: true},
  mushrooms: {name: 'Mushrooms', price: 1 , isAdded: true},
  greenPeppers: {name: 'Green Peppers', price: 1 , isAdded: true},
  whiteSauce: {name: 'White sauce', price: 3 , isAdded: false},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5 , isAdded: false},
}


// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
}

//stateAray creates a array for the states
let stateArray = Object.values(state);

//productArrat creates a array for the ingredients
let productArray = Object.values(ingredients);
console.log(productArray)



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
    if(state.mushrooms) {
      $mushroom.style.visibility = 'visible';
    } else {
      $mushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($gP){
    if(state.greenPeppers) {
      $gP.style.visibility = 'visible';
    } else {
      $gP.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if(state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if(state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}



function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttonArray = document.querySelectorAll('.btn');
  buttonArray.forEach(($btn)=>{$btn.classList.remove('active')})
 
  for (let i=0; i<buttonArray.length; i++) {
    if(productArray[i].isAdded) {
      buttonArray[i].classList.add('active')
    } else {
      buttonArray[i].classList.remove('active')
    }
  }
    
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let panelList = document.querySelectorAll('.panel.price li')
  panelList.forEach(($panel)=>{$panel.style.display='none'})
  
  for (let i=0; i<panelList.length; i++) {
    if(productArray[i].isAdded) {
      panelList[i].style.display = 'block'
    } else {
      panelList[i].style.display = 'none'
    }
  }
  let price = productArray.reduce((pV,cV)=>{
    if(cV.isAdded) {
      return pV+cV.price
    } else {
      return pV
    }
  },10)
  let priceText = '$' + price
  document.querySelector('.panel.price strong').innerHTML = priceText;


}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  productArray[0].isAdded = !productArray[0].isAdded
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  productArray[1].isAdded = !productArray[1].isAdded
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  productArray[2].isAdded = !productArray[2].isAdded
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  productArray[3].isAdded = !productArray[3].isAdded
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  productArray[4].isAdded = !productArray[4].isAdded
  renderEverything();
}