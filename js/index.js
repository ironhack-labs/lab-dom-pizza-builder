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
  document.querySelectorAll('.pep').forEach((oneMush) => {
    if (state.pepperoni) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.green-pepper').forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.mushroom').forEach((onePep) => {
    if (state.mushrooms) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (state.whiteSauce) {
      oneSauce.classList.add('sauce-white');
    } else {
      oneSauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add('crust-gluten-free');
    } else {
      oneCrust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn-pepperoni').forEach((isActive) => {
    if (state.pepperoni) {
      isActive.classList.add('active');
    } else {
      isActive.classList.remove('active');
    }
  });

  document.querySelectorAll('.btn-mushrooms').forEach((isActive) => {
    if (state.mushrooms) {
      isActive.classList.add('active');
    } else {
      isActive.classList.remove('active');
    }
  });

  document.querySelectorAll('.btn-green-peppers').forEach((isActive) => {
    if (state.greenPeppers) {
      isActive.classList.add('active');
    } else {
      isActive.classList.remove('active');
    }
  });

  document.querySelectorAll('.btn-sauce').forEach((isActive) => {
    if (state.whiteSauce) {
      isActive.classList.add('active');
    } else {
      isActive.classList.remove('active');
    }
  });

  document.querySelectorAll('.btn-crust').forEach((isActive) => {
    if (state.glutenFreeCrust) {
      isActive.classList.add('active');
    } else {
      isActive.classList.remove('active');
    }
  });

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 10;
  if (state.greenPeppers) {
    document.getElementById('green').innerText = '$1 green peppers';
    totalPrice += 1;
  } else {
    document.getElementById('green').innerText = ''
  }
  if (state.pepperoni) {
    document.getElementById('roni').innerText = '$1 pepperoni';
    totalPrice += 1;
  } else {
    document.getElementById('roni').innerText = ''
  }
  if (state.mushrooms) {
    document.getElementById('shrooms').innerText = '$1 mushrooms';
    totalPrice += 1;
  } else {
    document.getElementById('shrooms').innerText = ''
  }
  if (state.whiteSauce) {
    document.getElementById('white').innerText = '$3 white sauce';
    totalPrice += 3;
  } else {
    document.getElementById('white').innerText = ''
  }
  if (state.glutenFreeCrust) {
    document.getElementById('gluten').innerText = '$5 gluten-free crust';
    totalPrice += 1;
  } else {
    document.getElementById('gluten').innerText = ''
  };
  document.getElementById('total-price').innerText = `$${totalPrice}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  console.log(state);
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  console.log(state);
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  console.log(state);
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  console.log(state);
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  console.log(state);
  renderEverything();
});