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
  whiteSauce: true,
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


function regularCrust() {
  const regCrust = document.querySelector('.crust.crust-gluten-free');
  regCrust.classList.remove('crust-gluten-free');
}

regularCrust();

function tomato() {
  const tomatoRedSauce = document.querySelector('.sauce.sauce-white');
 /* tomatoRedSauce.classList.add('sauce');*/
  tomatoRedSauce.classList.remove('sauce-white');
}

tomato();

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
  document.querySelectorAll('.mushroom').forEach(oneMushrooms => {
    if (state.mushrooms) {
      oneMushrooms.style.visibility = 'visible';
    } else {
      oneMushrooms.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  /*
  document.querySelectorAll('.sauce').forEach(sauce => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  })
  */
}

function tomatoSauceVisible() {
  const redSauceVisible = document.querySelector('.sauce');
  if (state.whiteSauce) {
    redSauceVisible.classList.add('sauce-white');
  } else {
    redSauceVisible.classList.remove('sauce-white');
  }
}

function glutenFreeCrustVisible() {
  
  const glutenCrustVisible = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    glutenCrustVisible.classList.remove('crust-gluten-free');
  } else {
    glutenCrustVisible.classList.add('crust-gluten-free');
  }
  
}

function renderGlutenFreeCrust() {
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
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

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce.active').addEventListener('click', () => {
  tomatoSauceVisible();
  state.whiteSauce = !state.whiteSauce;
   renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  glutenFreeCrustVisible();
  state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
})
