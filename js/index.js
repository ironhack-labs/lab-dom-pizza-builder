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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (!state.whiteSauce) {
    document.querySelector('.sauce').classList.remove('sauce-white');
  } else {
    document.querySelector('.sauce').classList.add('sauce-white');
  }
  // console.log(
  //   document.querySelector('.sauce').classList.contains('sauce-white')
  // );

  // Solution by Tony:
  // const withSauce = document.querySelector('.sauce');
  // if (!state.whiteSauce) {
  //   withSauce.classList.remove('sauce-white');
  // } else {
  //   withSauce.classList.add('sauce-white');
  // }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustClassList = document.querySelector('.crust').classList;
  if (!state.glutenFreeCrust) {
    crustClassList.remove('crust-gluten-free');
  } else {
    crustClassList.add('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // //
  // //
  // // Get all the buttons that need to be checked:
  // const allButtons = document.querySelectorAll('.btn');
  // //
  // // loop over all the buttons:
  // for (const oneButton of allButtons) {
  //   const buttonText = oneButton.innerText.toLowerCase();
  //   console.log('--- ' + buttonText.toUpperCase() + ' ---');
  //   const buttonClassList = oneButton.classList;
  //   //
  //   // Check which ingredient applies to the current button:
  //   for (const ingredient in ingredients) {
  //     let index = 0;
  //     const ingredientsKeys = Object.keys(ingredients);
  //     const currentIngredient = ingredientsKeys[index];
  //     const ingredientName = ingredients[ingredient].name;
  //     const ingredientNameLC = ingredientName.toLowerCase();
  //     // Get ingredient with same name as buttonText:
  //     if (ingredientNameLC === buttonText) {
  //       console.log(ingredientName + ' ' + ingredientNameLC);
  //       console.log(
  //         currentIngredient + ' is type of: ' + typeof currentIngredient
  //       );
  //       console.log('State: ' + state.currentIngredient);
  //       // Check state of the ingredient:
  //       if (state.currentIngredient) {
  //         buttonClassList.add('active');
  //       } else {
  //         buttonClassList.remove('active');
  //       }
  //     }
  //     index++;
  //     console.log('...');
  //   }
  // }

  // Solution by Tony:
  const withPepperoni = document.querySelector('.btn-pepperoni');
  const withMushRooms = document.querySelector('.btn-mushrooms');
  const withGreenPeppers = document.querySelector('.btn-green-peppers');
  const withSauce = document.querySelector('.btn-sauce');
  const withGfCrust = document.querySelector('.btn-crust');
  // Pepperoni btn
  if (!state.pepperoni) {
    withPepperoni.classList.remove('active');
  } else {
    withPepperoni.classList.add('active');
  }
  //  Mushroom btn
  if (!state.mushrooms) {
    withMushRooms.classList.remove('active');
  } else {
    withMushRooms.classList.add('active');
  }
  // Green Peppers btn
  if (!state.greenPeppers) {
    withGreenPeppers.classList.remove('active');
  } else {
    withGreenPeppers.classList.add('active');
  }
  // Sauce btn
  if (!state.whiteSauce) {
    withSauce.classList.remove('active');
  } else {
    withSauce.classList.add('active');
  }

  // Crust btn
  if (!state.glutenFreeCrust) {
    withGfCrust.classList.remove('active');
  } else {
    withGfCrust.classList.add('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //
  // Get all list items:
  let list = document.querySelector('aside ul');
  let listItems = document.querySelectorAll('aside ul li');
  console.log(listItems);
  //
  // Function to check if ingridient is listed:
  function checkListedElement(elementToCheck) {
    for (const item of listItems) {
      if (item.innerText === elementToCheck) {
        return true;
      } else {
        return false;
      }
    }
  }
  //
  // Pepperoni
  const pepperoniLi = document.createElement('li');
  pepperoniLi.innerHTML = '$1 pepperoni';
  //
  if (state.pepperoni) {
    if (!checkListedElement('$1 pepperoni')) {
      list.appendChild(pepperoniLi);
    }
  } else {
    if (checkListedElement('$1 pepperoni')) {
      list.removeChild(pepperoniLi);
    }
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
