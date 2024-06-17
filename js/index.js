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
});
}


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`

}
/*
function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}
*/
function renderWhiteSauce() {

  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('.whiteSauce');
  } else {
    document.querySelector('.sauce').classList.remove('.whiteSauce');
  }
}

function renderGlutenFreeCrust() {

  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('.glutenFreeCrust');
  } else {
    document.querySelector('.crust').classList.remove('.glutenFreeCrust');
  }

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.glutenFreeCrust').forEach((onePep) => {
    if (state.glutenFreeCrust) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((onePep) => {
    
  }
}

function renderPrice() {
  let total = 0;
  if(state.pepperoni){
    total = total + ingredients.pepperoni.price
  }
  if(state.mushrooms){
    total = total + ingredients.mushrooms.price
  }
  if(state.greenPeppers){
    total = total + ingredients.greenPeppers.price;
  }
  if(state.whiteSauce){
    total = total + ingredients.whiteSauce.price;
  }
  if(state.glutenFreeCrust){
    total = total + ingredients.glutenFreeCrust.price;
  }

}

const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)

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
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
