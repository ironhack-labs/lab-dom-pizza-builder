// Write your Pizza Builder JavaScript in this file.
const pepperoniButton = document.querySelector('.btn.btn-pepperoni')
const mushroomButton = document.querySelector('.btn.btn-mushrooms')
const greenPeppersButton = document.querySelector('.btn.btn-green-peppers')
const sauceButton = document.querySelector('.btn.btn-sauce')
const crustButton = document.querySelector('.btn.btn-crust')
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

// const pep = 'pepperoni'
// state[pep]
// ingredients[pep]

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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const oneWhiteSauce = document.querySelector('.sauce')
    if (state.whiteSauce) {
      oneWhiteSauce.classList.add('sauce-white');
    } else {
      oneWhiteSauce.classList.remove('sauce-white');
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      ;
    } else {
      ;
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
   state.pepperoni ? pepperoniButton.classList.add('active') :  pepperoniButton.classList.remove('active')
  // document.querySelector('.btn.btn-pepperoni').classList[state.pepperoni ? 'add' : 'remove']('active')
   state.mushrooms ? mushroomButton.classList.add('active') : mushroomButton.classList.remove('active')
   state.greenPeppers ? greenPeppersButton.classList.add('active') : greenPeppersButton.classList.remove('active')
   state.whiteSauce ? sauceButton.classList.add('active') : sauceButton.classList.remove('active')
   state.glutenFreeCrust ? crustButton.classList.add('active') : crustButton.classList.remove('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const price = document.querySelector('.price strong')
  let total = basePrice
  const ul = document.querySelector('.panel.price ul') //select the ul
    ul.innerHTML = '' //remove ul contents
  for (const key in state){ 
    if (state[key]) {
      const el = ingredients[key]
      const newLi = document.createElement('li')
      newLi.textContent = `$${el.price} ${el.name}`
      ul.append(newLi)
      total += el.price
    }
  }
  price.textContent = `Total: $${total}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
pepperoniButton.addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
mushroomButton.addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
greenPeppersButton.addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
sauceButton.addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
crustButton.addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});