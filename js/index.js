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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGrPep) => {
    if (state.greenPeppers) {
      oneGrPep.style.visibility = 'visible';
    } else {
      oneGrPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add("sauce-white");
  } else {
    document.querySelector('.sauce').classList.remove("sauce-white");
  }
  
 }

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add("crust-gluten-free");
  } else {
    document.querySelector('.crust').classList.remove("crust-gluten-free");
  }
 }

function renderButtons() {
 let buttons = document.getElementsByClassName("btn");
 let buttonVals = Object.values(state);
 for (let i = 0; i < buttons.length; i++) {
   if (buttonVals[i] === true) {
     buttons[i].classList.add("active");
   } else {
    buttons[i].classList.remove("active");
   }
 }
}

function renderPrice() {
  let pricePosition = document.querySelector("aside ul");
  let buttonKeys = Object.keys(state);
  let buttonVals = Object.values(state);
  while (pricePosition.firstChild) {pricePosition.removeChild(pricePosition.firstChild)}
 for (let i = 0; i < buttonVals.length; i++) {
   if (buttonVals[i] === true) {
     pricePosition.appendChild(document.createElement("li")).classList.add(`pricelist-${buttonKeys[i]}`);
     document.querySelector(`.pricelist-${buttonKeys[i]}`).textContent = `$ ${ingredients[buttonKeys[i]].price} ${ingredients[buttonKeys[i]].name}`;
     } 
 }

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});