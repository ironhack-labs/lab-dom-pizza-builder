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
function renderEverything(event) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons(event);
  renderPrice();
}


function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if(state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
};

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom)=>{
    if(state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper)=>{
    if(state.greenPeppers){
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}



function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelector('.sauce').className = state.whiteSauce ? 'sauce sauce-white' : 'sauce';  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector('.crust').className = state.glutenFreeCrust ? 'crust crust-gluten-free' : 'crust';
}



function renderButtons(event) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (event.target.classList.contains('active')){
    event.target.classList.remove('active');
  } else {
    event.target.classList.add('active');
  } 
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pricePanel = document.querySelector(".panel.price ul");
  let totalPrice = basePrice;

  if(state.pepperoni){
    pricePanel.querySelector('#ingredient1').style.visibility = 'visible';
    pricePanel.querySelector('#ingredient1').innerText = "$1 pepperoni";
    totalPrice += 1;
  } else {
    pricePanel.querySelector('#ingredient1').style.visibility = 'hidden';
  }

  if(state.mushrooms){
    pricePanel.querySelector('#ingredient2').style.visibility = 'visible';
    pricePanel.querySelector('#ingredient2').innerText = "$1 mushrooms";
    totalPrice += 1;
  } else {
    pricePanel.querySelector('#ingredient2').style.visibility = 'hidden';
  }

  if(state.greenPeppers){
    pricePanel.querySelector('#ingredient3').style.visibility = 'visible';
    pricePanel.querySelector('#ingredient3').innerText = "$1 green peppers";
    totalPrice += 1;
  } else {
    pricePanel.querySelector('#ingredient3').style.visibility = 'hidden';
  }

  if(state.whiteSauce){
    pricePanel.querySelector('#ingredient4').style.visibility = 'visible';
    pricePanel.querySelector('#ingredient4').innerText = "$3 white sauce";
    totalPrice += 3;
  } else {
    pricePanel.querySelector('#ingredient4').style.visibility = 'hidden';
  }

  if(state.glutenFreeCrust){
    pricePanel.querySelector('#ingredient5').style.visibility = 'visible';
    pricePanel.querySelector('#ingredient5').innerText = "$5 gluten-free crust";
    totalPrice += 5;
  } else {
    pricePanel.querySelector('#ingredient5').style.visibility = 'hidden';
  }
  document.querySelector('.panel.price strong').innerText = `$${totalPrice}`;
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function(event) {
  state.pepperoni = !state.pepperoni;
  renderEverything(event);
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function(event){
  state.mushrooms = !state.mushrooms;
  renderEverything(event);
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function(event){
  state.greenPeppers = !state.greenPeppers;
  renderEverything(event);
});


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function(event){
  state.whiteSauce = !state.whiteSauce;
  renderEverything(event);
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function(event){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(event);
});


//renderEverything();
window.addEventListener('load', () => {
  renderPrice();
});