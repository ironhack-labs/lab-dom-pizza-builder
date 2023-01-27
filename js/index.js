//Visual looks working but nothing is working with npm-test!!

let basePrice = 10;
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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGpepper) => {
    if (state.greenPeppers) {
      oneGpepper.style.visibility = 'visible';
    } else {
      oneGpepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const whiteSauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    whiteSauce.classList.add('sauce-white');
  } else {
    whiteSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  const glutenFreeCrust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    glutenFreeCrust.classList.add('crust-gluten-free');
  } else {
    glutenFreeCrust.classList.remove('crust-gluten-free');
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
const btnPep = document.querySelector('.btn.btn-pepperoni');
const btnMush = document.querySelector('.btn.btn-mushrooms');
const btnGreenPep = document.querySelector('.btn.btn-green-peppers');
const btnSauce = document.querySelector('.btn.btn-sauce');
const btnCrust = document.querySelector('.btn.btn-crust');

function renderButtons() {
  if (state.pepperoni) {
    btnPep.classList.add('active');
  } else {
    btnPep.classList.remove('active');
  }
  if (state.mushrooms) {
    btnMush.classList.add('active');
  } else {
    btnMush.classList.remove('active');
  }
  if (state.greenPeppers) {
    btnGreenPep.classList.add('active');
  } else {
    btnGreenPep.classList.remove('active');
  }
  if (state.whiteSauce) {
    btnSauce.classList.add('active');
  } else {
    btnSauce.classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    btnCrust.classList.add('active');
  } else {
    btnCrust.classList.remove('active');
  }
}

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  const pepLi = document.querySelector('.panel.price > ul > li:nth-child(1)');
  const mushLi = document.querySelector('.panel.price > ul > li:nth-child(2)')
  const greenPepLi = document.querySelector('.panel.price > ul > li:nth-child(3)')
  const sauceLi = document.querySelector('.panel.price > ul > li:nth-child(4)')
  const crustLi = document.querySelector('.panel.price > ul > li:nth-child(5)')

  let totalPrice = basePrice;
  const total = document.querySelector("strong")

  if (state.pepperoni) {
    pepLi.style.display = 'block';
    totalPrice += ingredients.pepperoni.price
  } else {
    pepLi.style.display = 'none';
  }
  
  if (state.mushrooms) {
    mushLi.style.display = 'block'
    totalPrice += ingredients.mushrooms.price
  } else {
    mushLi.style.display = 'none'
  }

  if (state.greenPeppers) {
    greenPepLi.style.display = 'block'
    totalPrice += ingredients.greenPeppers.price
  } else {
    greenPepLi.style.display = 'none'
  }

  if (state.whiteSauce) {
    sauceLi.style.display = 'block'
    totalPrice += ingredients.whiteSauce.price
  } else {
    sauceLi.style.display = 'none'
  }

  if (state.glutenFreeCrust) {
    crustLi.style.display = 'block'
    totalPrice += ingredients.glutenFreeCrust.price
  } else {
    crustLi.style.display = 'none'
  }
  
  total.textContent="$"+totalPrice
}
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything(); //visible
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
