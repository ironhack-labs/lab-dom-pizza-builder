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

let list = document.querySelector('.panel.price ul');
let totalPrice = basePrice;

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
  state.pepperoni ? totalPrice += ingredients.pepperoni.price : totalPrice -= ingredients.pepperoni.price;
  renderPrice();
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
  state.mushrooms ? totalPrice += ingredients.mushrooms.price : totalPrice -= ingredients.mushrooms.price;
  renderPrice();
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
  state.greenPeppers ? totalPrice += ingredients.greenPeppers.price : totalPrice -= ingredients.greenPeppers.price;
  renderPrice();
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelector('.sauce').classList.toggle('sauce-white');
  renderPrice();
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector('.crust').classList.toggle('crust-gluten-free');
  renderPrice();
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(btn => btn.classList.add('active'));
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  list.innerHTML = "";
  if (state.pepperoni) list.innerHTML += '<li>$1 pepperoni</li>';
  if (state.mushrooms) list.innerHTML += '<li>$1 mushrooms</li>';
  if (state.greenPeppers) list.innerHTML += '<li>$1 green peppers</li>';
  if (state.whiteSauce) list.innerHTML += '<li>$3 white sauce</li>';
  if (state.glutenFreeCrust) list.innerHTML += '<li>$5 gluten-free crust</li>';
  document.querySelector(".panel.price strong").textContent = `$${totalPrice}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', (event) => {
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
  event.target.classList.toggle('active');
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', (event) => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  event.target.classList.toggle('active');
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', (event) => {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
  event.target.classList.toggle('active');
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', (event) => {
  state.whiteSauce = !state.whiteSauce;
  state.whiteSauce ? totalPrice += ingredients.whiteSauce.price : totalPrice -= ingredients.whiteSauce.price;
  renderWhiteSauce();
  event.target.classList.toggle('active');
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', (event) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  state.glutenFreeCrust ? totalPrice += ingredients.glutenFreeCrust.price : totalPrice -= ingredients.glutenFreeCrust.price;
  renderGlutenFreeCrust();
  event.target.classList.toggle('active');
});
