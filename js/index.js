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
 document.querySelectorAll('.mushroom').forEach((mushroom) => {
  if(state.mushrooms){
    mushroom.style.visibility = 'visible';
  }else{
    mushroom.style.visibility = 'hidden';
  }
 })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if(state.greenPeppers){
      pepper.style.visibility = 'visible';
    }else{
      pepper.style.visibility = 'hidden';
    }
   })
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce');
  const parentEl = sauce.parentElement.children[1];
  if(state.whiteSauce){
    parentEl.classList.add('sauce-white');
  }else{
    parentEl.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    let crust = document.querySelector('.crust');
    if(state.glutenFreeCrust){
      crust.classList.add('crust-gluten-free');
    }else{
      crust.classList.remove('crust-gluten-free');
    }
}

function renderButtons() {
  const pepperoniBtn = document.querySelector('.btn-pepperoni');
  const mushroomsBtn = document.querySelector('.btn-mushrooms');
  const greenPeppersBtn = document.querySelector('.btn-green-peppers');
  const sauceBtn = document.querySelector('.btn-sauce');
  const crustBtn = document.querySelector('.btn-crust');
  
  if(state.pepperoni === true){
    pepperoniBtn.classList.add('active');
  }else{
    pepperoniBtn.classList.remove('active');
  }

  if(state.mushrooms === true){
    mushroomsBtn.classList.add('active');
  }else{
    mushroomsBtn.classList.remove('active');
  }

  if(state.greenPeppers === true){
    greenPeppersBtn.classList.add('active');
  }else{
    greenPeppersBtn.classList.remove('active');
  }

  if(state.whiteSauce === true){
    sauceBtn.classList.add('active');
  }else{
    sauceBtn.classList.remove('active');
  }


  if(state.glutenFreeCrust === true){
    crustBtn.classList.add('active');
  }else{
    crustBtn.classList.remove('active');
  }


  // whiteSauce: false,
  // glutenFreeCrust: false
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (){
  state.mushrooms = !state.mushrooms;
  renderEverything()
})

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (){
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
})

document.querySelector('.btn.btn-sauce').addEventListener('click', function (){
  state.whiteSauce = !state.whiteSauce;
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function (){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
})