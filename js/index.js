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
 document.querySelectorAll('.mushroom').forEach(onMush =>{
   if (state.mushrooms) {
     onMush.style.visibility = "visible";
    }  else {
       onMush.style.visibility = "hidden";
     }
   });
 }
// Iteration 1: set the visibility of `<section class="mushroom">`


function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onGreenPap => {
    if (state.greenPeppers){
      onGreenPap.style.visibility = 'visible';
    } else {
      onGreenPap.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  const whiteSauce = document.querySelector('.sauce');
if(state.whiteSauce){
  whiteSauce.classList.add('sauce-white')
}
else {
  whiteSauce.classList.remove('sauce-white');
}
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  const glutenFreeCrust = document.querySelector(".crust");
    if(state.glutenFreeCrust){
      glutenFreeCrust.classList.add('crust-gluten-free');

    }
else {
  glutenFreeCrust.classList.remove('crust-gluten-free');
}  
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
const buttons = document.querySelectorAll('.panel.control');
buttons.toggleClass('active');

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  function calcPrice(){
    
    var totalPrice=10;
  
    if ($('.btn-pepperonni').hasClass('active')) {
      totalPrice += 1;
    }
    if ($('.btn-mushrooms').hasClass('active')) {
      totalPrice += 1;
    }
    if ($('.btn-green-peppers').hasClass('active')) {
      totalPrice += 1;
    }
    if ($('.btn-sauce').hasClass('active')) {
      totalPrice += 3;
    }
    if ($('.btn-crust').hasClass('active')) {
      totalPrice += 5;
    }
  
    $('#totalPrice').html(totalPrice);
  }
  // Iteration 4: change the HTML of `<aside class="panel price">`
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
  renderEverything ();
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
