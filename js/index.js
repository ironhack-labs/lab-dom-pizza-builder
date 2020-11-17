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

 // renderButtons();
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
  document.querySelectorAll(".mushroom").forEach(oneMushroom =>{
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    }
    else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(greenPeps =>{
    if (state.greenPeppers) {
      greenPeps.style.visibility = 'visible';
    }
    else {
      greenPeps.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  document.querySelector('.sauce').classList.toggle('sauce-white');
}

//Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelector('.crust').classList.toggle('crust-gluten-free');
}
// Iteration 3: add/remove the class "active" of each `<button class="btn">`
// function renderButtons() {
// }

//iteration 3 doesn't need a function


// Iteration 4: change the HTML of `<aside class="panel price">`
 function renderPrice() {
//   const pricePep = document.querySelector('.panel.price ul').children;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', (evt) => {
  evt.target.classList.toggle('active');
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', (evt) => {
  evt.target.classList.toggle('active');
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', (evt) => {
  evt.target.classList.toggle('active');
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();

});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', (evt) => {
  evt.target.classList.toggle('active');
  state.sauce = !state.sauce;
  renderWhiteSauce();
});

//Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', (evt) => {
  if (!state.glutenFreeCrust){
    evt.target.classList.toggle('active');
    state.glutenFreeCrust === true;
    renderGlutenFreeCrust();
  }
});
