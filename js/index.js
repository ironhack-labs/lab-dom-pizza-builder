//Visual looks working but nothing is working with npm-test!! 


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
  const whiteSauce = document.
  querySelector('.sauce') 
    if (state.whiteSauce) {
      whiteSauce.classList.add('sauce-white')
    } else {
      whiteSauce.classList.remove('sauce-white')
    }
}


function renderGlutenFreeCrust() {
  const glutenFreeCrust = document.querySelector('.crust') 
    if (state.glutenFreeCrust) {
      glutenFreeCrust.classList.add('crust-gluten-free')
    } else {
      glutenFreeCrust.classList.remove('crust-gluten-free')
    }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  const btnPep = document.querySelector('.btn.btn-pepperoni')
  if (state.pepperoni) {
    btnPep.classList.add('active')
  } else {
    btnPep.classList.remove('active')
  }

  const btnMush = document.querySelector('.btn.btn-mushrooms')
  if (state.mushrooms) {
    btnMush.classList.add('active') 
  } else {
    btnMush.classList.remove('active')
  }

  const btnGreenPep = document.querySelector('.btn.btn-green-peppers')
  if (state.greenPeppers) {
    btnGreenPep.classList.add('active')
  } else {
    btnGreenPep.classList.remove('active')
  }

  const btnSauce = document.querySelector('.btn.btn-sauce')
  if (state.whiteSauce) {
    btnSauce.classList.add('active')
  } else {
    btnSauce.classList.remove('active')
  }

  const btnCrust = document.querySelector('.btn.btn-crust')
  if (state.glutenFreeCrust) {
    btnCrust.classList.add('active')
  } else {
    btnCrust.classList.remove('active')
  }
}



// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  const totalPrice = basePrice

  //I don't know how to solve....
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
document
.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
