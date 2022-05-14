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
  //const pepButton = document.querySelector('.btn-pepperoni');

  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
      //pepButton.classList.add('active');
    } else {
      onePep.style.visibility = 'hidden';
      //pepButton.classList.remove('active');
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    };
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
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();
/*
const priceHTML = [
  {
    state: state.pepperoni,
    price: ingredients.pepperoni.price,
    text: `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
  },
  {
    state: state.mushrooms,
    price: ingredients.mushrooms.price,
    text: `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name.toLowerCase()}`
  },
  {
    state: state.greenPeppers,
    price: ingredients.greenPeppers.price,
    text: `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name.toLowerCase()}`
  },
  {
    state: state.whiteSauce,
    price: ingredients.whiteSauce.price,
    text: `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name.toLowerCase()}`
  },
  {
    state: state.glutenFreeCrust,
    price: ingredients.glutenFreeCrust.price,
    text: `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name.toLowerCase()}`
  }
];

const panel = document.querySelector('.panel.price');
const priceList = panel.childNodes[5];
const totalPrice = panel.childNodes[7]; */

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  /*priceHTML[0].state = state.pepperoni;

  const selectedIngredients = priceHTML.filter(item => item.state);
  priceList.innerHTML = selectedIngredients.map(price => `<li>${price.text}</li>`).join("");

  const totalIngredients = selectedIngredients.reduce((acc, cV) => acc + cV.price, 0);
  totalPrice.innerText = `$${basePrice + totalIngredients}`; */

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