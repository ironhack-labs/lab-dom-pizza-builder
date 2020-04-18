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

function render(_selec, _state) {
  document.querySelectorAll(_selec).forEach(oneElem => oneElem.style.visibility = _state ? 'visible' : 'hidden');
}

function renderPepperoni() {
  render('.pep', state.pepperoni);
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  render('.mushroom', state.mushrooms);
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  render('.green-pepper', state.greenPeppers);
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  render('.sauce', state.whiteSauce);
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  render('.crust', state.glutenFreeCrust);
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btns = document.querySelectorAll('.btn');
  [...btns].forEach(btn => {
    btn.className.replace('active', '');
    switch (btn.className.split(' ')[1]) {
      case 'btn-pepperoni':
        btn.className += state.pepperoni ? 'active' : '';
        break;
      case 'btn-mushrooms':
        btn.className += state.mushrooms ? 'active' : '';
        break;
      case 'btn-green-peppers':
        btn.className += state.greenPeppers ? 'active' : '';
        break;
      case 'btn-sauce':
        btn.className += state.whiteSauce ? 'active' : '';
        break;
      case 'btn-crust':
        btn.className += state.glutenFreeCrust ? 'active' : '';
        break;
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

function addEvent(_selec, _state) {
  document.querySelector(_selec).addEventListener('click', () => {
    _state = !_state;
    renderEverything();
  });
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
addEvent('.btn-pepperoni', state.pepperoni);

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
addEvent('.btn-mushrooms', state.mushrooms);

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
addEvent('.btn-green-peppers', state.greenPeppers);

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
addEvent('.btn-sauce', state.whiteSauce);

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
addEvent('.btn-crust', state.glutenFreeCrust);