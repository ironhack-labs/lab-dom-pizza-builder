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
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers){
    if(state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    }
    else {
      $greenPeppers.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const elementWhiteSauce = document.querySelector('.sauce')
  function trueWhiteSauce(){
    if(state.whiteSauce) {
      if (!elementWhiteSauce.className.includes("sauce-white")){
        elementWhiteSauce.classList.add("sauce-white")
      }
    }
    else {
        elementWhiteSauce.classList.remove("sauce-white")
    }
  }
  trueWhiteSauce();
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    const elementCrust = document.querySelector('.crust')
    function trueCrust() {
      if (state.glutenFreeCrust) {
        if (!elementCrust.className.includes("crust-gluten-free")) {
          elementCrust.classList.add("crust-gluten-free")
        }
      } else {
        elementCrust.classList.remove("crust-gluten-free")
      }
    }
    trueCrust();
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttonPep = document.querySelector(".btn-pepperonni");
  if (state.pepperonni) {
    buttonPep.classList.add("active");
  } else {
    buttonPep.classList.remove("active");
  }

  const buttonMush = document.querySelector('.btn-mushrooms');
  if(state.mushrooms) {
    buttonMush.classList.add("active");
  }
  else {
    buttonMush.classList.remove("active");
  }

  const buttonGreen = document.querySelector('.btn-green-peppers');
  if(state.greenPeppers){
    buttonGreen.classList.add("active");
  }
  else{
    buttonGreen.classList.remove("active");
  }

  const buttonSauce = document.querySelector('.btn-sauce');
  if(state.whiteSauce){
    buttonSauce.classList.add('active');
  }
  else{
    buttonSauce.classList.remove('active');
  }

  const buttonCrust = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust){
    buttonCrust.classList.add("active");
  }
  else {
    buttonCrust.classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
 const priceList = document.querySelector('.price').children[2].children  ;
 const totalPrice = 10;
  if(state.pepperonni){
    document.querySelector('.price').children[2].children[0].style.display = "block";
  } else{
    document.querySelector('.price').children[2].children[0].style.display = "none";
  }
  if (state.mushrooms) {
    document.querySelector('.price').children[2].children[1].style.display = "block";
  } else{
    document.querySelector('.price').children[2].children[1].style.display = "none";
  }
  if (state.greenPeppers) {
    document.querySelector('.price').children[2].children[2].style.display = "block";
  } else {
    document.querySelector('.price').children[2].children[2].style.display = "none";
  }
  if (state.whiteSauce) {
    document.querySelector('.price').children[2].children[3].style.display = "block";
  } else {
    document.querySelector('.price').children[2].children[3].style.display = "none";
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.price').children[2].children[4].style.display = "block";
  } else {
    document.querySelector('.price').children[2].children[4].style.display = "none";
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
    if(state.mushrooms){}
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
    document.querySelector('.btn.btn-crust').onclick = function () {
      state.glutenFreeCrust = !state.glutenFreeCrust
      renderEverything()
    }