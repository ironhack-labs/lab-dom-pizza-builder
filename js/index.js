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

// Abstraction Method
// function renderDisappearingToppings(selector, toppingState) {
//   document.querySelectorAll(selector).forEach(oneDisappearingObject => {
//     if (state[toppingState]) {
//       oneDisappearingObject.style.visibility = 'visible';
//     } else {
//       oneDisappearingObject.style.visibility = 'hidden';
//     }
//   });
// }

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });

  // Abstraction Method
  // renderDisappearingToppings('.pep', 'pepperoni');
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneShroom => {
    if (state.mushrooms) {
      oneShroom.style.visibility = 'visible';
    } else {
      oneShroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGP => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
    } else {
      oneGP.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white')
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white')
  };
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  };
}

// let legend = {
//   'btn-pepperoni': 'pepperoni',
//   'btn-mushrooms': 'mushrooms',
//   'btn-greenPeppers': 'greenPeppers',
//   'btn-whiteSauce': 'whiteSauce',
//   'btn-glutenFreeCrust': 'glutenFreeCrust'
// };

// document.querySelectorAll('.btn').forEach(eachButton) => {
  //   let buttonClass = eachButton.classList[1];
  //   let stateKeyName = legend[buttonClass];

  //   if(state.thisParticularButton) {
  //     eachButton.classList.add('active')
  //   } else {
  //     eachButton.classList.remove('active');
  //   }
  // }

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni){
    document.querySelector('.btn.btn-pepperoni').classList.add('active')
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active')
  };
  if (state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').classList.add('active')
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active')
  };
  if (state.greenPeppers){
    document.querySelector('.btn.btn-green-peppers').classList.add('active')
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active')
  };
  if (state.whiteSauce){
    document.querySelector('.btn.btn-sauce').classList.add('active')
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active')
  };
  if (state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').classList.add('active')
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active')
  };
}
  

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let theList = document.querySelector('.price ul');
  theList.innerHTML = '';
  Object.keys(state).forEach((eachStateKey) => {
    if(state[eachStateKey]) {
    let newItem = document.createElement('li');
    newItem.innerHTML = '$' + ingredients[eachStateKey].price;
    newItem.innerHTML += ' ' + ingredients[eachStateKey].name;
      theList.append(newItem);
    }
  })

  document.querySelector('aside strong').innerText = `$${calculateTotal()}`;
}

function calculateTotal() {
  let newPrice = 10;
  Object.keys(state).forEach((eachStateKey) => {
    if(state[eachStateKey]) {
      newPrice += ingredients[eachStateKey].price;
    }
  })
  return newPrice;
}

renderEverything();

// Abrstaction Method
// function addClickListener(selector, stateTopping) {
//   document.querySelector(selector).addEventListener('click', () => {
//     state.stateTopping = !state.stateTopping;
//     renderEverything();
// }

// addClickListener('.btn.btn-pepperoni', 'pepperoni');
// addClickListener('.btn.btn-mushrooms', 'mushrooms');
// addClickListener('.btn.btn-green-peppers', 'greenPeppers');
// addClickListener('.btn.btn-sauce', 'whiteSauce');
// addClickListener('.btn.btn-crust', 'glutenFreeCrust');

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