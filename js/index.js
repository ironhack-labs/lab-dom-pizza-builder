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

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushroom) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`

 function renderGreenPeppers() {
   document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
     if (state.green-pepper) {
       oneGreenPepper.style.visibility = 'visible';
     } else {
       oneGreenPepper.style.visibility = 'hidden';
     }
   });


// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
let $whiteSauce = document.querySelector(".sauce");
if (state.$whiteSauce) {
  $whiteSauce.classList.add("sauce-white");
}
else {
  $whiteSauce.classList.remove("sauce-white");
}
}
 

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  let $glutenFreeCrust = document.querySelector(".crust");
if (state.$glutenFreeCrust) {
  $glutenFreeCrust.classList.add("crust-gluten-free");
}
else {
  $glutenFreeCrust.classList.remove("crust-gluten-free");
}
}
  
  

 // Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
 if (state.pepperonni) {
     document.querySelector(".btn.btn-pepperonni").classList.add("active");
   } else {
     document.querySelector(".btn.btn-pepperonni").classList.remove("active");
   }
   if (state.mushrooms) {
     document.querySelector(".btn.btn-mushrooms").classList.add("active");
   } else {
     document.querySelector(".btn.btn-mushrooms").classList.remove("active");
   }
   if (state.greenPeppers) {
     document.querySelector(".btn.btn-green-peppers").classList.add("active");
   } else {
     document.querySelector(".btn.btn-green-peppers").classList.remove("active");
   }
   if (state.whiteSauce) {
     document.querySelector(".btn.btn-sauce").classList.add("active");
   } else {
     document.querySelector(".btn.btn-sauce").classList.remove("active");
   }
   if (state.glutenFreeCrust) {
     document.querySelector(".btn.btn-crust").classList.add("active");
   } else {
     document.querySelector(".btn.btn-crust").classList.remove("active");
}

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
}); 
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushroom = !state.mushroom;
  renderEverything();
}); 
}


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
