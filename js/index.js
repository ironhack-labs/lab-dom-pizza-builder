// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1,
    add: false,
    button: document.querySelector('.btn.btn-pepperoni'),
    allElement: document.querySelectorAll('.pep'),
    elementPrice: document.querySelector('#pep'),
  },
  mushrooms: {
    name: 'mushrooms',
    price: 1,
    add: false,
    button: document.querySelector('.btn.btn-mushrooms'),
    allElement: document.querySelectorAll('.mushroom'),
    elementPrice: document.querySelector('#mush'),
  },
  greenPeppers: {
    name: 'greenPeppers',
    price: 1,
    add: false,
    button: document.querySelector('.btn.btn-green-peppers'),
    allElement: document.querySelectorAll('.green-pepper'),
    elementPrice: document.querySelector('#greenp')
  },
  whiteSauce: {
    name: 'whiteSauce',
    price: 3,
    add: false,
    button: document.querySelector('.btn.btn-sauce'),
    allElement: document.querySelectorAll('.sauce'),
    elementPrice: document.querySelector('#whitesauce')
  },
  glutenFreeCrust: {
    name: 'glutenFreeCrust',
    price: 5,
    add: false,
    button: document.querySelector('.btn.btn-crust'),
    allElement: document.querySelectorAll('.crust-gluten-free'),
    elementPrice: document.querySelector('#glutenfree')
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
  for (const key in ingredients) {
    const element = ingredients[key];
    renderToppings(element.name);
    renderButtons(element.name);
    renderPrice(element.name);
  }
}

function renderToppings(topping) {
  ingredients[topping].allElement.forEach(toppingOne => {
    if (state[ingredients[topping].name]) {
      toppingOne.style.visibility = 'visible';
    } else {
      toppingOne.style.visibility = 'hidden';
    }
  });
}

function renderButtons(topping) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state[ingredients[topping].name]) {
    ingredients[topping].button.classList.add('active');
  } else {
    ingredients[topping].button.classList.remove('active');
  }
}

function subPrice(topping) {
  if (ingredients[topping].add) {
    ingredients[topping].add = false
    basePrice -= ingredients[topping].price;

    return basePrice
  }
}

function sumPrice(topping) {
  if (!ingredients[topping].add) {
    ingredients[topping].add = true;
    basePrice += ingredients[topping].price;

    return basePrice;
  }
}

function renderPrice(topping) {
  let price = basePrice;
  if (state[ingredients[topping].name]) {
    ingredients[topping].elementPrice.style.display = 'block';
    price = sumPrice(topping)
  } else {
    ingredients[topping].elementPrice.style.display = 'none';
    price = subPrice(topping)
  }
  document.querySelector('strong').innerHTML = `$${basePrice}`
}


function changeToppings(topping) {
  ingredients[topping].button.addEventListener('click', () => {
    state[ingredients[topping].name] = !state[ingredients[topping].name];
    renderEverything();
  });
}

renderEverything();

for (const key in ingredients) {
  const element = ingredients[key];
  changeToppings(element.name);
}

