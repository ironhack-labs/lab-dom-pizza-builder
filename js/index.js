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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauce.classList.remove ('sauce-white')
    } else {
    sauce.classList.add('sauce-white');
}}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.remove('crust-gluten-free');
} else {
    crust.classList.add('crust-gluten-free');
}
}

function renderButtons() {
  let onePep = document.querySelector('.btn-pepperoni')
  onePep.classList.toggle('active', state.pepperoni)

  let oneMushroom = document.querySelector('.btn-mushrooms')
  oneMushroom.classList.toggle('active',state.mushrooms)
  
  let oneGreenPepper = document.querySelector('.btn-green-peppers')
  oneGreenPepper.classList.toggle('active', state.greenPeppers)

  let sauce = document.querySelector('.btn-sauce')
  sauce.classList.toggle('active', state.whiteSauce)

  let crust = document.querySelector('.btn-crust')
  crust.classList.toggle('active',state.glutenFreeCrust)

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();



// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

const pepperoniButton = document.querySelector('.btn-pepperoni');
pepperoniButton.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const mushroomsButton = document.querySelector('.btn-mushrooms');
mushroomsButton.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
const greenPeppersButton = document.querySelector('.btn-green-peppers');
greenPeppersButton.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const whiteSauceButton = document.querySelector('.btn-sauce');
whiteSauceButton.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
const crustButton = document.querySelector('.btn-crust');
crustButton.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});



