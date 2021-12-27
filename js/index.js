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
 const wS = document.querySelector('.sauce'); 
 if (state.whiteSauce) {
   wS.classList.add('sauce-white');
 } else { 
   wS.classList.remove('sauce-white')
  } 
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const cGF = document.querySelector('.crust');
  if (state.glutenFreeCrust){
    cGF.classList.add('crust-gluten-free');
  } else {
    cGF.classList.remove('crust-gluten-free');
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  if (state.pepperoni){
    document.querySelector('.btn-pepperoni').classList.add('active')
  } else { 
    document.querySelector('.btn-pepperoni').classList.remove('active')
  } 
  if (state.mushrooms){
    document.querySelector('.btn-mushrooms').classList.add('active')
  } else { 
    document.querySelector('.btn-mushrooms').classList.remove('active')
  } 
  if (state.greenPeppers){
    document.querySelector('.btn-green-peppers').classList.add('active')
  } else { 
    document.querySelector('.btn-green-peppers').classList.remove('active')
  } 
  if (state.whiteSauce){
    document.querySelector('.btn-sauce').classList.add('active')
  } else { 
    document.querySelector('.btn-sauce').classList.remove('active')
  } 
  if (state.glutenFreeCrust){
    document.querySelector('.btn-crust').classList.add('active')
  } else { 
    document.querySelector('.btn-crust').classList.remove('active')
  } 
} 

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  const panel = document.querySelector('.panel.price ul');
  const price = document.querySelector('.panel.price strong');
  panel.innerHTML = '';
  let basePrice = 10;
  if (state.pepperoni){ 
    panel.innerHTML += `<li>$1 pepperoni</li>`
    basePrice += 1;
  }
  if (state.mushrooms){
    panel.innerHTML += `<li>$1 mushrooms</li>`
    basePrice += 1;
  }
  if (state.greenPeppers){
    panel.innerHTML += `<li>$1 green peppers</li>`
    basePrice += 1;
  }
  if (state.whiteSauce){
    panel.innerHTML += `<li>$3 white sauce</li>`
    basePrice += 3;
  }
  if (state.glutenFreeCrust){
    panel.innerHTML += `<li>$5 gluten-free crust</li>`
    basePrice += 5;
  }
  price.innerHTML = basePrice;
      
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
  
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', function (){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', function (){
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything();
});

