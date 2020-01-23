// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: `Pepperonni`, price: 1 },
  mushrooms: { name: `Mushrooms`, price: 1 },
  greenPeppers: { name: `Green Peppers`, price: 1 },
  whiteSauce: { name: `White sauce`, price: 3 },
  glutenFreeCrust: { name: `Gluten-free crust`, price: 5 }
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
  document.querySelectorAll(`.pep`).forEach(function ($pep) {
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
  document.querySelectorAll(`.mushroom`).forEach(function ($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(`.green-pepper`).forEach(function ($green) {
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
    }
    else {
      $green.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(`.sauce`).forEach(function ($sauce) {
    if (state.whiteSauce) {
      $sauce.style.visibility = "visible";
    }
    else {
      $sauce.style.visibility = "hidden";
    }
  })
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(`.crust`).forEach(function ($crust) {
    if (state.glutenFreeCrust) {
      $crust.style.visibility = "visible";
    }
    else {
      $crust.style.visibility = "hidden";
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttons = document.getElementsByClassName(`btn`);

  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove(`active`);
  }


}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceArray = [0,0,0,0,0];
  let totalPrice = 0;

  if(state.pepperonni === true) {
    priceArray[0] = 1;
    document.getElementsByClassName(`panel price`)[0].children[2].children[0].innerText = `$1 pepperonni`;
  } else{
    priceArray[0] = 0;
    document.getElementsByClassName(`panel price`)[0].children[2].children[0].innerText = `I f*cking hate pepperonni!`;
  }
  if(state.mushrooms === true) {
    priceArray[1] = 1;
    document.getElementsByClassName(`panel price`)[0].children[2].children[1].innerText = `$1 mushrooms`;
  } else{
    priceArray[1] = 0;
    document.getElementsByClassName(`panel price`)[0].children[2].children[1].innerText = `I f*cking hate shrooms!`;
  }
  if(state.greenPeppers === true) {
    priceArray[2] = 1;
    document.getElementsByClassName(`panel price`)[0].children[2].children[2].innerText = `$1 green peppers`;
  } else{
    priceArray[2] = 0;
    document.getElementsByClassName(`panel price`)[0].children[2].children[2].innerText = `I f*cking hate peppers!`;
  }
  if(state.whiteSauce === true) {
    priceArray[3] = 3;
    document.getElementsByClassName(`panel price`)[0].children[2].children[3].innerText = `$3 white sauce`;
  } else{
    priceArray[3] = 0;
    document.getElementsByClassName(`panel price`)[0].children[2].children[3].innerText = `Sauce makes me vomit`;
  }
  if(state.glutenFreeCrust  === true) {
    priceArray[4] = 5;
    document.getElementsByClassName(`panel price`)[0].children[2].children[4].innerText = `$5 gluten-free crust`;
  } else{
    priceArray[4] = 0;
    document.getElementsByClassName(`panel price`)[0].children[2].children[4].innerText = `I prefer with Gluten, thanks`;
  }
  //update the HTML
  totalPrice =  priceArray.reduce((a, b) => a + b, 0);
  document.getElementsByClassName('panel price')[0].children[1].innerText = `Your $${totalPrice} pizza`
  document.getElementsByClassName(`panel price`)[0].children[3].innerText = `$${totalPrice}`;

}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(`.btn.btn-pepperonni`).onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(`.btn.btn-mushrooms`).onclick = function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(`.btn.btn-green-peppers`).onclick = function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(`.btn.btn-sauce`).onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(`.btn.btn-crust`).onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}