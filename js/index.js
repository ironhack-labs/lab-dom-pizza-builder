// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1, state: true },
  mushrooms: { name: 'Mushrooms', price: 1, state: true },
  greenPeppers: { name: 'Green Peppers', price: 1, state: true },
  whiteSauce: { name: 'White sauce', price: 3, state: false },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5, state: false },
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
    document.querySelectorAll('.pep').forEach(onePep => ingredients.pepperoni.state ? onePep.style.visibility = 'visible' : onePep.style.visibility = 'hidden');
}

function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(oneShroom => ingredients.mushrooms.state ? oneShroom.style.visibility = 'visible' : oneShroom.style.visibility = 'hidden');
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePepper => ingredients.greenPeppers.state ? onePepper.style.visibility = 'visible' : onePepper.style.visibility = 'hidden');
}

function renderWhiteSauce() {
  ingredients.whiteSauce.state ? document.querySelector('.sauce').classList.add('sauce-white') : document.querySelector('.sauce').classList.remove('sauce-white');
}

function renderGlutenFreeCrust() {
  ingredients.glutenFreeCrust.state ? document.querySelector('.crust').classList.add('crust-gluten-free') : document.querySelector('.crust').classList.remove('crust-gluten-free');
}

function renderButtons() {
  ingredients.pepperoni.state ? document.querySelector('.btn.btn-pepperoni').classList.add('active') : document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  ingredients.mushrooms.state ? document.querySelector('.btn.btn-mushrooms').classList.add('active') : document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  ingredients.greenPeppers.state ? document.querySelector('.btn.btn-green-peppers').classList.add('active') : document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  ingredients.whiteSauce.state ? document.querySelector('.btn.btn-sauce').classList.add('active') : document.querySelector('.btn.btn-sauce').classList.remove('active');
  ingredients.glutenFreeCrust.state ? document.querySelector('.btn.btn-crust').classList.add('active') : document.querySelector('.btn.btn-crust').classList.remove('active');
}

function renderPrice() {
  let sumOfPrice = basePrice;
  let priceList = "";
  if (ingredients.pepperoni.state) {
    priceList += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    sumOfPrice += ingredients.pepperoni.price;
  } 
  if (ingredients.mushrooms.state) {
    priceList += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    sumOfPrice += ingredients.mushrooms.price;
  } 
  if (ingredients.greenPeppers.state) {
    priceList += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    sumOfPrice += ingredients.greenPeppers.price;
  } 
  if (ingredients.whiteSauce.state) {
    priceList += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    sumOfPrice += ingredients.whiteSauce.price;
  } 
  if (ingredients.glutenFreeCrust.state) {
    priceList += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    sumOfPrice += ingredients.glutenFreeCrust.price;
  } 
  document.querySelector('.panel.price ul').innerHTML = priceList;
  document.querySelector('strong').innerHTML = `$${sumOfPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  ingredients.pepperoni.state = !ingredients.pepperoni.state;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  ingredients.mushrooms.state = !ingredients.mushrooms.state;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  ingredients.greenPeppers.state = !ingredients.greenPeppers.state;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  ingredients.whiteSauce.state = !ingredients.whiteSauce.state;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  ingredients.glutenFreeCrust.state = !ingredients.glutenFreeCrust.state;
  renderEverything();
});