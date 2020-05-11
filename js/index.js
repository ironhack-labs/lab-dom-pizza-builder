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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onegreenPepper => {
    if (state.greenPeppers) {
      onegreenPepper.style.visibility = 'visible';
    } else {
      onegreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let whiteS = document.querySelector('.sauce');
    if (state.whiteSauce) {
      whiteS.classList.add('sauce-white');
    } else {
      whiteS.classList.remove('sauce-white');
    }
}
//renderWhiteSauce() 

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let glutenFree = document.querySelector('.crust');
    if (state.glutenFreeCrust) {
      glutenFree.classList.add('crust-gluten-free');
    } else {
      glutenFree.classList.remove('crust-gluten-free');
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pep = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni) {
    pep.classList.add('active');
  } else {
    pep.classList.remove('active');
  }

  let mush = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    mush.classList.add('active');
  } else {
    mush.classList.remove('active');
  }

  let greenP = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    greenP.classList.add('active');
  } else {
    greenP.classList.remove('active');
  }

  let whiteS = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    whiteS.classList.add('active');
  } else {
    whiteS.classList.remove('active');
  }

  let glutenFree = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    glutenFree.classList.add('active');
  } else {
    glutenFree.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let priceAside = document.querySelector('.price');
  let priceList = priceAside.querySelector('ul');
  priceList.innerHTML = '';
  let totalPrice = 10;
  for (let ingr in ingredients){
    if (state[ingr]){
      priceList.innerHTML += `<li>$${ingredients[ingr].price} ${ingredients[ingr].name.toLowerCase()}</li>`;
      totalPrice += ingredients[ingr].price;
    }
  }
  priceAside.querySelector('strong').innerHTML = `$${totalPrice}`;
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