// Write your Pizza Builder JavaScript in this file.
// References to all the buttons & ul
const pepperoniButton = document.querySelector('.btn.btn-pepperoni')
const mushroomButton = document.querySelector('.btn.btn-mushrooms')
const greenPepperButton = document.querySelector('.btn.btn-green-peppers')
const sauceButton = document.querySelector('.btn.btn-sauce')
const crustButton = document.querySelector('.btn.btn-crust')
const ulElement = document.querySelector('.panel.price ul');

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
  document.querySelectorAll('.mushroom').forEach((mushRoom) => {
    if (state.mushrooms) {
      mushRoom.style.visibility = 'visible';
    }
    else {
      mushRoom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(greenPepper => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    }
    else {
      greenPepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceElement = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauceElement.classList.add('sauce-white')
  }
  else {
    sauceElement.classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustElement = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crustElement.classList.add('crust-gluten-free')
  }
  else {
    crustElement.classList.remove('crust-gluten-free')
  }
}

function buttonClassChanger(button, stateValue) {
  if(stateValue) {
    button.classList.add('active')
  }
  else {
    button.classList.remove('active')
  }
}

function renderButtons() {
  buttonClassChanger(pepperoniButton, state.pepperoni);
  buttonClassChanger(mushroomButton, state.mushrooms);
  buttonClassChanger(greenPepperButton, state.greenPeppers);
  buttonClassChanger(sauceButton, state.whiteSauce);
  buttonClassChanger(crustButton, state.glutenFreeCrust);
}

function displayPrice (state, cost, product) {
  if (state) {
    liElement = document.createElement('li');
    liElement.innerText = `$${cost} ${product}`
    ulElement.appendChild(liElement);
  }
}

function updateTotal() {
  let sum = 10 + state.pepperoni * 1 + state.mushrooms * 1 + state.greenPeppers * 1 + state.whiteSauce * 3 + state.glutenFreeCrust * 5;
  let totalPriceElement = document.querySelector('strong');
  totalPriceElement.innerText = `$${sum}`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // Clean UL
  while (ulElement.firstChild){
    ulElement.removeChild(ulElement.lastChild);
  }

  // Add or remove the + price
  displayPrice(state.pepperoni, 1, 'pepperoni')
  displayPrice(state.mushrooms, 1, 'mushrooms')
  displayPrice(state.greenPeppers, 1, 'green peppers')
  displayPrice(state.whiteSauce, 3, 'white sauce')
  displayPrice(state.glutenFreeCrust, 5, 'gluten-free crust')

  // Update total value
  // It's a bit ugly though, I should have created an object for all the products seperately
  // And also put the state inside of this. But this does the job
  // However it's a bit redundant
  // It would have also 

  // updateTotal(state.pepperoni, 1)
  // updateTotal(state.mushrooms, 1)
  // updateTotal(state.greenPeppers, 1)
  // updateTotal(state.whiteSauce, 3)
  // updateTotal(state.glutenFreeCrust, 5)

  // This is a little bit cleaner
  updateTotal()
}

renderEverything();

window.addEventListener('load', () => {
  // Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
  pepperoniButton.addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

  // Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
  mushroomButton.addEventListener('click', () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  })

  // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
  greenPepperButton.addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  })

  // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
  sauceButton.addEventListener('click', () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything()
  })

  // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
  crustButton.addEventListener('click', () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything()
  })
})