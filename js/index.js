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
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
 // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  // document.querySelector('.sauce').classList.toggle('sauce-white')
  const sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white')
  } else {
    sauce.classList.remove('sauce-white')
  }
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust')
  console.log({ crust: state.glutenFreeCrust, contains: crust.classList.contains('crust-gluten-free') })
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  const pepperoniButton = document.querySelector('.btn-pepperoni');
  const mushroomButton = document.querySelector('.btn-mushrooms');
  const greenPepperButton = document.querySelector('.btn-green-peppers');
  const sauceButton = document.querySelector('.btn-sauce');
  const crustButton = document.querySelector('.btn-crust');

  if (!state.pepperoni) {
    pepperoniButton.classList.remove('active');
  } else {
    pepperoniButton.classList.add('active');
  }

  if (!state.mushrooms) {
    mushroomButton.classList.remove('active');
  } else {
    mushroomButton.classList.add('active');
  }

  if (!state.greenPeppers) {
    greenPepperButton.classList.remove('active');
  } else {
    greenPepperButton.classList.add('active');
  }

  if (!state.whiteSauce) {
    sauceButton.classList.remove('active');
  } else {
    sauceButton.classList.add('active');
  }

  if (!state.glutenFreeCrust) {
    crustButton.classList.remove('active');
  } else {
    crustButton.classList.add('active');
  }
 
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  document.querySelector('.panel.price ul').innerHTML = ""
  let pricePep, priceMush, priceGrPep, priceSauce, priceCrust

  if (state.pepperoni){
    pricePep = ingredients.pepperoni.price
    const textPepperoniLi = document.createElement('li')
    textPepperoniLi.innerText = `$${pricePep} pepperoni`
    document.querySelector('.panel.price ul').append(textPepperoniLi)
  } else {
    pricePep = 0
  }

  if (state.mushrooms){
    priceMush = ingredients.mushrooms.price
    const textMushrooms = document.createElement('li')
    textMushrooms.innerText = `$${priceMush} mushrooms`
    document.querySelector('.panel.price ul').append(textMushrooms)
  } else {
    priceMush = 0
  }

  if (state.greenPeppers) {
    priceGrPep = ingredients.greenPeppers.price
    const textGreenP = document.createElement('li')
    textGreenP.innerText = `$${priceGrPep} green peppers`
    document.querySelector('.panel.price ul').append(textGreenP)
  } else {
    priceGrPep = 0
  }

  if (state.whiteSauce) {
    priceSauce = ingredients.whiteSauce.price
    const textSauce = document.createElement('li')
    textSauce.innerText = `$${priceSauce} white sauce`
    document.querySelector('.panel.price ul').append(textSauce)
  } else {
    priceSauce = 0
  }

  if (state.glutenFreeCrust) {
    priceCrust = ingredients.glutenFreeCrust.price
    const textGluten = document.createElement('li')
    textGluten.innerText = `$${priceCrust} gluten-free crust`
    document.querySelector(`.panel.price ul`).append(textGluten)
  } else {
    priceCrust = 0
  }

  const total = document.querySelector('.panel.price strong')
  let sum = basePrice + pricePep + priceMush + priceGrPep + priceSauce + priceCrust
  total.innerText = `$${sum}`

  
 
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function(){
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function(){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
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

renderEverything();
console.log({ st: state.glutenFreeCrust })