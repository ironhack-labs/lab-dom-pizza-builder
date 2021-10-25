// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
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
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if(state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let theSauce = document.querySelector('.sauce');
  if(state.whiteSauce) {
    theSauce.classList.add('sauce-white');
  } else {
    theSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let theCrust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    theCrust.classList.add('crust-gluten-free');
  } else {
    theCrust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelector('.btn.btn-pepperoni').classList.toggle('active', state.pepperoni);
  document.querySelector('.btn.btn-mushrooms').classList.toggle('active', state.mushrooms);
  document.querySelector('.btn.btn-green-peppers').classList.toggle('active', state.greenPeppers);
  document.querySelector('.btn.btn-sauce').classList.toggle('active', state.whiteSauce);
  document.querySelector('.btn.btn-crust').classList.toggle('active', state.glutenFreeCrust);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pepLi = document.querySelector('.price li:nth-child(1)');
  let mushLi = document.querySelector('.price li:nth-child(2)');
  let greenLi = document.querySelector('.price li:nth-child(3)');
  let sauceLi = document.querySelector('.price li:nth-child(4)');
  let crustLi = document.querySelector('.price li:nth-child(5)');
  let theIngredients = 0;

  state.pepperoni ? (pepLi.style.display = 'block', theIngredients += ingredients.pepperoni.price) : pepLi.style.display = 'none';
  state.mushrooms ? (mushLi.style.display = 'block', theIngredients += ingredients.mushrooms.price) : mushLi.style.display = 'none';
  state.greenPeppers ? (greenLi.style.display = 'block', theIngredients += ingredients.greenPeppers.price) : greenLi.style.display = 'none';
  state.whiteSauce ? (sauceLi.style.display = 'block', theIngredients += ingredients.whiteSauce.price) : sauceLi.style.display = 'none';
  state.glutenFreeCrust ? (crustLi.style.display = 'block', theIngredients += ingredients.glutenFreeCrust.price) : crustLi.style.display = 'none';

  document.querySelector('.price strong').innerHTML = '$' + (basePrice + theIngredients);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
