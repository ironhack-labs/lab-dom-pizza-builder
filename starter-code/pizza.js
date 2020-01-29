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
  renderPepperonni();
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()
  // renderButtons()
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
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function(mush){
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    }
    else {
      mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(greenPep){
    if (state.greenPeppers) {
      greenPep.style.visibility = "visible";
    }
    else {
      greenPep.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  sauceWhite = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauceWhite.classList.remove("sauce-white");
  }
  else {
    sauceWhite.classList.add("sauce-white");
  }
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  glutenFree = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    glutenFree.classList.remove("crust-gluten-free");
  }
  else {
    glutenFree.classList.add("crust-gluten-free");
  }
}


// function renderButtons() { 
//     var buttons = document.querySelector(".controls");
//     buttons.onclick = function(event) {
//      event.target.classList.toggle("active");
//   };
// }

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`


function renderPrice() {
  if (!state.pepperonni) {
    document.getElementById("price-peppe").innerHTML="";  
  } else {
    document.getElementById("price-peppe").innerHTML="$1 pepperonni"
  }
  if (!state.mushrooms) {
    document.getElementById("price-mush").innerHTML="";  
  } else {
    document.getElementById("price-mush").innerHTML="$1 mushroom"
  }
  if (!state.greenPeppers) {
    document.getElementById("price-greenpep").innerHTML="";  
  } else {
    document.getElementById("price-greenpep").innerHTML="$1 green Pepper"
  }
  if (!state.whiteSauce) {
    document.getElementById("price-white").innerHTML="";  
  } else {
    document.getElementById("price-white").innerHTML="$3 white sauce"
  }
  if (!state.glutenFreeCrust) {
    document.getElementById("price-gluten").innerHTML="";  
  } else {
    document.getElementById("price-gluten").innerHTML="$3 gluten free crust"
  }
  
  var keysState=Object.keys(state);
  console.log(keysState);
  var price = 10;

  for (let i=0;i<keysState.length;i++) {
    if (state[keysState[i]]) {
    price += ingredients[keysState[i]].price;
  }
  }
  document.getElementsByTagName("strong")[0].innerText= `$${price}`;

}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  this.classList.toggle("active");

  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  this.classList.toggle("active");
  console.log(this);
  renderEverything();
};
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  this.classList.toggle("active");
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  this.classList.toggle("active");
  renderEverything();
};


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  this.classList.toggle("active");
  renderEverything();
};