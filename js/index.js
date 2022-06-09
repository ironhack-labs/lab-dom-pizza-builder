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
  document.querySelectorAll('.pep').forEach(function (onePep) {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function (oneMush) {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });

  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function (onePep) {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function (sauce) {
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white');
    } else {
      sauce.classList.remove('sauce-white');
    }
  });
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(function (glutenFreeCrust) {
    if (state.glutenFreeCrust) {
      glutenFreeCrust.classList.add('crust-gluten-free');
    } else {
      glutenFreeCrust.classList.remove('crust-gluten-free');
    }
  });
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  const pepBtn = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni) {
    pepBtn.classList.add('active');
  } else {
    pepBtn.classList.remove('active');
  }

  const mushBtn = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    mushBtn.classList.add('active');
  } else {
    mushBtn.classList.remove('active');
  }

  const pepperBtn = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    pepperBtn.classList.add('active');
  } else {
    pepperBtn.classList.remove('active');
  }

  const sauceBtn = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    sauceBtn.classList.add('active');
  } else {
    sauceBtn.classList.remove('active');
  }

  const crustBtn = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    crustBtn.classList.add('active');
  } else {
    crustBtn.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let totalPrice = basePrice;
  let addIngredients = document.querySelector('aside ul');
  addIngredients.innerHTML = '';

  //console.log(totalPrice)
  //console.log(addIngredients)
  

  
  //Now I need to check if the ingredient was selectded 
  for (let item in ingredients) {
    if (state[item]) {
      totalPrice += ingredients[item].price;
      addIngredients.innerHTML += `<li>$${
        ingredients[item].price
      } ${ingredients[item].name}</li>`;
    }
  }
  //To change de total price,
  document.querySelector('aside strong').innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
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

