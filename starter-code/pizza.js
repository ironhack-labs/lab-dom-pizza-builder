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
  glutenFreeCrust: false,
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
  document.querySelectorAll('.pep').forEach(function(pep){
    if (state.pepperonni) {
      pep.style.visibility = "visible";
    }
    else {
      pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function(mushroom){
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
    }
    else {
      mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(greenPepper){
    if (state.greenPeppers) {
      greenPepper.style.visibility = "visible";
    }
    else {
      greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    if (state.whiteSauce) {
      document.querySelector(".sauce").classList.add('sauce-white');
    }
    else {
      document.querySelector(".sauce").classList.remove('sauce-white');
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add('crust-gluten-free');
  }
  else {
    document.querySelector(".crust").classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // document.querySelector('.btn').onclick = function(buttonState) {
  //   if (state.pepperonni) {
  //     buttonState.setAttribute("class", "active");
  //   }
  //   else {
  //     buttonState.removeAttribute("class", "active");
  //   }
  //   renderEverything();
  // }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  // Attempt to refactor:
    // for (let i = 0 ; i < Object.keys(state).length ; i++) {
      // if (Object.keys(state)[i]) {
      //   let priceLine = document.createElement("li");
      // priceLine.setAttribute('id', 'priceLine');
      // priceLine.textContent = `1$ Pepperonni`;
      // pricePanel.appendChild(priceLine);
      // }
    // }
  
  let price = 10;
  
  if (state.pepperonni) {
    pricePep.style.visibility = "visible";
    price++;
  } else {
    pricePep.style.visibility = "hidden";
  }

  if (state.mushrooms) {
    priceMush.style.visibility = "visible";
    price++;  
  } else {
    priceMush.style.visibility = "hidden";
  }

  if (state.greenPeppers) {
    priceGreen.style.visibility = "visible";
    price++; 
  } else {
    priceGreen.style.visibility = "hidden";
  }

  if (state.whiteSauce) {
    priceWhite.style.visibility = "visible";
    price += 3;
  } else {
    priceWhite.style.visibility = "hidden";
  }

  if (state.glutenFreeCrust) {
    priceCrust.style.visibility = "visible";
    price += 5;
  } else {
    priceCrust.style.visibility = "hidden";
  }

  finalPrice.textContent = `$${price}`;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  this.classList.toggle("active");
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  this.classList.toggle("active");
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  this.classList.toggle("active");
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  this.classList.toggle("active");
  renderEverything();
}


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  this.classList.toggle("active");
  renderEverything();
}