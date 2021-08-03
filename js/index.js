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
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
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
  // Iteration 3: add/addremove the class "active" of each `<button class="btn">`
  state.pepperoni ? document.querySelector('.btn.btn-pepperoni').classList.add('active') : document.querySelector('.btn-pepperoni').classList.remove('active');
  state.mushrooms ? document.querySelector('.btn.btn-mushrooms').classList.add('active') : document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  state.greenPeppers ? document.querySelector('.btn.btn-green-peppers').classList.add('active') : document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  state.whiteSauce ? document.querySelector('.btn.btn-sauce').classList.add('active') : document.querySelector('.btn.btn-sauce').classList.remove('active');
  state.glutenFreeCrust ? document.querySelector('.btn.btn-crust').classList.add('active') : document.querySelector('.btn.btn-crust').classList.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceTable = document.querySelector('.panel.price').getElementsByTagName('li');
  let ingredientsSum = 10;
  
  // Check for pepperoni
  if (state.pepperoni) {
    priceTable[0].style.display = 'block';
    ingredientsSum += 1;
  }
  else {
    priceTable[0].style.display = 'none';    
  }

  // Check for mushrooms
  if (state.mushrooms) {
    priceTable[1].style.display = 'block';
    ingredientsSum += 1;
  }
  else {
    priceTable[1].style.display = 'none';    
  }
  
  // Check for green peppers
  if (state.greenPeppers) {
    priceTable[2].style.display = 'block';
    ingredientsSum += 1;
  }
  else {
    priceTable[2].style.display = 'none';    
  }

  // Check for white sauce
  if (state.whiteSauce) {
    priceTable[3].style.display = 'block';
    ingredientsSum += 3;
  }
  else {
    priceTable[3].style.display = 'none';    
  }

  // Check for gluten-free crust
  if (state.glutenFreeCrust) {
    priceTable[4].style.display = 'block';
    ingredientsSum += 5;
  }
  else {
    priceTable[4].style.display = 'none';    
  }
  
  // Change pizza price total
  const totalPrice = document.querySelector('strong');
  totalPrice.innerHTML = `$${ingredientsSum}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
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
