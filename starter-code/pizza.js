// Write your Pizza Builder JavaScript in this file.

// Constants 
let basePrice = 10
let ingredients = {
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

  renderPrice()
}


function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function(pep){
    if (state.pepperonni) {
      pep.style.visibility = "visible";
      document.querySelector('.btn-pepperonni').classList.add('active');
    }
    else {
      document.querySelector('.btn-pepperonni').classList.remove('active');
      pep.style.visibility = "hidden";
    }
  })
} 

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function(mushroom){
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
      document.querySelector('.btn-mushrooms').classList.add('active');
    }
    else {
      document.querySelector('.btn-mushrooms').classList.remove('active');
      mushroom.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function(pep){
    if (state.greenPeppers) {
      pep.style.visibility = "visible";
      document.querySelector('.btn-green-peppers').classList.add('active');
    }
    else {
      document.querySelector('.btn-green-peppers').classList.remove('active');
      pep.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
    document.querySelector('.btn-sauce').classList.add('active');
  }
  else {
    document.querySelector('.sauce').classList.remove('sauce-white');
    document.querySelector('.btn-sauce').classList.remove('active');  
  }
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
    if (state.glutenFreeCrust) {
      document.querySelector('.crust').classList.add('crust-gluten-free');
      document.querySelector('.btn-crust').classList.add('active');
    }
    else {
      document.querySelector('.crust').classList.remove('crust-gluten-free');
      document.querySelector('.btn-crust').classList.remove('active');  
    }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}



function renderPrice() {
  let price = basePrice;
  let prices = {
    pepperonni: 1,
    mushrooms: 1,
    greenPeppers: 1,
    whiteSauce: 3,
    glutenFreeCrust: 5
  }


  let thePriceDiv = document.querySelector(".panel.price > ul")
  thePriceDiv.innerHTML = "";
// each time we push a button we delete the entire price panel

  for(let ing in state){
    if(state[ing]){
      // then we loop through the state and for each ingredient that is true
      price += prices[ing];
      // we add the pice of the ingredient to the price variable
      let thing = document.createElement('li');
      // we create a blank <li>
      thing.innerHTML = `$${prices[ing]} ${ing}`;
      // we fill the <li> with the price and name of the ignredient
      thePriceDiv.append(thing);
      // and then we append the <li> to the <ul>
    }
  }


  document.querySelector('.panel.price strong').innerHTML = "$"+price;


  

  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
}


document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}


document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`