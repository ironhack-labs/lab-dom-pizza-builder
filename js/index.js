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
  glutenFreeCrust: true,
  active: true
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
  document.querySelectorAll('.mushroom').forEach(mushi => {
    if (state.mushrooms) {
      mushi.style.visibility = 'visible';
    } else {
      mushi.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(peppi => {
    if (state.greenPeppers) {
      peppi.style.visibility = 'visible';
    } else {
      peppi.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(salsa => {
    if (state.whiteSauce) {
      salsa.style.visibility = 'visible';
    } else {
      salsa.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach(crusty => {
    if (state.glutenFreeCrust){
      crusty.style.visibility = 'visible';
    } else {
      crusty.style.visibility = 'hidden';
    }
  })
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  document.querySelectorAll('.active').forEach(acti => {
    if (state.active){
      acti.style.visibility = 'visible';
    } else {
      acti.style.visibility = 'hidden';
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 10;

  if (state.pepperoni === true) {
    totalPrice += ingredients.pepperoni.price
  }

  if (state.mushrooms === true) {
    totalPrice += ingredients.mushrooms.price
  }

  if (state.greenPeppers === true) {
    totalPrice += ingredients.greenPeppers.price
  }

  if (state.whiteSauce === true) {
    totalPrice += ingredients.whiteSauce.price
  }

  if (state.glutenFreeCrust === true) {
    totalPrice += ingredients.glutenFreeCrust.price
  }
  console.log(totalPrice)

  const total = document.querySelector(".panel strong");
  total.innerHTML = totalPrice

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
}); 


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
    state.whiteSauce = !state.whiteSauce
    renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})

document.querySelector('.active').addEventListener('click', () => {
  state.active = !state.active
  renderEverything()
})