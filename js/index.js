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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if(state.mushrooms){
      oneMush.style.visibility = 'visible';
    }
    else{
      oneMush.style.visibility = 'hidden';
    }
    })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if(state.greenPeppers){
      oneGreenPep.style.visibility = 'visible';
    }
    else{
      oneGreenPep.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let saucy = document.querySelectorAll('.sauce');
  saucy.forEach((witSauce) => {
    if(state.whiteSauce){
      witSauce.classList.add('sauce-white')
    }else{
      witSauce.classList.remove('sauce-white');
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crusty = document.querySelectorAll('.crust');
  crusty.forEach((glutCrust) => {
    if(state.glutenFreeCrust){
      glutCrust.classList.add('crust-gluten-free')
    }else{
      glutCrust.classList.remove('crust-gluten-free');
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelector('.btn.btn-pepperoni').classList.toggle('active', state.pepperoni)
  document.querySelector('.btn.btn-mushrooms').classList.toggle('active', state.mushrooms)
  document.querySelector('.btn.btn-green-peppers').classList.toggle('active', state.greenPeppers)
  document.querySelector('.btn.btn-sauce').classList.toggle('active', state.whiteSauce)
  document.querySelector('.btn.btn-crust').classList.toggle('active',state.glutenFreeCrust)
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 10
  let pizzaPrice = totalPrice
  let pricePeperoni = parseInt(document.querySelector('.peppero span').innerText)
  const pepperoniLi = document.querySelector('.peppero')
  let mushroomPrice = parseInt(document.querySelector('.mush span').innerText)
  let mushroomLi = document.querySelector('.mush')
  let pepperPrice = parseInt(document.querySelector('.greenppr span').innerText)
  let pepperLi = document.querySelector('.greenppr')
  let whiteSauPrice = parseInt(document.querySelector('.witSau span').innerText)
  let whiteSauceLi = document.querySelector('.witSau')
  let glutePrice = parseInt(document.querySelector('.glute span').innerText)
  let gluteLi = document.querySelector('.glute')
 
  if(state.pepperoni){
    pizzaPrice += pricePeperoni
    pepperoniLi.style.visibility = 'visible' 
  }
  else{
    pepperoniLi.style.visibility = 'hidden'
  }

  if(state.greenPeppers){
    pizzaPrice += pepperPrice
    pepperLi.style.visibility = 'visible' 
  }
  else{
    pepperLi.style.visibility = 'hidden'
  }

  if(state.mushrooms){
    pizzaPrice += mushroomPrice
    mushroomLi.style.visibility = 'visible' 
  }
  else{
    mushroomLi.style.visibility = 'hidden'
  }

  if(state.whiteSauce){
    pizzaPrice += whiteSauPrice
    whiteSauceLi.style.visibility = 'visible' 
  }
  else{
    whiteSauceLi.style.visibility = 'hidden'
  }

  if(state.glutenFreeCrust){
    pizzaPrice += glutePrice
    gluteLi.style.visibility = 'visible' 
  }
  else{
    gluteLi.style.visibility = 'hidden'
  }

  document.querySelector('strong span').innerText = pizzaPrice
 
}
 /* document.querySelector(".btn-peperoni").addEventListener('click', function (){
    if(state.pepperoni){
      document.querySelector('.peppero').visibility ='visible'
      document.querySelector('.price strong span') = `${pizzaPrice + pricePeperoni}`
    }
    else{
      document.querySelector('.peppero').visibility ='hidden'
    }
  }) */

 /* document.querySelectorAll('.green-pepper').forEach((pepPrice) => {
    if(state.pepperoni && state.mushrooms && state.greenPeppers && state.whiteSauce && state.glutenFreeCrust){
      document.querySelector('.price strong span').innerText = `${pizzaPrice + pricePeperoni +mushroomPrice + pepperPrice + whiteSauPrice + glutePrice}`
    } 
}) */

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (){
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function (){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function(){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
