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
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    mushroom.style.visibility = state.mushrooms ? 'visible' : 'hidden';
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    pepper.style.visibility = state.greenPeppers ? 'visible' : 'hidden';
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const classes = document.querySelector('.sauce').classList;
  if(state.whiteSauce) {
    classes.add('sauce-white');
  } else {
    classes.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const classes = document.querySelector('.crust').classList;
  if(state.glutenFreeCrust) {
    classes.add('crust-gluten-free');
  } else {
    classes.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const assignBtns = {
    '.btn-pepperoni': state.pepperoni,
    '.btn-mushrooms': state.mushrooms,
    '.btn-green-peppers': state.greenPeppers,
    '.btn-sauce': state.whiteSauce,
    '.btn-crust': state.glutenFreeCrust
  }

  for(const btn in assignBtns) {
    const element = document.querySelector(btn);
    if(assignBtns[btn]) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const possibleIngredients = {
    pepperoni: {
      text: 'pepperoni',
      price: 1
    },
    mushrooms: {
      text: 'mushrooms',
      price: 1
    },
    greenPeppers: {
      text: 'green peppers',
      price: 1
    },
    whiteSauce: {
      text: 'white sauce',
      price: 3
    },
    glutenFreeCrust: {
      text: 'gluten-free crust',
      price: 5
    }
  };

  const selectedIngredients = [];
  const total = document.querySelector('.panel.price strong')
  const list = document.querySelector('.panel.price ul');

  for(const ingredient in possibleIngredients) {
    if(state[ingredient]) {
      selectedIngredients.push(possibleIngredients[ingredient]);
    }
  }

  list.innerHTML = '';
  selectedIngredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = '$' + ingredient.price + ' ' + ingredient.text;
    list.appendChild(listItem);
  })

  const totalPrice = selectedIngredients.reduce((subtotal, ingredient) => {
    return subtotal + ingredient.price;
  }, 10);

  total.textContent = '$' + totalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});