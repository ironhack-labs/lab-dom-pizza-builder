// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
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
  renderToppings('pepperoni')
  renderToppings('mushrooms')
  renderToppings('greenPeppers')
  renderToppings('whiteSauce')
  renderToppings('glutenFreeCrust')

  renderButtons('pepperoni')
  renderButtons('mushrooms')
  renderButtons('greenPeppers')
  renderButtons('whiteSauce')
  renderButtons('glutenFreeCrust')
  renderPrice();
}

function renderToppings(arg) {
  const toppings = {
    pepperoni: '.pep',
    mushrooms: '.mushroom',
    greenPeppers: '.green-pepper',
    whiteSauce: '.sauce',
    glutenFreeCrust: '.crust-gluten-free',
  }

  const toppingState = {
    pepperoni: 'pepperoni',
    mushrooms: 'mushrooms',
    greenPeppers: 'greenPeppers',
    whiteSauce: 'whiteSauce',
    glutenFreeCrust: 'glutenFreeCrust'
  }


  document.querySelectorAll(toppings[arg]).forEach(toppingOne => {
    if (state[toppingState[arg]]) {
      toppingOne.style.visibility = 'visible';
    } else {
      toppingOne.style.visibility = 'hidden';
    }
  });
}

function renderButtons(params) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  const toppings = {
    pepperoni: document.querySelector('.btn.btn-pepperoni'),
    mushrooms: document.querySelector('.btn.btn-mushrooms'),
    greenPeppers: document.querySelector('.btn.btn-green-peppers'),
    whiteSauce: document.querySelector('.btn.btn-sauce'),
    glutenFreeCrust: document.querySelector('.btn.btn-crust')
  }

  const toppingState = {
    pepperoni: 'pepperoni',
    mushrooms: 'mushrooms',
    greenPeppers: 'greenPeppers',
    whiteSauce: 'whiteSauce',
    glutenFreeCrust: 'glutenFreeCrust',
  }

  if (state[toppingState[params]]) {
    toppings[params].classList.add('active')
  } else {
    toppings[params].classList.remove('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

function changeToppings(params) {
  const toppings = {
    pepperoni: document.querySelector('.btn.btn-pepperoni'),
    mushrooms: document.querySelector('.btn.btn-mushrooms'),
    greenPeppers: document.querySelector('.btn.btn-green-peppers'),
    whiteSauce: document.querySelector('.btn.btn-sauce'),
    glutenFreeCrust: document.querySelector('.btn.btn-crust')
  }

  const toppingState = {
    pepperoni: 'pepperoni',
    mushrooms: 'mushrooms',
    greenPeppers: 'greenPeppers',
    whiteSauce: 'whiteSauce',
    glutenFreeCrust: 'glutenFreeCrust',
  }

  toppings[params].addEventListener('click', () => {
    state[toppingState[params]] = !state[toppingState[params]];
    renderEverything();
  });
}


changeToppings('pepperoni');
changeToppings('mushrooms');
changeToppings('greenPeppers');
changeToppings('whiteSauce');
changeToppings('glutenFreeCrust');

