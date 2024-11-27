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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}
  // Iteration 1: set the visibility of `<section class="mushroom">`


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  document.querySelector('.btn.btn-pepperoni').classList.toggle('active', state.pepperoni);
  document.querySelector('.btn.btn-mushrooms').classList.toggle('active', state.mushrooms);
  document.querySelector('.btn.btn-green-peppers').classList.toggle('active', state.greenPeppers);
  document.querySelector('.btn.btn-sauce').classList.toggle('active', state.whiteSauce);
  document.querySelector('.btn.btn-crust').classList.toggle('active', state.glutenFreeCrust);
}

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  function renderPrice() {
    const pricePanel = document.querySelector('.panel.price');
    const priceList = pricePanel.querySelector('ul');
    const totalPriceElement = pricePanel.querySelector('strong');
  
    let totalPrice = basePrice;
    let priceDetails = '';
  
    for (let ingredient in ingredients) {
      if (state[ingredient]) {
        totalPrice += ingredients[ingredient].price;
        priceDetails += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
      }
    }
  
    priceList.innerHTML = priceDetails;
    totalPriceElement.textContent = `$${totalPrice}`;
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
