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
  
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
      if (state.mushrooms) {
        
        $mushroom.style.visibility = "visible";
      }
      else {
        
        $mushroom.style.visibility = "hidden";
      }
    });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenp){
    if (state.greenPeppers) {
      $greenp.style.visibility = "visible";
    }
    else {
      $greenp.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($whiteSauce) {
    if (state.whiteSauce) {
      $whiteSauce.classList.add('sauce-white');
    } else {
      $whiteSauce.classList.remove('sauce-white');
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($crust) {
    if (state.glutenFreeCrust) {
      $crust.classList.add('crust-gluten-free');
    } else {
      $crust.classList.remove('crust-gluten-free');
    }
  })

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">
  let pepperoniButton = document.querySelector('.btn-pepperonni');
  let greenPeppersButton = document.querySelector('.btn-green-peppers');
  let mushroomsButton = document.querySelector('.btn-mushrooms');
  let whiteSauceButton = document.querySelector('.btn-sauce');
  let glutenFreeCrustButton = document.querySelector('.btn-crust');

  if(state.pepperonni) {
    pepperoniButton.classList.add('active');
  } else {
    pepperoniButton.classList.remove('active');
  }

  if (state.greenPeppers) {
    greenPeppersButton.classList.add('active');
  } else {
    greenPeppersButton.classList.remove('active');
  }

  if (state.mushrooms) {
    mushroomsButton.classList.add('active');
  } else {
    mushroomsButton.classList.remove('active');
  }

  if (state.whiteSauce) {
    whiteSauceButton.classList.add('active');
  } else {
    whiteSauceButton.classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    glutenFreeCrustButton.classList.add('active');
  } else {
    glutenFreeCrustButton.classList.remove('active');
  }

   
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let panelPrice = document.querySelector('.price ul');
  let finalPrice = document.querySelector('.price strong');
  panelPrice.innerHTML = '';
  let totalPrice = basePrice;
  /* 
  if(state.pepperonni) {
    panelPrice.innerHTML+= `<li>$1 pepperonni</li>`;
    totalPrice += ingredients.pepperonni.price;
  } 

  if (state.mushrooms) {
    panelPrice.innerHTML+= `<li>$1 mushrooms</li>`
    totalPrice += ingredients.mushrooms.price;
  } 

  if (state.greenPeppers) {
    panelPrice.innerHTML+=`<li>$1 green peppers</li>`
    totalPrice += ingredients.greenPeppers.price;
  } 

  if (state.whiteSauce) {
    panelPrice.innerHTML+=`<li>$3 white sauce</li>`
    totalPrice += ingredients.whiteSauce.price;
  } 

  if (state.glutenFreeCrust) {
    panelPrice.innerHTML+=`<li>$5 gluten-free crust</li>`
    totalPrice += ingredients.glutenFreeCrust.price;
  } */

  for (const key in ingredients) {
    if (state[key])
    let price = ingredients[key].price;
    let name = ingredients[key].name;
    panelPrice.innerHTML+=`<li>$${price} ${name}</li>`
    totalPrice+=price;
  }

  finalPrice.innerText = '$'+totalPrice;

}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
  
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms= !state.mushrooms
  renderEverything()
  
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers= !state.greenPeppers
  renderEverything()
  
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce= !state.whiteSauce
  renderEverything()
  
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
  
}