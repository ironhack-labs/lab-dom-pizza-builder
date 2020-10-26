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
  document.querySelectorAll('.green-pepper').forEach(oneGreenP => {
    if (state.greenPeppers) {
      oneGreenP.style.visibility = 'visible';
    } else {
      oneGreenP.style.visibility = 'hidden';
    }
  });
}
function renderWhiteSauce() {
    if (state.whiteSauce) {
      document.querySelector(".sauce").classList.add("sauce-white");
    } else {
      document.querySelector(".sauce").classList.remove("sauce-white");
    }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
   } else {
     document.querySelector(".crust").classList.remove("crust-gluten-free");
   }
}

function renderButtons() {
let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
buttons[i].onclick = function() {
buttons[i].classList.toggle('active')
}
};
}

function renderPrice() {
//let productState = Object.values(state);
//let pricesList = document.getElementsByTagName('li');
//for (let i = 5; i < pricesList.length; i++) {
// for (let j=0; i < pricesList.length; i++){
//  if (productState[0] !== true) {
//    
// }
//}
}


renderEverything()


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

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
document.querySelector(".btn-crust").classList.remove("active");
document.querySelector(".btn-sauce").classList.remove("active");

// Iteration 3 : Add click event listener on (active button);