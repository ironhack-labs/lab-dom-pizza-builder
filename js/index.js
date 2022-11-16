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
    if (state.mushrooms) oneMush.style.visibility = 'visible';
    else oneMush.style.visibility = 'hidden';
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) oneGreenPep.style.visibility = 'visible';
    else oneGreenPep.style.visibility = 'hidden';
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.crust .sauce')
  if (state.whiteSauce) sauce.classList.add('sauce-white')
  else sauce.classList.remove('sauce-white')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustList = document.querySelector('.crust').classList
  if (state.glutenFreeCrust) crustList.add('crust-gluten-free')
  else crustList.remove('crust-gluten-free')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttons = document.querySelectorAll('.btn')
  buttons.forEach(button => {
    for ([key, obj] of Object.entries(ingredients)) {

      if (button.innerHTML.toLowerCase() === obj.name.toLowerCase()) {
        if (state[key]) button.classList.add('active')
        else button.classList.remove('active')
      }
    };
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const ingredientList = document.querySelector('.price ul')
  const result = document.querySelector('.price strong')
  ingredientList.innerHTML = ''
  result.innerHTML = ''

  let total = 0;

  for (const ingredient of Object.keys(state)) {
    if (state[ingredient]) {
      const ingElement = document.createElement('li')
      ingElement.innerHTML = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`
      ingredientList.appendChild(ingElement)
      total += ingredients[ingredient].price
    }
  }

  result.innerHTML = `$${total + 10}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', ()=>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', ()=>{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})