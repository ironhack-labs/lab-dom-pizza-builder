// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
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
      document.querySelector('.btn.btn-pepperoni').classList.add('active');
    } else {
      onePep.style.visibility = 'hidden';
      document.querySelector('.btn.btn-pepperoni').classList.remove('active');
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneShroom => {
    if (state.mushroom) {
      oneShroom.style.visibility = 'visible';
      document.querySelector('.btn.btn-mushrooms').classList.add('active');
    } else {
      oneShroom.style.visibility = 'hidden';
      document.querySelector('.btn.btn-mushrooms').classList.remove('active');
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
      document.querySelector('.btn.btn-green-peppers').classList.add('active');
    } else {
      oneGreenPep.style.visibility = 'hidden';
      document.querySelector('.btn.btn-green-peppers').classList.remove('active');
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    sauce.classList.remove('sauce-white');
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    crust.classList.remove('crust-gluten-free');
    document.querySelector('.btn.btn-crust').classList.remove('active');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceArray = document.querySelectorAll('.price > ul > li');
  const totalPrice = document.querySelector('.price > strong');
  let pizzaPrice = basePrice;

  if (state.pepperoni) {
    priceArray[0].style.display = 'block';
    pizzaPrice += ingredients.pepperoni.price;
  } else {
    priceArray[0].style.display = 'none';
    pizzaPrice -= ingredients.pepperoni.price;
  }

  if (state.mushrooms) {
    priceArray[1].style.display = 'block';
    pizzaPrice += ingredients.mushrooms.price;
  } else {
    priceArray[1].style.display = 'none';
  }

  if (state.greenPeppers) {
    priceArray[2].style.display = 'block';
    pizzaPrice += ingredients.greenPeppers.price;
  } else {
    priceArray[2].style.display = 'none';
  }

  if (state.whiteSauce) {
    priceArray[3].style.display = 'block';
    pizzaPrice += ingredients.whiteSauce.price;
  } else {
    priceArray[3].style.display = 'none';
  }

  if (state.glutenFreeCrust) {
    priceArray[4].style.display = 'block';
    pizzaPrice += ingredients.glutenFreeCrust.price;
  } else {
    priceArray[4].style.display = 'none';
  }

  totalPrice.innerHTML = `$${pizzaPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushroom = !state.mushroom;
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