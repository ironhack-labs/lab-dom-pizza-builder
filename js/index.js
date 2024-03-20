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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const alternativeSauce = document.querySelector('.sauce');
  if (!state.whiteSauce) {
    alternativeSauce.classList.remove('sauce-white');
  } else {
    alternativeSauce.classList.add('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  const alternativeCrust = document.querySelector('.crust');
  if (!state.glutenFreeCrust) {
    alternativeCrust.classList.remove('crust-gluten-free');
  } else {
    alternativeCrust.classList.add('crust-gluten-free');
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  // Pepperoni button
  const pepperoniButton = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    pepperoniButton.classList.add('active');
  } else {
    pepperoniButton.classList.remove('active');
  }

  // Mushrooms button
  const mushroomsButton = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    mushroomsButton.classList.add('active');
  } else {
    mushroomsButton.classList.remove('active');
  }

  // Green Peppers button
  const greenPeppersButton = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    greenPeppersButton.classList.add('active');
  } else {
    greenPeppersButton.classList.remove('active');
  }

  // White Sauce button
  const whiteSauceButton = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    whiteSauceButton.classList.add('active');
  } else {
    whiteSauceButton.classList.remove('active');
  }

  // Gluten-free Crust button
  const glutenFreeCrustButton = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    glutenFreeCrustButton.classList.add('active');
  } else {
    glutenFreeCrustButton.classList.remove('active');
  }
}

// function renderButtons() {
//   const allButtons = document.querySelectorAll('.btn');
//   allButtons.forEach((currentButton) => {
//     const ingredientClass = currentButton.classList[1]; // Get the second class of the button
//     if (ingredientClass.includes('active')) {
//       currentButton.classList.add('active');
//     } else {
//       currentButton.classList.remove('active');
//     }
//   });
// }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  function renderPrice() {
    const priceList = document.querySelector('.panel.price ul');
    const totalPrice = document.querySelector('.panel.price strong');

    priceList.innerHTML = '';

    let total = basePrice;

    for (const ingredient in state) {
      if (state[ingredient]) {
        const listItem = document.createElement('li');
        listItem.textContent = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
        priceList.appendChild(listItem);

        total += ingredients[ingredient].price;
      }
    }

    totalPrice.textContent = `$${total}`;
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
