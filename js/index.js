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
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  elementWhiteSouce = document.querySelector('.sauce');
  if (state.whiteSauce) elementWhiteSouce.classList.add('sauce-white');
  else elementWhiteSouce.classList.remove('sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  elementWhiteSouce = document.querySelector('.crust');
  if (state.glutenFreeCrust)
    elementWhiteSouce.classList.add('crust-gluten-free');
  else elementWhiteSouce.classList.remove('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  elementsButtons = document.querySelectorAll('.btn');
  elementsButtons.forEach((button) => {
    const isPepperoniBtn = button.classList.contains('btn-pepperoni');
    const isMushroomBtn = button.classList.contains('btn-mushrooms');
    const isPeppersBtn = button.classList.contains('btn-green-peppers');
    const isSauceBtn = button.classList.contains('btn-sauce');
    const isCrustBtn = button.classList.contains('btn-crust');

    if (isPepperoniBtn && !state.pepperoni) button.classList.remove('active');
    else if (isPepperoniBtn && state.pepperoni) button.classList.add('active');

    if (isMushroomBtn && !state.mushrooms) button.classList.remove('active');
    else if (isMushroomBtn && state.mushrooms) button.classList.add('active');

    if (isPeppersBtn && !state.greenPeppers) button.classList.remove('active');
    else if (isPeppersBtn && state.greenPeppers) button.classList.add('active');

    if (isSauceBtn && !state.whiteSauce) button.classList.remove('active');
    else if (isSauceBtn && state.whiteSauce) button.classList.add('active');

    if (isCrustBtn && !state.glutenFreeCrust) button.classList.remove('active');
    else if (isCrustBtn && state.glutenFreeCrust) button.classList.add('active');
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //calculate price
  const elementPrice = document.querySelector(".price strong")
  let totalPrice = 10
  if (state.pepperoni) totalPrice+=1
  if (state.mushrooms) totalPrice+=1
  if (state.greenPeppers) totalPrice+=1
  if (state.whiteSauce) totalPrice+=3
  if (state.glutenFreeCrust) totalPrice+=5
  elementPrice.textContent = totalPrice

  // removes and Adds rice list of toppings
  const priceList = document.querySelector(".price ul")
  // removes all PriceListItems
  priceList.innerHTML = ""
  //creates new ListItems
  const pricePep = document.createElement("li")
  const priceMush = document.createElement("li")
  const priceGreenPep = document.createElement("li")
  const priceSouce = document.createElement("li")
  const priceCrust = document.createElement("li")
  
  if (state.pepperoni){
    pricePep.textContent += "$1 pepperoni"
    priceList.appendChild(pricePep)
  } 
  if (state.mushrooms) {
    priceMush.textContent += "$1 mushrooms"
    priceList.appendChild(priceMush)
  } 
  if (state.greenPeppers) {
    priceGreenPep.textContent += "$1 green pepper"
    priceList.appendChild(priceGreenPep)
  }
  if (state.whiteSauce) {
    priceSouce.textContent += "$3 white souce"
    priceList.appendChild(priceSouce)
  }
  if (state.glutenFreeCrust) {
    priceCrust.textContent += "$5 gluten free crust"
    priceList.appendChild(priceCrust)
  }
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
