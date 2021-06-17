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
  document.querySelectorAll('.mushroom').forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((green) => {
    if (state.greenPeppers) {
      green.style.visibility = 'visible';
    } else {
      green.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.btn-sauce')

  if(state.whiteSauce){
    return sauce.classList.add('active')
  }else{
    return sauce.classList.remove('active')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.btn-crust')
  if(state.glutenFreeCrust){
    return crust.classList.add('active')
  }else{
    return crust.classList.remove('active')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
const pep = document . querySelector ( '.btn-pepperoni' )
const validP = () =>{
    if(state.pepperoni){
     return pep . classList . add ('active')
    }else {
      return pep . classList . remove ('active')
    }
  }
const mush = document.querySelector ('.btn-mushrooms')
const validM = () =>{
  if(state.mushrooms){
   return mush . classList . add ('active')
  }else {
    return mush . classList . remove ('active')
  }
} 
const green = document.querySelector ('.btn-green-peppers')
const validG = () =>{
  if(state.greenPeppers){
   return green . classList . add ('active')
  }else {
    return green . classList . remove ('active')
  }
} 
 validP()
 validM()
 validG()
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const painelPrices = document.querySelector('.panel.price ul')
  let lista = ''
  let totalItens = basePrice
  if(state.pepperoni){
    lista += `<li>$ ${ingredients.pepperoni.price} pepperoni</li>`;
    totalItens += ingredients.pepperoni.price
  }
  if(state.mushrooms){
    lista += `<li>$ ${ingredients.mushrooms.price} mushrooms</li>`;
    totalItens += ingredients.mushrooms.price
  }
  if(state.greenPeppers){
    lista += `<li>$ ${ingredients.greenPeppers.price} green peppers</li>`;
    totalItens += ingredients.greenPeppers.price
  }
  if(state.whiteSauce){
    lista += `<li>$ ${ingredients.whiteSauce.price} white sauce</li>`;
    totalItens += ingredients.whiteSauce.price
  }
  if(state.glutenFreeCrust){
    lista += `<li>$ ${ingredients.glutenFreeCrust.price} gluten-free crust</li>`;
    totalItens += ingredients.glutenFreeCrust.price
  }
  painelPrices.innerHTML = lista
  let total = document.querySelector('#total')
  total.innerHTML = `${totalItens}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;

  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});