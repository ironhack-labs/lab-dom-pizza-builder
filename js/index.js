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
let newState = {
  pepperoni: {
    isActive: true,
    className: 'btn-pepperoni',
  },
  mushrooms: {
    isActive: true,
    className: 'btn-mushrooms',
  },
  greenPeppers: {
    isActive: true,
    className: 'btn-green-peppers',
  },
  whiteSauce: {
    isActive: false,
    className: 'btn-sauce',
  },
  glutenFreeCrust: {
    isActive: false,
    className: 'btn-crust',
  },
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
  document.querySelectorAll('.pep').forEach(onePep =>
    state.pepperoni ?
      onePep.style.visibility = 'visible' :
      onePep.style.visibility = 'hidden'
  );

}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom =>
    state.mushrooms ?
      oneMushroom.style.visibility = 'visible' :
      oneMushroom.style.visibility = 'hidden'
  )

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => state.greenPeppers ?
    oneGreenPepper.style.visibility = 'visible' :
    oneGreenPepper.style.visibility = 'hidden'
  )

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  return state.whiteSauce ?
    document.querySelector('.sauce').classList.add('sauce-white') :
    document.querySelector('.sauce').classList.remove('sauce-white')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  state.glutenFreeCrust ?
    document.querySelector('.crust').classList.add('crust-gluten-free') :
    document.querySelector('.crust').classList.remove('crust-gluten-free')

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const addClassActive = ({ className }) => {
    document.querySelector(`.btn.${className}`).classList.add('active')
  }
  const removeClassActive = ({ className }) => {
    document.querySelector(`.btn.${className}`).classList.remove('active')
  }

  Object.entries(newState).map(([key, value]) =>
    state[key] ?
      addClassActive(value) :
      removeClassActive(value)
  )

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  document.querySelector('body > aside > b').innerHTML = `$${basePrice} cheese pizza`;
  const panelPrice = document.querySelector('.panel.price ul');
  const totalPrice = document.querySelector('body > aside > strong');

  panelPrice.innerHTML = '';
  totalPrice.innerHTML = '';

  let total = basePrice

  const createIngredientPriceListAndTotal = (item) => {
    const { name, price } = item
    const ingredient = document.createElement('li');
    ingredient.innerHTML = `$${price} ${name}`;
    total += price;
    panelPrice.appendChild(ingredient)
  }

  Object.entries(ingredients).map(item => {
    const [key, data] = item
    if (state[key]) {
      createIngredientPriceListAndTotal(data)
    }
  })

  totalPrice.innerHTML = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', (btn) => {
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