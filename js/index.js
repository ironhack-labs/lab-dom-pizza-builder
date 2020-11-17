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
    document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
      document.querySelectorAll('.green-pepper').forEach(onegreenPepper => {
    if (state.greenPeppers) {
      onegreenPepper.style.visibility = 'visible';
    } else {
      onegreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelector(".sauce").classList.toggle("sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector('.crust').classList.toggle("crust-gluten-free");
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {document.querySelector('.btn.btn-pepperoni').classList.remove('active');}
  else {document.querySelector('.btn.btn-pepperoni').classList.add('active');}
  if (state.mushrooms) {document.querySelector('.btn.btn-mushrooms').classList.remove('active');}
  else {document.querySelector('.btn.btn-mushrooms').classList.add('active');}
  if (state.greenPeppers) {document.querySelector('.btn.btn-green-peppers').classList.remove('active');}
  else {document.querySelector('.btn.btn-green-peppers').classList.add('active');}
  if (state.whiteSauce) {document.querySelector('.btn.btn-sauce').classList.remove('active');}
  else {document.querySelector('.btn.btn-sauce').classList.add('active');}
  if (state.glutenFreeCrust) {document.querySelector('.btn.btn-crust').classList.remove('active');}
  else {document.querySelector('.btn.btn-crust').classList.add('active');}
  //I know that I need to simplify this!!!
}


//ITERATION 4 
let prices = {
  pepperoni: 1,
  mushrooms: 1,
  greenPeppers: 1,
  whiteSauce: 3,
  glutenFreeCrust: 5,
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  (state.pepperoni) ? document.getElementById('pricePep').style.display = "block" : document.getElementById('pricePep').style.display = "none";
  (state.mushrooms) ? document.getElementById('priceMush').style.display = "block" : document.getElementById('priceMush').style.display = "none";
  (state.greenPeppers) ? document.getElementById('priceGreenPep').style.display = "block" : document.getElementById('priceGreenPep').style.display = "none";
  (state.whiteSauce) ? document.getElementById('priceWhiteSauce').style.display = "block" : document.getElementById('priceWhiteSauce').style.display = "none";
  (state.glutenFreeCrust) ? document.getElementById('priceCrust').style.display = "block" : document.getElementById('priceCrust').style.display = "none";
}

function renderTotalPrice() {
  let totalPrice = 10
  if (state.pepperoni) {totalPrice += prices.pepperoni};
  if (state.mushrooms) {totalPrice += prices.mushrooms};
  if (state.greenPeppers) {totalPrice += prices.greenPeppers};
  if (state.whiteSauce) {totalPrice += prices.whiteSauce};
  if (state.glutenFreeCrust) {totalPrice += prices.glutenFreeCrust};
  document.querySelector('.panel.price strong').textContent = `$${totalPrice}`;
  //fyi this isn't working for some reason. 
};
console.log(document.querySelector('.panel.price strong').textContent)


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
  renderButtons();
  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  renderButtons();
  renderPrice();  
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
  renderButtons();
  renderPrice();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderButtons();
  renderPrice();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
});