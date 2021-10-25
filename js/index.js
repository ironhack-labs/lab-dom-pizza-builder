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
  whiteSauce: true,
  glutenFreeCrust: true
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
  // Iteration 1: set the visibility of `<section class='mushroom'>`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
  if (state.mushrooms) {
    oneMush.style.visibility = 'visible';
  }else{
    oneMush.style.visibility ='hidden'
  }});
}
function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class='green-pepper'>`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    }else{
      onePepper.style.visibility ='hidden'
    }});
}
function renderWhiteSauce() {
  // Iteration 2: add/remove the class 'sauce-white' of `<section class='sauce'>`
  document.querySelectorAll('.sauce-white').forEach((sauceWhite) => {
    if (state.whiteSauce) {
      sauceWhite.style.visibility = 'visible';
    }else{
      sauceWhite.style.visibility ='hidden'
    }});
}
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class 'crust-gluten-free' of `<section class='crust'>`
  document.querySelectorAll('.crust-gluten-free').forEach((gluttenFree) => {
    if (state.glutenFreeCrust) {
      gluttenFree.style.visibility = 'visible';
    }else{
      gluttenFree.style.visibility ='hidden'
    }});
}
function renderButtons() {
  // Iteration 3: add/remove the class 'active' of each `<button class='btn'>`
  // LO AGREGAMOS EN EL EVENT LISTENER
}
function renderPrice() {
  const pep = document.getElementById('pep-li')
  const mush = document.getElementById('mush-li')
  const gp = document.getElementById('gp-li')
  const ws = document.getElementById('ws-li')
  const gfc = document.getElementById('gfc-li')
  var price = document.getElementById('end-price')

  if(!state.pepperoni){
    pep.innerHTML = 0*1;
  } else {
    pep.innerHTML = 1*1;
  }

  if(!state.mushrooms){
    mush.innerHTML = 0*1;
  } else {
    mush.innerHTML = 1*1;
  }
  
  if(!state.greenPeppers){
    gp.innerHTML = 0*1;
  } else {
    gp.innerHTML = 1*1;
  }

  if(!state.whiteSauce){
    ws.innerHTML = 0*1;
  } else {
    ws.innerHTML = 3*1;
  }

  if(!state.glutenFreeCrust){
    gfc.innerHTML = 0*1;
  } else {
    gfc.innerHTML = 5*1;
  }

  var final_price = pep.innerHTML*1 +mush.innerHTML*1 +gp.innerHTML*1 + ws.innerHTML*1 + gfc.innerHTML *1 +10

  price.innerHTML = final_price
}
renderEverything();
// Iteration 1: Example of a click event listener on `<button class='btn btn-pepperoni'>`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  document.querySelector('.btn.btn-pepperoni').classList.toggle('active')
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class='btn btn-mushrooms'>`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  document.querySelector('.btn.btn-mushrooms').classList.toggle('active')
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class='btn btn-green-peppers'>`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  document.querySelector('.btn.btn-green-peppers').classList.toggle('active')
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class='btn btn-sauce'>`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  document.querySelector('.btn.btn-sauce').classList.toggle('active')
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class='btn btn-crust'>`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  document.querySelector('.btn.btn-crust').classList.toggle('active')
  renderEverything();
});