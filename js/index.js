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
  document.querySelectorAll('.mushroom').forEach((mushrooms) => {
    if (state.mushrooms) {
      mushrooms.style.visibility = 'visible';
    } else {
      mushrooms.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPeppers) => {
    if (state.greenPeppers) {
      greenPeppers.style.visibility = 'visible';
    } else {
      greenPeppers.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((whiteSauce) => {
    if (state.whiteSauce) {
      whiteSauce.classList.add('sauce-white');
    } else {
      whiteSauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((glutenFreeCrust) => { 
    console.log(state.glutenFreeCrust)
    if (state.glutenFreeCrust) {
      glutenFreeCrust.classList.add('crust-gluten-free');
    } else {
      glutenFreeCrust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">` 
  let pepperoni = document.querySelector('.btn-pepperoni');
  let mushrooms = document.querySelector('.btn-mushrooms');
  let greenPeppers = document.querySelector('.btn-green-peppers');
  let whiteSauce = document.querySelector('.btn-sauce');
  let glutenFreeCrust = document.querySelector('.btn-crust');

  if (state.pepperoni === true) {
    pepperoni.classList.add('active');
  } else {
    pepperoni.classList.remove('active');
  } 
  if (state.mushrooms === true) {
    mushrooms.classList.add('active');
  } else {
    mushrooms.classList.remove('active');
  }
  if (state.greenPeppers === true) {
    greenPeppers.classList.add('active');
  } else {
    greenPeppers.classList.remove('active');
  }
  if (state.whiteSauce === true) {
    whiteSauce.classList.add('active');
  } else {
    whiteSauce.classList.remove('active');
  }
  if (state.glutenFreeCrust === true) {
    glutenFreeCrust.classList.add('active');
  } else {
    glutenFreeCrust.classList.remove('active');
  }
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const panel = document.querySelector('.panel.price');
  const ingredientList = panel.querySelector('ul');
  const total = panel.querySelector('strong');
  // base price of Pizza is 10
  let counter = basePrice;
  // remove content from List and clear Total
  ingredientList.innerHTML = '';
  total.innerText = '';
  for (const key in state) {
    if (state[key]) {
      const newListItem = document.createElement('li');
      newListItem.innerText = `$${ingredients[key].price} ${ingredients[key].name}`;
      ingredientList.appendChild(newListItem);
      counter += ingredients[key].price;
    }
  }
  total.innerText = `$${counter}`;
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
})