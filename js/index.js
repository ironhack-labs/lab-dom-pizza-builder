// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1, add: false },
  mushrooms: { name: 'Mushrooms', price: 1, add: false },
  greenPeppers: { name: 'Green Peppers', price: 1, add: false },
  whiteSauce: { name: 'White sauce', price: 3, add: false },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5, add: false }
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
  renderPrice('pepperoni')
  renderPrice('mushrooms')
  renderPrice('greenPeppers')
  renderPrice('whiteSauce')
  renderPrice('glutenFreeCrust')
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

function renderPrice(params) {

  const toppings = {
    pepperoni: document.querySelector('#pep'),
    mushrooms: document.querySelector('#mush'),
    greenPeppers: document.querySelector('#greenp'),
    whiteSauce: document.querySelector('#whitesauce'),
    glutenFreeCrust: document.querySelector('#glutenfree')
  }

  const toppingState = {
    pepperoni: 'pepperoni',
    mushrooms: 'mushrooms',
    greenPeppers: 'greenPeppers',
    whiteSauce: 'whiteSauce',
    glutenFreeCrust: 'glutenFreeCrust',
  }

  if (state[toppingState[params]]) {
    toppings[params].style.display = 'block'
    sumPrice(params)
  } else {
    subPrice(params)
    toppings[params].style.display = 'none'
  }

}

function sumPrice(food){
  if(!ingredients[food].add){
    basePrice += ingredients[food].price;
    ingredients[food].add = true
    document.querySelector('strong').innerHTML = basePrice
  }
}

function subPrice(food){
  if(basePrice<0){
    basePrice = 0;
  }
  if(ingredients[food].add){
    basePrice -= ingredients[food].price;
    ingredients[food].add = false
    document.querySelector('strong').innerHTML = basePrice
  }
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
    renderPrice(params)
    // finalPrice(params)
    renderEverything();
    
  });
}


changeToppings('pepperoni');
changeToppings('mushrooms');
changeToppings('greenPeppers');
changeToppings('whiteSauce');
changeToppings('glutenFreeCrust');

