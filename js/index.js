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

console.log(state)

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  //renderPrice();
}

const totalPrice = document.querySelector(".totalPrice")
 const priceList = document.querySelectorAll(".precios li")
 let activeButtons = document.querySelectorAll(".active")

function renderPepperoni() {
 
  document.querySelectorAll('.pep').forEach(onePep => {
      if (state.pepperoni) {
        onePep.style.visibility = 'visible';
        priceList[0].style.display = 'block'
        activeButtons[0].classList.add("active")

       
      } else {
        onePep.style.visibility = 'hidden';
        priceList[0].style.display = 'none'
        activeButtons[0].classList.remove("active")
        
      }
    });
  }

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
      priceList[1].style.display = 'block'
      activeButtons[1].classList.add("active")
    } else {
      oneMush.style.visibility = 'hidden';
      priceList[1].style.display = 'none'
      activeButtons[1].classList.remove("active")
    }
  });
}
console.log(renderMushrooms())

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGP => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
      priceList[2].style.display = 'block'
      activeButtons[2].classList.add("active")
    } else {
      oneGP.style.visibility = 'hidden';
      priceList[2].style.display = 'none'
      activeButtons[2].classList.remove("active")
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneWS => {
    if (state.whiteSauce) {
      oneWS.style.visibility = 'hidden';
      priceList[3].style.display = 'none'
      activeButtons[3].classList.remove("active")
    } else {
      oneWS.style.visibility = 'visible';
      priceList[3].style.display = 'block'
      activeButtons[3].classList.add("active")
    }
  });
}

function renderGlutenFreeCrust() {  
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if (state.glutenFreeCrust) {
      oneCrust.style.visibility = 'hidden';
      priceList[4].style.display = 'none'
      activeButtons[4].classList.remove("active")
    } else {
      oneCrust.style.visibility = 'visible';
      priceList[4].style.display = 'block'
       activeButtons[4].classList.add("active")

    }
  });
}


function renderButtons() {

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`


  }
     


/////ITERACION 4

function priceActPep() {
totalPrice.innerHTML = basePrice
  if(state.pepperoni) {
    basePrice+=ingredients.pepperoni.price
    totalPrice.innerHTML = basePrice
  } else {
    basePrice-=ingredients.pepperoni.price
    totalPrice.innerHTML = basePrice
  }
}

function priceActMush(){
  totalPrice.innerHTML = basePrice
  if(state.mushrooms) {
    basePrice+=ingredients.mushrooms.price
    totalPrice.innerHTML = basePrice
  } else {
    basePrice-=ingredients.mushrooms.price
    totalPrice.innerHTML = basePrice
  }}

  function priceActGreeP(){
    totalPrice.innerHTML = basePrice
  if(state.greenPeppers) {
    basePrice+=ingredients.greenPeppers.price
    totalPrice.innerHTML = basePrice
  } else {
    basePrice-=ingredients.greenPeppers.price
    totalPrice.innerHTML = basePrice
  }}

  function priceActSauce(){
    totalPrice.innerHTML = basePrice
  if(state.whiteSauce) {
    basePrice+=ingredients.whiteSauce.price
    totalPrice.innerHTML = basePrice
  } else {
    basePrice-=ingredients.whiteSauce.price
    totalPrice.innerHTML = basePrice
  }}

  function priceActCrust(){
    totalPrice.innerHTML = basePrice
  if(state.glutenFreeCrust) {
    basePrice+=ingredients.glutenFreeCrust.price
    totalPrice.innerHTML = basePrice
  } else {
    basePrice-=ingredients.glutenFreeCrust.price
    totalPrice.innerHTML = basePrice
  }}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;

  priceActPep()
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  priceActMush()
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  priceActGreeP()
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  priceActSauce()
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  priceActCrust()
  renderEverything();
});