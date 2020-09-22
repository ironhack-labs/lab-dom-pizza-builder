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
  document.querySelectorAll('.mushroom').forEach(onePep => {
    if (state.mushrooms) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceClass = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauceClass.classList.add('sauce-white')
  } else {
    sauceClass.classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustClass = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crustClass.classList.add('crust-gluten-free')
  } else {
    crustClass.classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // Vykintas here, probably coulde use a forEach or something like that but im not sure how to iterate over the different classes, this way is easy enough as you just copypaste
  let glutenButton = document.querySelector('.btn.btn-crust')
  if (!state.glutenFreeCrust) {
    glutenButton.classList.remove('active')
  } else {
    glutenButton.classList.add('active')
  }
  let sauceButton = document.querySelector('.btn.btn-sauce')
  if (!state.whiteSauce) {
    sauceButton.classList.remove('active')
  } else {
    sauceButton.classList.add('active')
  }
  let greenPepperButton = document.querySelector('.btn.btn-green-peppers')
  if (!state.greenPeppers) {
    greenPepperButton.classList.remove('active')
  } else {
    greenPepperButton.classList.add('active')
  }
  let mushroomButton = document.querySelector('.btn.btn-mushrooms')
  if (!state.mushrooms) {
    mushroomButton.classList.remove('active')
  } else {
    mushroomButton.classList.add('active')
  }
  let pepperoniButton = document.querySelector('.btn.btn-pepperoni')
  if (!state.pepperoni) {
    pepperoniButton.classList.remove('active')
  } else {
    pepperoniButton.classList.add('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = document.querySelector('.panel.price ul')
  let pepLi = document.createElement('li')
  let pepRmv = document.querySelector('pepLi')
  pepLi.classList.add('pepLi')
  pepLi.innerHTML = `<li>$1 pepperoni</li>`
  if (state.pepperoni) {
    list.appendChild(pepLi)
  } else {
    list.removeChild()
  }
  //i do not know what to do next, how to target the li that i add and it not mess up the css, this kinda works, but keeps adding pepperoni infinitely
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  console.log('shrroms')
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  console.log('shgreenPeppersrroms')
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  console.log('sauce')
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  console.log('cruuusty')
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
