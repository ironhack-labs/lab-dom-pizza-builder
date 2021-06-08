// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { 
    name: 'Pepperoni', 
    price: 1 
  },
  mushrooms: { 
    name: 'Mushrooms', 
    price: 1 
  },
  greenPeppers: { 
    name: 'Green Peppers', 
    price: 1 
  },
  whiteSauce: { 
    name: 'White sauce', 
    price: 3 
  },
  glutenFreeCrust: { 
    name: 'Gluten-free crust', 
    price: 5 
  }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(function (onePep) {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  })
}

  // Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll ('.mush').forEach(function (oneMush) {
    if (state.mushrooms){
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

  // Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll ('.green').forEach(function(oneGreen) {
    if (state.greenPeppers){
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  })
}

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  document.querySelectorAll ('.sauce').forEach(function(oneSauce (sauce){
    if (state.whiteSauce) {
      oneWhite.classList.add('sauce-white');
    } else {
      oneWhite.classList.remove('sauce-white');
    }
  })
}

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  document.querySelectorAll ('.crust').forEach(function(crust) {
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free'); 
    } else {
      crust.classList.remove('crust-gluten-free');
    }
  })
}


  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  function renderButtons() {
for (let ingredient in state) {
  console.log(lookup[ingredient]);
  const button = document.querySelector(lookup[ingredient]);
  if (state[ingredient]) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
}
}

  // Iteration 4: change the HTML of `<aside class="panel price">`
  function renderPrice() {
let list = '';
let price = basePrice;
for (let ingredient in state) {
console.log(ingredients [ingredient])
if (state[ingredient]) {
  list += '<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>'
  price += ingredients [ingredient].price
}
}
document.querySelector('.panel.price ul').innerHTML = list;
document.querySelector('.panel.price strong').innerText = '$${price}';
  }

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').onclick = function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').onclick = function () {
state.greenPeppers = !state.greenPeppers;
renderEverything ();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything ();
  }

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}