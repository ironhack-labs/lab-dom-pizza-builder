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

  renderButtons();
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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  document.querySelectorAll('.sauce').forEach(topping => {
    if (state.whiteSauce) {
      topping.classList.add(`sauce-white`);
    } else {
      topping.classList.remove(`sauce-white`);
    }})
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="">`
  document.querySelectorAll('.crust').forEach(crusties => {
    if (state.glutenFreeCrust) {
      crusties.classList.add(`crust-gluten-free`);
    } else {
      crusties.classList.remove(`crust-gluten-free`);
    }})
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    if (state.glutenFreeCrust)
    {document.querySelector('.btn.btn-crust').classList.add(`active`)
    }else {document.querySelector('.btn.btn-crust').classList.remove(`active`)}

    if (state.greenPeppers) 
    {document.querySelector('.btn.btn-green-peppers').classList.add(`active`)
    }else {document.querySelector('.btn.btn-green-peppers').classList.remove(`active`)} 

    if (state.mushrooms)
    {document.querySelector('.btn.btn-mushrooms').classList.add(`active`)
    } else {document.querySelector('.btn.btn-mushrooms').classList.remove(`active`)}

    if (state.whiteSauce)
    {document.querySelector('.btn.btn-sauce').classList.add(`active`)
    }else {document.querySelector('.btn.btn-sauce').classList.remove(`active`)}

    if (state.pepperoni)
    {document.querySelector('.btn.btn-pepperoni').classList.add(`active`)
    }else {document.querySelector('.btn.btn-pepperoni').classList.remove(`active`)}
    }
  


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pricePep=0
  let priceMush=0
  let priceGreen=0
  let priceWhite=0
  let priceGluten=0

  const father = document.querySelector(`.panel.price`) 
  const lista = father.querySelectorAll(`li`)
  const arrLista = [...lista]
  const total = father.querySelector(`strong`)


  if (!state.pepperoni){
  pricePep = 0
  arrLista[0].innerText = ``
  }else {
  pricePep = ingredients.pepperoni.price
  arrLista[0].innerText = `$${ingredients.pepperoni.price} pepperoni`}

  if (!state.mushrooms){
  priceMush=0
  arrLista[1].innerText = ``
  }else {
    priceMush=ingredients.mushrooms.price
  arrLista[1].innerText = `$${ingredients.mushrooms.price} mushrooms`}

  if (!state.greenPeppers){
  priceGreen=0
  arrLista[2].innerText = ``
  }else {
    priceGreen=ingredients.greenPeppers.price
  arrLista[2].innerText = `$${ingredients.greenPeppers.price} green peppers`}

  if (!state.whiteSauce){
  priceWhite=0
  arrLista[3].innerText = ``
  }else {
  priceWhite=ingredients.whiteSauce.price
  arrLista[3].innerText = `$${ingredients.whiteSauce.price} white sauce`}

  if (!state.glutenFreeCrust){
  priceGluten=0
  arrLista[4].innerText = ``
  }else {
  priceGluten=ingredients.glutenFreeCrust.price
  arrLista[4].innerText = `$${ingredients.glutenFreeCrust.price} gluten-free crust`}

  total.innerText = `$${basePrice+pricePep+priceMush+priceGreen+priceWhite+priceGluten}`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
