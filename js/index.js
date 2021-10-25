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
};


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
  document.querySelectorAll('.green-pepper').forEach((oneGreenpep) => {
    if (state.greenPeppers) {
      oneGreenpep.style.visibility = 'visible';
    } else {
      oneGreenpep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce')

  if(state.whiteSauce) {
    sauce.classList.add('sauce-white')
  }
  else {
    sauce.classList.remove('sauce-white')
  }
}
   

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
const crust = document.querySelector('.crust')

if(state.glutenFreeCrust) {
  crust.classList.add('crust-gluten-free')
}
else {
  crust.classList.remove('crust-gluten-free')
}
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //the click does not work for white sauce and gluten-free crust!! please adivise
  const buttonPep = document.querySelector('.btn-pepperoni')
  if(state.pepperoni) {
   buttonPep.classList.add('active')
  }
  else {
    buttonPep.classList.remove('active')
  }
  const buttonMush = document.querySelector('.btn-mushrooms')
  if(state.mushrooms) {
    buttonMush.classList.add('active')
  }
  else {
    buttonMush.classList.remove('active')
  }
  const buttonGreenpep = document.querySelector('.btn-green-peppers')
  if(state.greenPeppers) {
    buttonGreenpep.classList.add('active')
  }
  else {
    buttonGreenpep.classList.remove('active')
  }
  const buttonSauce = document.querySelector('.btn-sauce')
  if(state.whiteSauce) {
    buttonSauce.add('active')
  }
  else {
    buttonSauce.classList.remove('active')
  }
  const buttonCrust = document.querySelector('.btn-crust')
  if(state.glutenFreeCrust) {
    buttonCrust.add('active')
  }
  else {
    buttonCrust.classList.remove('active')
  }
} 

function renderPrice() {
  let totalPrice = basePrice;
  if (state.pepperoni === true){
    totalPrice += 1
    document.querySelector('.panel.price li:nth-of-type(1)').innerText = '$1 Pepperoni'
  } else {
    document.querySelector('.panel.price li:nth-of-type(1)').innerText = ''
  }
  if (state.mushrooms === true){
    totalPrice += 1
    document.querySelector('.panel.price li:nth-of-type(2)').innerText = '$1 Mushrooms'
  } else {
    document.querySelector('.panel.price li:nth-of-type(2)').innerText = ''
  }
  if (state.greenPeppers === true){
    totalPrice += 1
    document.querySelector('.panel.price li:nth-of-type(3)').innerText = '$1 Green Peppers'
  } else {
    document.querySelector('.panel.price li:nth-of-type(3)').innerText = ''
  }
  if (state.whiteSauce === true){
    totalPrice += 3
    document.querySelector('.panel.price li:nth-of-type(4)').innerText = '$3 White Sauce'
  } else {
    document.querySelector('.panel.price li:nth-of-type(4)').innerText = ''
  }
  if (state.glutenFreeCrust === true){
    totalPrice += 5
    document.querySelector('.panel.price li:nth-of-type(5)').innerText = '$5 Gluten-free Crust'
  } else {
    document.querySelector('.panel.price li:nth-of-type(5)').innerText = ''
  }
  //console.log(totalPrice)
  document.querySelector('.panel.price strong').innerText = `$${totalPrice}`
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
