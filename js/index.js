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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreen => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  whiteSauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    whiteSauce.setAttribute('class', 'sauce sauce-white');
  } else {
    whiteSauce.setAttribute('class', 'sauce');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.setAttribute('class', 'crust crust-gluten-free');
  } else {
    crust.setAttribute('class', 'crust');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //pepperoniBtn.setAttribute('class', '.btn .btn-pepperoni');
  // Get all buttons
  let pepperoniBtn = document.querySelector('.btn.btn-pepperoni');
  let mushRoomBtn = document.querySelector('.btn.btn-mushrooms');
  let greenPepperoniBtn = document.querySelector('.btn.btn-green-peppers');
  let whiteSauceBtn = document.querySelector('.btn.btn-sauce');
  let glutenFreeCrustBtn = document.querySelector('.btn.btn-crust');
  // Set class attribute according to their state.
  state.pepperoni? pepperoniBtn.setAttribute('class', 'btn btn-pepperoni active') : pepperoniBtn.setAttribute('class', 'btn btn-pepperoni');
  state.mushrooms? mushRoomBtn.setAttribute('class', 'btn btn-mushrooms active') : mushRoomBtn.setAttribute('class', 'btn btn-mushrooms');
  state.greenPeppers? greenPepperoniBtn.setAttribute('class', 'btn btn-green-peppers active') : greenPepperoniBtn.setAttribute('class', 'btn btn-green-peppers');
  state.whiteSauce? whiteSauceBtn.setAttribute('class', 'btn btn-sauce active') : whiteSauceBtn.setAttribute('class', 'btn btn-sauce');
  state.glutenFreeCrust? glutenFreeCrustBtn.setAttribute('class', 'btn btn-crust active') : glutenFreeCrustBtn.setAttribute('class', 'btn btn-crust');
}

function renderPrice() {
  //basic pizza price
  let pizzaPrice = 10;

  //string to store li elements
  let listHtml = "";

  //Calculate price & Generate list html content
  if(state.pepperoni){
    pizzaPrice += ingredients.pepperoni.price;
    listHtml += "<li>$" + ingredients.pepperoni.price +" pepperoni</li>";
  }
  if(state.mushrooms){
    pizzaPrice += ingredients.mushrooms.price;
    listHtml += "<li>$" + ingredients.mushrooms.price +" mushrooms</li>";
  }
  if(state.greenPeppers){
    pizzaPrice += ingredients.greenPeppers.price;
    listHtml += "<li>$" + ingredients.greenPeppers.price +" green peppers</li>";
  }
  if(state.whiteSauce){
    pizzaPrice += ingredients.whiteSauce.price;
    listHtml += "<li>$" + ingredients.whiteSauce.price +" white sauce</li>";
  }
  if(state.glutenFreeCrust){
    pizzaPrice += ingredients.glutenFreeCrust.price;
    listHtml += "<li>$" + ingredients.glutenFreeCrust.price +" gluten-free crust</li>";
  }

  //Update list content
  let ul = document.querySelector('.panel.price ul');
  ul.innerHTML = listHtml;

  // Update Total
  let displayPrice = document.querySelector('.panel.price strong');
  displayPrice.innerHTML = "$"+pizzaPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
