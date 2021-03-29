// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
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
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let whiteSauce = document.getElementsByClassName('sauce')[0];
    if (state.whiteSauce) {
      whiteSauce.classList.add('sauce-white');
    } else {
      whiteSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustGlutenFree = document.getElementsByClassName('crust')[0];
    if (state.glutenFreeCrust) {
      crustGlutenFree.classList.add('crust-gluten-free');
    } else {
      crustGlutenFree.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
let btnActive = document.getElementsByClassName('btn');

if (state.pepperoni) {
  btnActive[0].classList.add('active');
} else {
  btnActive[0].classList.remove('active');
}

if (state.mushrooms) {
  btnActive[1].classList.add('active');
} else {
  btnActive[1].classList.remove('active');
}

if (state.greenPeppers) {
  btnActive[2].classList.add('active');
} else {
  btnActive[2].classList.remove('active');
}

if (state.whiteSauce) {
  btnActive[3].classList.add('active');
} else {
  btnActive[3].classList.remove('active');
}

if (state.glutenFreeCrust) {
  btnActive[4].classList.add('active');
} else {
  btnActive[4].classList.remove('active');
}
}

function renderPrice() {
// Iteration 4: change the HTML of `<aside class="panel price">`

let selectedItems = document.querySelector('aside ul').querySelectorAll('li');
  let pricePepperoni;
  if (state.pepperoni) {
    selectedItems[0].style.visibility = 'visible';
    pricePepperoni = 1;
  } else {
    selectedItems[0].style.visibility = 'hidden';
    pricePepperoni = 0;
  }

  let priceMushrooms;
  if (state.mushrooms) {
    selectedItems[1].style.visibility = 'visible';
    priceMushrooms = 1;
  } else {
    selectedItems[1].style.visibility = 'hidden';
    priceMushrooms = 0;
  }

  let priceGreenPeppers;
  if (state.greenPeppers) {
    selectedItems[2].style.visibility = 'visible';
    priceGreenPeppers = 1;
  } else {
    selectedItems[2].style.visibility = 'hidden';
    priceGreenPeppers = 0;
  }

  let priceWhiteSauce;
  if (state.whiteSauce) {
    selectedItems[3].style.visibility = 'visible';
    priceWhiteSauce = 3;
  } else {
    selectedItems[3].style.visibility = 'hidden';
    priceWhiteSauce = 0;
  }

  let priceGlutenFreeCrust;
  if (state.glutenFreeCrust) {
    selectedItems[4].style.visibility = 'visible';
    priceGlutenFreeCrust = 5;
  } else {
    selectedItems[4].style.visibility = 'hidden';
    priceGlutenFreeCrust = 0;
  }

  let priceTotal =
    basePrice +
    pricePepperoni +
    priceMushrooms +
    priceGreenPeppers +
    priceWhiteSauce +
    priceGlutenFreeCrust;

  document.querySelector('aside strong').innerHTML = `${priceTotal}$`;
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