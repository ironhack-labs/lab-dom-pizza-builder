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

const classFor = {
  pepperoni: '.btn-pepperoni',
  mushrooms: '.btn-mushrooms',
  greenPeppers: '.btn-green-peppers',
  whiteSauce: '.btn-sauce',
  glutenFreeCrust: '.btn-crust'
}

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
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  //Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce === false) {
    document.querySelector('section > .sauce').classList.remove('sauce-white');
  } else {
    document.querySelector('section > .sauce').classList.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  //Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust === false) {
    document
      .querySelector('section.crust')
      .classList.remove('crust-gluten-free');
  } else {
    document.querySelector('section.crust').classList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  for (let ingredient in state) {
    const btn = document.querySelector(classFor[ingredient])
    if (state[ingredient]) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  }
  // const buttons = document.querySelectorAll('.controls .btn');
  // const foods = Object.keys(state)
  // for (let i = 0; i < buttons.length; i++) {
  //   for (let j = 0; j < foods.length; j++) {
  //     buttons[i].setAttribute('data-name', `${foods[j]}`);
  //     const food = buttons[i].dataset.dataName; //FIX
  //     console.log(food); 
  //     if (state[food]) {
  //       buttons[i].classList.add('active');
  //     }
  //     buttons[i].classList.remove('active');
  //   }
  // }
}

function renderPrice() {
  //Iteration 4: change the HTML of `<aside class="panel price">`
  let sum = basePrice;
  const foodItems = Object.keys(state);
  document.querySelector('.price ul').innerHTML = '';
  document.querySelector('strong').innerHTML = '';

  foodItems.forEach((food) => {
    if (state[food]) {
      const addedFood = document.createElement('li');
      addedFood.innerHTML = `$ ${ingredients[food].price} ${ingredients[
        food
      ].name.toLowerCase()}`;
      document.querySelector('.price ul').append(addedFood);
      sum += ingredients[food].price;
    }
  });

  document.querySelector('strong').textContent = `$${sum}`;
}
renderPrice();

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
