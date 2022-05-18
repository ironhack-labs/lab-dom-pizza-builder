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

// Buttons constants
const peperroniButton = document.querySelector('.btn-pepperoni')
const mushroomsButton = document.querySelector('.btn-mushrooms')
const peppersButton = document.querySelector('.btn-green-peppers')
const sauceButton = document.querySelector('.btn-sauce')
const crustButton = document.querySelector('.btn-crust')

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



// Iteration 1

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
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}



// Iteration 2

function renderWhiteSauce() {
  const sauceSection = document.querySelector('.sauce')

  if (state.whiteSauce) {
    sauceSection.classList.remove('sauce-white')
  } else {
    sauceSection.classList.add('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  const crustSection = document.querySelector('.crust')

  if (state.glutenFreeCrust) {
    crustSection.classList.remove('crust-gluten-free')
  } else {
    crustSection.classList.add('crust-gluten-free')
  }
}


// Iteration 3

function renderButtons() {
  state.pepperoni ? peperroniButton.classList.remove('active') : peperroniButton.classList.add('active')

  state.mushrooms ? mushroomsButton.classList.remove('active') : mushroomsButton.classList.add('active')

  state.greenPeppers ? peppersButton.classList.remove('active') : peppersButton.classList.add('active')

  state.whiteSauce ? sauceButton.classList.remove('active') : sauceButton.classList.add('active')
  
  state.glutenFreeCrust ? crustButton.classList.remove('active') : crustButton.classList.add('active')
}



  // Iteration 4: change the HTML of `<aside class="panel price">`

  let foodList = document.querySelector('.panel.price ul')
  foodList.innerHTML = ""
  const priceField = document.querySelector('.panel.price strong')
  

function renderPrice() {
  let totalPrice = basePrice

  for (let i in ingredients) {
    const ingredientPrice = ingredients[i].price
    
    if (state[i] === true) {
      totalPrice += ingredientPrice
      foodList.innerHTML += `<li>${ingredients[i].price}$ ${ingredients[i].name}</li>`
    }

    priceField.textContent = totalPrice + "$"
  }









}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

mushroomsButton.addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

peppersButton.addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

sauceButton.addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

crustButton.addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
