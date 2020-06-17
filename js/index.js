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
  whiteSauce: true,
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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(pep => {
    if (state.greenPeppers) {
      pep.style.visibility = 'visible';
    } else {
      pep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce= document.querySelector('.sauce')
  if(state.whiteSauce){
    sauce.classList.remove('sauce-white')
  } else { 
    sauce.classList.add('sauce-white')
  }

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust= document.querySelector('.crust')
  if(state.glutenFreeCrust){
    crust.classList.remove('crust-gluten-free')
  } else { 
    crust.classList.add('crust-gluten-free')
  }
}

// function renderButtons() {
//   // Iteration 3: add/remove the class "active" of each `<button class="btn">`
//   //!!Placed inside of event listener!!
// }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();




//Buttons
const pepBtn=document.querySelector('.btn.btn-pepperoni')
const mushBtn=document.querySelector('.btn.btn-mushrooms')
const pprBtn=document.querySelector('.btn.btn-green-peppers')
const sceBtn=document.querySelector('.btn.btn-sauce')
const cstBtn=document.querySelector('.btn.btn-crust')


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
pepBtn.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  pepBtn.classList.toggle('active')
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
mushBtn.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  mushBtn.classList.toggle('active')
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
pprBtn.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  pprBtn.classList.toggle('active')
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
sceBtn.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  sceBtn.classList.toggle('active')
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
cstBtn.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  cstBtn.classList.toggle('active')
  renderEverything();
});