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

// link to button
const pepperoniBtn = document.querySelector('.btn.btn-pepperoni')
const mushroomBtn = document.querySelector('.btn.btn-mushrooms');
const pepperBtn = document.querySelector('.btn.btn-green-peppers');
const sauceBtn = document.querySelector('.btn.btn-sauce');
const crustBtn = document.querySelector('.btn.btn-crust');


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
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(greenPepper => {
    state.greenPeppers ? greenPepper.style.visibility = 'visible' : greenPepper.style.visibility = 'hidden';
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceSection = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauceSection.classList.add('sauce-white')
  } else {
    sauceSection.classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustSection = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crustSection.classList.add('crust-gluten-free')
  } else {
    crustSection.classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  const button = document.getElementsByClassName('button');
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  state.pepperoni ? pepperoniBtn.classList.add('active') : pepperoniBtn.classList.remove('active')
  state.mushrooms ? mushroomBtn.classList.add('active') : mushroomBtn.classList.remove('active')
  state.greenPeppers ? pepperBtn.classList.add('active') : pepperBtn.classList.remove('active')
  state.whiteSauce ? sauceBtn.classList.add('active') : sauceBtn.classList.remove('active')
  state.glutenFreeCrust ? crustBtn.classList.add('active') : crustBtn.classList.remove('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let receipt = "";
  let finalPrice = basePrice;

  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      finalPrice += ingredients[ingredient].price
      receipt += "<li>$"+ ingredients[ingredient].price + " " + ingredients[ingredient].name + "</li>"
    }
  }
  const receiptList = document.querySelector('aside ul')
  receiptList.innerHTML = receipt

  const sum = document.querySelector('aside strong')
  sum.textContent = "$"+ finalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
pepperoniBtn.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
mushroomBtn.addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
} )
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

pepperBtn.addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
} )
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`


sauceBtn.addEventListener('click', function () {
  console.log("sauce")
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
} )
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`


crustBtn.addEventListener('click', function () {
  console.log("crust")
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
