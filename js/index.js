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
  document.querySelectorAll('.pep').forEach(onePep => {   //loop through each pepperoni with class .pep
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';                //if pepperoni inside object 'state' = true, pepperoni is of style.visibility 'visible'
    } else {
      onePep.style.visibility = 'hidden';                 //else (is false), pepperoni is of style.visibility 'hidden'
    }
  });
}
  // Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMush => {
  if (state.mushrooms) {
    oneMush.style.visibility = 'visible';
  } else {
    oneMush.style.visibility = 'hidden';
  }
});
}
// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
  }
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  const sauce = document.querySelector(".sauce");   //querySelectorAll not needed as there is only one .sauce//
  if(state.whiteSauce) {                            //if boolean value in OBJECT 'state' is true//
    sauce.classList.add("sauce-white");             
  } else {
    sauce.classList.remove("sauce-white");
  }
}
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const gFree = document.querySelector('.crust')
  if(state.glutenFreeCrust) {
    gFree.classList.add("crust-gluten-free");
  } else {
    gFree.classList.remove("crust-gluten-free");
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
//if state is true, button is active, else button is inactive
function renderButtons() {
const btnPep = document.querySelector('.btn.btn-pepperoni')
const btnMush = document.querySelector('.btn.btn-mushrooms')
const btnGPep = document.querySelector('.btn.btn-green-peppers')
const btnSauce = document.querySelector('.btn.btn-sauce')
const btnCrust = document.querySelector('.btn.btn-crust')
if (state.pepperoni) {
btnPep.classList.add("active");
} else {
btnPep.classList.remove("active");
}
if (state.mushrooms) {
btnMush.classList.add("active");
} else {
btnMush.classList.remove("active");
}
if (state.greenPeppers) {
btnGPep.classList.add("active");
} else {
btnGPep.classList.remove("active");
}
if (state.whiteSauce) {
btnSauce.classList.add("active");
} else {
btnSauce.classList.remove("active");
}
if (state.glutenFreeCrust) {
btnCrust.classList.add("active");
} else {
btnCrust.classList.remove("active");
}
}

  // Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  const pepLi = document.querySelector('.pep-li');
  const mushLi = document.querySelector('.mush-li');
  const gPepLi = document.querySelector('.g-pepp-li');
  const sauceLi = document.querySelector('.sauce-li');
  const crustLi = document.querySelector('.crust-li');

  let finalPrice = document.querySelector('.panel.price strong');
  state.pepperoni ? (pepLi.style.display = "block") : (pepLi.style.display = "none");
  state.mushrooms ? (mushLi.style.display = "block") : (mushLi.style.display = "none");
  state.greenPeppers ? (gPepLi.style.display = "block") : (gPepLi.style.display = "none");
  state.whiteSauce ? (sauceLi.style.display = "block") : (sauceLi.style.display = "none");
  state.glutenFreeCrust ? (crustLi.style.display = "block") : (crustLi.style.display = "none");
  
  let finalPepPrice = ingredients.pepperoni.price * state.pepperoni; // when you multiply a boolean, if boolean = false, multiplies by falsey, or 0. If boolean = true, multiplies by truthy, or 1.
  let finalMushPrice = ingredients.mushrooms.price * state.mushrooms;
  let finalGPeppPrice = ingredients.greenPeppers.price * state.greenPeppers;
  let finalSaucePrice = ingredients.whiteSauce.price * state.whiteSauce;
  let finalCrustPrice = ingredients.glutenFreeCrust.price * state.glutenFreeCrust;
  
finalPrice.textContent = basePrice + finalPepPrice + finalMushPrice + finalGPeppPrice + finalSaucePrice + finalCrustPrice;
}
  
/*const list = document.querySelectorAll
  const pepLi = list[0];
  const pepLi = list[0];
  const pepLi = list[0];
  const pepLi = list[0];
  const pepLi = list[0];*/
    

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
})