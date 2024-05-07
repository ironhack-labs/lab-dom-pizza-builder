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
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((gpep) => {
    if (state.greenPeppers) {
      gpep.style.visibility = 'visible';
    } else {
      gpep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  var sauce = document.querySelector('.sauce')
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white')
    } else {
      sauce.classList.remove('sauce-white')
    }
}

function renderGlutenFreeCrust() {
  var crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free')
  } else {
    crust.classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  var buttons = [...document.querySelectorAll('.btn')]
  state.pepperoni ? buttons[0].classList.add('active') : buttons[0].classList.remove('active')
  state.mushrooms ? buttons[1].classList.add('active') : buttons[1].classList.remove('active')
  state.greenPeppers ? buttons[2].classList.add('active') : buttons[2].classList.remove('active')
  state.whiteSauce ? buttons[3].classList.add('active') : buttons[3].classList.remove('active')
  state.glutenFreeCrust ? buttons[4].classList.add('active') : buttons[4].classList.remove('active')
}

function renderPrice() {
  var pricelist = [...document.querySelectorAll('.price ul li')]
  pricelist[0].style.visibility = state.pepperoni ? 'visible' : 'hidden'
  pricelist[1].style.visibility = state.mushrooms ? 'visible' : 'hidden'
  pricelist[2].style.visibility = state.greenPeppers ? 'visible' : 'hidden'
  pricelist[3].style.visibility = state.whiteSauce ? 'visible' : 'hidden'
  pricelist[4].style.visibility = state.glutenFreeCrust ? 'visible' : 'hidden'
  var prices = pricelist.map(p => p.style.visibility == 'visible' ? Number(p.innerHTML[1]) : 0)
  var totalPrice = prices.reduce((acc,num)=>acc+num) + 10
  document.querySelector('.price strong').innerHTML = '$' + String(totalPrice)
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