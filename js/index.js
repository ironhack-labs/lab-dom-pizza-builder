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

function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}
function toggleVisibility(className, ingredientState){
  document.querySelectorAll(className).forEach((ingredient) =>{
    ingredientState ? ingredient.style.visibility = 'visible' : ingredient.style.visibility = 'hidden'
  })
}
function renderPepperoni() {
  toggleVisibility('.pep', state.pepperoni)
}
function renderMushrooms() {
  toggleVisibility('.mushroom', state.mushrooms)
}
function renderGreenPeppers() {
  toggleVisibility('.green-pepper', state.greenPeppers)
}
function renderWhiteSauce() {
  toggleVisibility('.sauce-white', state.whiteSauce)
}
function renderGlutenFreeCrust() {
  toggleVisibility('.crust-gluten-free', state.glutenFreeCrust)
}
function toggleActiveButtons(buttonClass, ingredientState){
  const button = document.querySelector(buttonClass)
  ingredientState ? button.classList.add("active") : button.classList.remove("active")
}
function renderButtons() {
  toggleActiveButtons(".btn-pepperoni", state.pepperoni)
  toggleActiveButtons(".btn-mushrooms", state.mushrooms)
  toggleActiveButtons(".btn-green-peppers", state.greenPeppers)
  toggleActiveButtons(".btn-sauce", state.whiteSauce)
  toggleActiveButtons(".btn-crust", state.glutenFreeCrust)
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = 0
  state.pepperoni ? price += ingredients.pepperoni.price : price 
  state.mushrooms ? price += ingredients.mushrooms.price : price 
  state.greenPeppers ? price += ingredients.greenPeppers.price : price 
  state.whiteSauce ? price += ingredients.whiteSauce.price : price
  state.glutenFreeCrust ? price += ingredients.glutenFreeCrust.price : price  

  const totalpriceElement = document.querySelector(".panel.price > strong")
  totalpriceElement.innerText = basePrice + price
  return basePrice + ingredients
}

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