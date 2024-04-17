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
};

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    };
  });
};

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    };
  });
};

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    };
  });
};

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauceWhite) => {
    if (state.whiteSauce) {
      sauceWhite.classList.add('sauce-white')
    } else {
      sauceWhite.classList.remove('sauce-white')
    };
  });
};

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crustPizza) => {
    if (state.glutenFreeCrust) {
      crustPizza.classList.add('crust-gluten-free')
    } else {
      crustPizza.classList.remove('crust-gluten-free')
    };
  });
};

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((button) => {
    if (button.getAttribute('class').includes('pepperoni')) {
      if (state.pepperoni) {
        button.classList.add('active')
      } else {
        button.classList.remove('active')
      };
    } else if (button.getAttribute('class').includes('mushroom')) {
      if (state.mushrooms) {
        button.classList.add('active')
      } else {
        button.classList.remove('active')
      };
    } else if (button.getAttribute('class').includes('pepper')) {
      if (state.greenPeppers) {
        button.classList.add('active')
      } else {
        button.classList.remove('active')
      };
    } else if (button.getAttribute('class').includes('sauce')) {
      if (state.whiteSauce) {
        button.classList.add('active')
      } else {
        button.classList.remove('active')
      };
    } else if (button.getAttribute('class').includes('crust')) {
      if (state.glutenFreeCrust) {
        button.classList.add('active')
      } else {
        button.classList.remove('active')
      };
    };
  });
};

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  const panelElement = document.querySelector(".panel.price")
  panelElement.innerHTML = ""

  const h2Element = document.createElement('h2');
  h2Element.innerHTML = "Your pizza's price"
  panelElement.append(h2Element)

  const bElement = document.createElement('b');
  bElement.innerHTML = "$10 cheese pizza"
  panelElement.append(bElement)

  const ulElement = document.createElement('ul');
  panelElement.append(ulElement);

  let sumTotal = 10;
  for (let key in state) {
    if (key === "pepperoni") {
      if (state.pepperoni) {
        const liElement = document.createElement('li');
        liElement.innerHTML = "$1 pepperonni";
        ulElement.append(liElement);
        sumTotal += 1;
      };
    } else if (key === "mushrooms") {
      if (state.mushrooms) {
        const liElement = document.createElement('li');
        liElement.innerHTML = "$1 mushrooms";
        ulElement.append(liElement);
        sumTotal += 1;
      };
    } else if (key === "greenPeppers") {
      if (state.greenPeppers) {
        const liElement = document.createElement('li');
        liElement.innerHTML = "$1 green peppers";
        ulElement.append(liElement);
        sumTotal += 1;
      };
    } else if (key === "whiteSauce") {
      if (state.whiteSauce) {
        const liElement = document.createElement('li');
        liElement.innerHTML = "$3 white sauce";
        ulElement.append(liElement);
        sumTotal += 3;
      };
    } else if (key === "glutenFreeCrust") {
      if (state.glutenFreeCrust) {
        const liElement = document.createElement('li');
        liElement.innerHTML = "$5 gluten-free crust";
        ulElement.append(liElement);
        sumTotal += 5;
      };
    };
  };
  const strongElement = document.createElement('strong');
  strongElement.innerHTML = `$${sumTotal}`;
  panelElement.append(strongElement);
};

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
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