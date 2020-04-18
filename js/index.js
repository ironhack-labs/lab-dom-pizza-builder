// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'Pepperoni',
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
    name: 'White Sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free Crust',
    price: 5
  }
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

function renderIngredients(_selec, _state) {
  document.querySelectorAll(_selec).forEach(oneElem => oneElem.style.visibility = _state ? 'visible' : 'hidden');
}

function renderPepperoni() {
  renderIngredients('.pep', state.pepperoni);
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  renderIngredients('.mushroom', state.mushrooms);
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  renderIngredients('.green-pepper', state.greenPeppers);
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let souce = document.querySelector('.sauce');
  souce.className = `sauce${state.whiteSauce ? ' sauce-white' : ''}`;
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust');
  crust.className = `crust${state.glutenFreeCrust ? ' crust-gluten-free' : ''}`;
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btns = document.querySelectorAll('.btn');
  [...btns].forEach(btn => {
    let classNames = btn.className.split(' ');
    let activeClass = '';
    switch (classNames[1]) {
      case 'btn-pepperoni':
        activeClass = state.pepperoni ? ' active' : '';
        break;
      case 'btn-mushrooms':
        activeClass = state.mushrooms ? 'active' : '';
        break;
      case 'btn-green-peppers':
        activeClass = state.greenPeppers ? 'active' : '';
        break;
      case 'btn-sauce':
        activeClass = state.whiteSauce ? 'active' : '';
        break;
      case 'btn-crust':
        activeClass = state.glutenFreeCrust ? 'active' : '';
        break;
    }
    btn.className = `${classNames[0]} ${classNames[1]} ${activeClass}`;
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  let baseItem = document.querySelector('.panel.price b');
  baseItem.innerText = `$${basePrice} cheese pizza`;

  let ulItem = document.querySelector('.panel.price ul');
  let child = ulItem.lastElementChild;
  while (child) {
    ulItem.removeChild(child);
    child = ulItem.lastElementChild;
  }

  let ingredientes = Object.keys(ingredients);
  for (let i = 0; i < ingredientes.length; i++) {
    if (state[ingredientes[i]]) {
      let liItem = document.createElement('li');
      liItem.innerHTML = `$${ingredients[ingredientes[i]].price} ${ingredients[ingredientes[i]].name}`;
      ulItem.appendChild(liItem);
      totalPrice += ingredients[ingredientes[i]].price;
    }
  }
  let totalItem = document.querySelector('.panel.price strong');
  totalItem.innerHTML = `$${totalPrice}`;
}

renderEverything();


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});