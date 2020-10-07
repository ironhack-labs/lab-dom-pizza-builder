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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGPep => {
    if (state.greenPeppers) {
      oneGPep.style.visibility = 'visible';
    } else {
      oneGPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce-white').forEach(oneWsauce => {
    if (state.whiteSauce) {
      oneWsauce.style.visibility = 'visible';
    } else {
      oneWsauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(oneGfree => {
    if (state.glutenFreeCrust) {
      oneGfree.classList.remove('crust-gluten-free');
    } else {
      oneGfree.classList.add('crust-gluten-free');
    }
  });
}

function renderButtons() {

  // let botones = state; 

  // if (botones.pepperonni){
  //   document.querySelector('.btn.btn-pepperonni').classList.add('active')
  // }
  // else {
  //   document.querySelector('.btn.btn-pepperonni').classList.remove('active')
  // }
  // if (botones.mushrooms){
  //   document.querySelector('.btn.btn-mushrooms').classList.add('active')
  // }
  // else {
  //   document.querySelector('.btn.btn-mushrooms').classList.remove('active')
  // }
  // if (botones.greenPeppers){
  //   document.querySelector('.btn.btn-green-peppers').classList.add('active')
  // }
  // else {
  //   document.querySelector('.btn.btn-green-peppers').classList.remove('active')
  // }
  // if (botones.whiteSauce){
  //   document.querySelector('.btn.btn-sauce').classList.add('active')
  // }
  // else {
  //   document.querySelector('.btn.btn-sauce').classList.remove('active')
  // }
  // if (botones.glutenFreeCrust){
  //   document.querySelector('.btn.btn-crust').classList.add('active')
  // }
  // else {
  //   document.querySelector('.btn.btn-crust').classList.remove('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn-green-peppers').addEventListener('click', () => {
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