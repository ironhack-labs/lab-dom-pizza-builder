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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
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
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (state.whiteSauce) {
      oneSauce.style.visibility = 'visible';
    } else {
      oneSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.style.visibility = 'visible';
    } else {
      oneCrust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepBtn = document.querySelector('.btn.btn-pepperoni')
  const mushBtn = document.querySelector('.btn.btn-mushrooms')
  const peppersBtn = document.querySelector('.btn.btn-green-peppers')
  const sauceBtn = document.querySelector('.btn.btn-sauce')
  const crustBtn = document.querySelector('.btn.btn-crust')

  if (state.pepperoni) {
    pepBtn.classList.add('active')
  } else {
    pepBtn.classList.remove('active')
  }
  if (state.mushrooms) {
    mushBtn.classList.add('active')    
  } else {
    mushBtn.classList.remove('active')
  }
  if (state.greenPeppers) {
    peppersBtn.classList.add('active')    
  } else {
    peppersBtn.classList.remove('active')
  }
  if (state.whiteSauce) {
    sauceBtn.classList.add('active')    
  } else {
    sauceBtn.classList.remove('active')
  }
  if (state.glutenFreeCrust) {
    crustBtn.classList.add('active')    
  } else {
    crustBtn.classList.remove('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceIngredients = document.querySelector('aside.panel.price ul')
  priceIngredients.innerHTML = '';
  const priceTotal = document.querySelector('aside.panel.price strong')
 
  let pricePep, priceMush, priceGreenPep, priceSauce, priceCrust

  if (document.querySelector('.btn.btn-pepperoni').classList.contains('active')) { 
    pricePep = 1
    const pricePepLi = document.createElement('li');
      pricePepLi.innerText = '$1 pepperoni'
      document.querySelector('.panel.price ul').append(pricePepLi);
  } else { 
    pricePep = 0
  }
  if (document.querySelector('.btn.btn-mushrooms').classList.contains('active')) { 
    priceMush = 1
    const priceMushLi = document.createElement('li');
      priceMushLi.innerText = '$1 mushrooms'
      document.querySelector('.panel.price ul').append(priceMushLi);
  } else { 
    priceMush = 0
  }
  if (document.querySelector('.btn.btn-green-peppers').classList.contains('active')) { 
    priceGreenPep = 1
    const priceGreenPepLi = document.createElement('li');
    priceGreenPepLi.innerText = '$1 green peppers'
      document.querySelector('.panel.price ul').append(priceGreenPepLi);
  } else { 
    priceGreenPep = 0
  }
  if (document.querySelector('.btn.btn-sauce').classList.contains('active')) { 
    priceSauce = 3
    const priceSauceLi = document.createElement('li');
    priceSauceLi.innerText = '$3 white sauce'
      document.querySelector('.panel.price ul').append(priceSauceLi);
  } else { 
    priceSauce = 0
  }
  if (document.querySelector('.btn.btn-crust').classList.contains('active')) { 
    priceCrust = 5
    const priceCrustLi = document.createElement('li');
    priceCrustLi.innerText = '$5 gluten-free crust'
      document.querySelector('.panel.price ul').append(priceCrustLi);
  } else { 
    priceCrust = 0
  }
  let priceCal = basePrice + pricePep + priceMush + priceGreenPep + priceSauce + priceCrust
  priceTotal.innerText = '$' + priceCal

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything();
});