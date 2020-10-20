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
    document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach(oneWhiteSauce => {
    if (state.whiteSauce) {
      oneWhiteSauce.classList.remove('sauce-white')
    } else {
      oneWhiteSauce.classList.add('sauce-white');
    }
  });
};

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneCrust => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.remove('crust-gluten-free')
    } else {
      oneCrust.classList.add('crust-gluten-free');
    }
  });
};


// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  document.querySelectorAll('.btn-pepperoni').forEach(oneBtn => {
    if (state.pepperoni) {
      oneBtn.classList.remove('active')
    } else {
      oneBtn.classList.add('active');
    }
  });

  document.querySelectorAll('.btn-mushrooms').forEach(oneBtn => {
    if (state.mushrooms) {
      oneBtn.classList.remove('active')
    } else {
      oneBtn.classList.add('active');
    }
  });
  document.querySelectorAll('.btn-green-peppers').forEach(oneBtn => {
    if (state.greenPeppers) {
      oneBtn.classList.remove('active')
    } else {
      oneBtn.classList.add('active');
    }
  });
  document.querySelectorAll('.btn-sauce').forEach(oneBtn => {
    if (state.whiteSauce) {
      oneBtn.classList.remove('active')
    } else {
      oneBtn.classList.add('active');
    }
  });
  document.querySelectorAll('.btn-crust').forEach(oneBtn => {
    if (state.glutenFreeCrust) {
      oneBtn.classList.remove('active')
    } else {
      oneBtn.classList.add('active');
    }
  });
};

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  document.querySelectorAll('.panel.price ul li').forEach(li => {
    if (state.pepperoni[0]) {
      li.display = 'display';
    } else {
      oneBtn.classList.add('active');
    }
    console.log(oneBtn);
  });

  



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
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});