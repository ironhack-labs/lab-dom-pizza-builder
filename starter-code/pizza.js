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
  document.querySelectorAll('.mushroom').forEach(function($pep){
    if (state.mushrooms) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($pep){
    if (state.greenPeppers) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const elem = document.querySelector('.sauce');

  if (state.whiteSauce) {
    elem.classList.add("sauce-white");
  }
  else {
    elem.classList.remove("sauce-white");
  }}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const elem = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    elem.classList.add("crust-gluten-free");
  }
  else {
    elem.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
      

const pepButton = document.querySelector(".btn-pepperonni");
const mushButton = document.querySelector(".btn-mushrooms");
const greenPepButton = document.querySelector(".btn-green-peppers");
const sauceButton = document.querySelector(".btn-sauce");
const crustButton = document.querySelector(".btn-crust");

  if (state.pepperonni) {
    pepButton.classList.add("active");
  } else if (!state.pepperonni) {
    pepButton.classList.remove("active");
  }
  if (state.mushrooms) {
    mushButton.classList.add("active");
  } else if (!state.mushrooms) {
    mushButton.classList.remove("active");
  }
  if (state.greenPeppers) {
    greenPepButton.classList.add("active");
  } else if (!state.greenPeppers) {
    greenPepButton.classList.remove("active");
  }
  if (state.whiteSauce) {
    sauceButton.classList.add("active");
  } else if (!state.whiteSauce) {
    sauceButton.classList.remove("active");
  }
  
  if (state.glutenFreeCrust) {
    crustButton.classList.add("active");
  } else if (!state.glutenFreeCrust) {
    crustButton.classList.remove("active");
  }
}
  

function renderPrice() {

   let priceList = "";
   let sum = 10;
   //let pricePanel = document.querySelector(".panel.price");

   if (state.pepperonni) {
    priceList += "<li>$1 pepperonni</li>";
    sum += 1;
    
   }

   if (state.mushrooms) {
    priceList +=  "<li>$1 mushrooms</li>";
    sum += 1;
    
   }

   if (state.greenPeppers) {
    priceList += "<li>$1 green peppers</li>";
    sum += 1;
    
   }

   if (state.whiteSauce) {
    priceList += "<li>$3 white sauce</li>";
    sum += 3;
    
   }

   if (state.glutenFreeCrust) {
    priceList += "<li>$5 gluten-free crust</li>";
    sum += 5;
    

    

   }
  const totalPrice = document.getElementsByTagName("strong")[0];
  totalPrice.innerHTML = "$" + sum;

   //document.getElementsByTagName("ul")[1].innerHTML = "";
   document.getElementsByTagName("ul")[1].innerHTML = priceList;
}



renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').onclick = function() {
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
// Iteration 2: Add click event listener on `<button class="btn btn-crust">

document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}