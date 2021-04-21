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
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenpepper => {
    if (state.greenPeppers) {
      oneGreenpepper.style.visibility = 'visible';
    } else {
      oneGreenpepper.style.visibility = 'hidden';
    }
  });
}


// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

// Not working 
// function renderWhiteSauce() {
//   const putWhiteSauce = document.querySelector('.sauce');
//   if (state.whiteSauce) {
//     putWhiteSauce.classList.add('sauce-White');
//   } else {
//     putWhiteSauce.classList.remove('sauce-White');
//   }
// }


// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

// Not working
// function renderGlutenFreeCrust() {
//   const gluten = document.querySelector('.crust');
//   if (state.glutenFreeCrust) {
//     gluten.classList.add('crust-gluten-free');
//   } else {
//     gluten.classList.remove('crust-gluten-free');
//   }
// }

// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function handleClick(evt) {
  const btn = evt.target;
  btn.classList.toggle("active");
}

function renderButtons() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => (button.onclick = handleClick));
}

// Iteration 4: change the HTML of `<aside class="panel price">`
//not working
//function renderPrice() {
  // if (state.pepperoni) {
  //   pepperoni.price = 1;
  // } else {
  //   onePep.style.visibility = 'hidden';
  // } pepperoni.price = -1
  // if (state.mushrooms) {
  //   oneMushroom.style.visibility = 'visible';
  //   mushrooms.price = 1;
  // } else {
  //   oneMushroom.style.visibility = 'hidden';
  //   mushrooms.price = -1;
  // }
  // if (state.greenPeppers) {
  //   oneGreenpepper.style.visibility = 'visible';
  //   greenPeppers.price = 1;
  // } else {
  //   oneGreenpepper.style.visibility = 'hidden';
  //   greenPeppers.price = -1;
  // }
  // if (state.whiteSauce) {
  //   putWhiteSauce.classList.add('sauce-White');
  //   whiteSauce.price = 3;
  // } else {
  //   putWhiteSauce.classList.remove('sauce-White');
  //   whiteSauce.price = -3;
  // }
  // if (state.glutenFreeCrust) {
  //   gluten.classList.add('crust-gluten-free');
  //   glutenFreeCrust.price = 5;
  // } else {
  //   gluten.classList.remove('crust-gluten-free');
  //   glutenFreeCrust.price = -5;
  // }
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

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

