// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
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
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(x => {
    if (state.mushrooms) {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(x => {
    if (state.greenPeppers) {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let whiteSauce = document.querySelector('.sauce.sauce-white')
  if (state.whiteSauce) {
    whiteSauce.style.visibility = 'hidden'
  } else {
    whiteSauce.style.visibility = 'visible'
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let glutenFreeCrust = document.querySelector('.cheese')
  if (state.glutenFreeCrust) {
    glutenFreeCrust.style.visibility = 'hidden'
  } else {
    glutenFreeCrust.style.visibility = 'visible'
  }
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelector('.btn-pepperoni').classList.toggle('active')
  document.querySelector('.btn-mushrooms').classList.toggle('active')
  document.querySelector('.btn-green-peppers').classList.toggle('active')
  document.querySelector('.btn-sauce').classList.toggle('active')
  document.querySelector('.btn-crust').classList.toggle('active')

  //document.querySelectorAll('.panel .btn').forEach(btn => btn.classList.toggle('active'))
  }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = document.querySelector('.panel.price strong')
  let total = 10   
  let pepperoniPrice = document.getElementById('pepperoniPrice')
  let mushroomsPrice = document.getElementById('mushroomsPrice')
  let greenPeppersPrice = document.getElementById('greenPeppersPrice')
  let whiteSaucePrice = document.getElementById('whiteSaucePrice')
  let glutenFreeCrustPrice = document.getElementById('glutenFreeCrustPrice')

  if (state.pepperoni) {
    pepperoniPrice.style.textDecoration = 'none'
    total += ingredients.pepperoni.price
      price.innerHTML = `$` + total
    } else {
      pepperoniPrice.style.textDecoration = 'line-through'
    }
  
    if (state.mushrooms) {
      mushroomsPrice.style.textDecoration = 'none';
      total += ingredients.mushrooms.price
      price.innerHTML = `$` + total
    } else {
      mushroomsPrice.style.textDecoration = 'line-through';
    }
  
    if (state.greenPeppers) {
      greenPeppersPrice.style.textDecoration = 'none';
      total += ingredients.greenPeppers.price
      price.innerHTML = `$` + total
    } else {
      greenPeppersPrice.style.textDecoration = 'line-through';
    }
  
    if (state.whiteSauce) {
      whiteSaucePrice.style.textDecoration = 'line-through';
    } else {
      whiteSaucePrice.style.textDecoration = 'none';
      total += ingredients.whiteSauce.price
      price.innerHTML = `$` + total
    }
  
    if (state.glutenFreeCrust) {
      glutenFreeCrustPrice.style.textDecoration = 'line-through';
    } else {
      glutenFreeCrustPrice.style.textDecoration = 'none';
      total += ingredients.glutenFreeCrust.price
      price.innerHTML = `$` + total
    }

  }

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
