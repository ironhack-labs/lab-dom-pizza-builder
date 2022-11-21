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
//buttoms it3
  const pepBtn = document.querySelector('.btn.btn-pepperoni')
  const mushBtn = document.querySelector('.btn.btn-mushrooms')
  const greenBtn = document.querySelector('.btn.btn-green-peppers')
  const whiteSauceBtn = document.querySelector('.btn.btn-sauce')
  const glutenBtn = document.querySelector('.btn.btn-crust')

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
function renderEverything(event) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice(event);
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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if(state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white')
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white')
  }
}
  
function renderGlutenFreeCrust() {
  if(state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  state.pepperoni ? pepBtn.classList.add('active') : pepBtn.classList.remove('active')
  state.mushrooms ? mushBtn.classList.add('active') : mushBtn.classList.remove('active')
  state.greenPeppers ? greenBtn.classList.add('active') : greenBtn.classList.remove('active')
  state.whiteSauce ? whiteSauceBtn.classList.add('active') : whiteSauceBtn.classList.remove('active')
  state.glutenFreeCrust ? glutenBtn.classList.add('active') : glutenBtn.classList.remove('active')


  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice(event) {
  if(event) {
    const item = event.target.id
    const panel = document.querySelector('.panel.price')
    const priceNode = panel.querySelector(`#${item}`)


    if(state[item]) {
      priceNode.classList.remove('hidden')
    } else {
      priceNode.classList.add('hidden')
    }
  }

  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

const buttons = document.querySelectorAll('.btn')
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
buttons.forEach(btn => {
  btn.addEventListener('click', function (event) {
    state[event.target.id] = !state[event.target.id];
    renderEverything(event);
  });
})

// // Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
// document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (event) {
//   state.mushrooms = !state.mushrooms;
//   renderEverything(event);
// });

// // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
// document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (event) {
//   state.greenPeppers = !state.greenPeppers;
//   renderEverything(event);
// });

// // Iteration 2: Add click event listener on `button class="btn btn-sauce">`
// document.querySelector('.btn.btn-sauce').addEventListener('click', function (event) {
//   state.whiteSauce = !state.whiteSauce;
//   renderEverything(event);
// });

// // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
// document.querySelector('.btn.btn-crust').addEventListener('click', function (event) {
//   state.glutenFreeCrust = !state.glutenFreeCrust;
//   renderEverything(event);
// });
