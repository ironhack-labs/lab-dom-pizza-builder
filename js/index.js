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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePep => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepBtn = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni) {
    pepBtn.classList.add('active');
  } else {
    pepBtn.classList.remove('active');
  }

  const mushBtn = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    mushBtn.classList.add('active');
  } else {
    mushBtn.classList.remove('active');
  }

  const greenBtn = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    greenBtn.classList.add('active');
  } else {
    greenBtn.classList.remove('active');
  }

  const sauceBtn = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    sauceBtn.classList.add('active');
  } else {
    sauceBtn.classList.remove('active');
  }

  const crustBtn = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    crustBtn.classList.add('active');
  } else {
    crustBtn.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let sum = basePrice;

  let priceList = document.querySelector('.price ul')
  priceList.innerHTML = '';
  if (state.pepperoni) {
    const pep = document.createElement('li');
    pep.innerText = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
    priceList.appendChild(pep)
    sum += ingredients.pepperoni.price;
  }

  if (state.mushrooms) {
    const mush = document.createElement('li');
    mush.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
    priceList.appendChild(mush)
    sum += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    const green = document.createElement('li');
    green.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
    priceList.appendChild(green)
    sum += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    const sauce = document.createElement('li');
    sauce.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
    priceList.appendChild(sauce)
    sum += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    const crust = document.createElement('li');
    crust.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`
    priceList.appendChild(crust)
    sum += ingredients.glutenFreeCrust.price;
  }

  let sumRender = document.querySelector('.price strong');
  sumRender
  sumRender.innerText = `$${sum}`;
}

function renderEverything() {

  }
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})