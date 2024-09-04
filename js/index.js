// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 0;
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
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crustGluten) => {
    if (state.glutenFreeCrust) {
      crustGluten.style.visibility = 'visible';
    } else {
      crustGluten.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {

  const btnPepperoni = document.querySelector('.btn.btn-pepperoni');
  if (state.pepperoni) {
    btnPepperoni.classList.add('active');
  } else {
    btnPepperoni.classList.remove('active');
  }

  const btnMushrooms = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    btnMushrooms.classList.add('active');
  } else {
    btnMushrooms.classList.remove('active');
  }

  const btnGreenPeppers = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    btnGreenPeppers.classList.add('active');
  } else {
    btnGreenPeppers.classList.remove('active');
  }

  const btnSauce = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    btnSauce.classList.add('active');
  } else {
    btnSauce.classList.remove('active');
  }

  const btnCrust = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    btnCrust.classList.add('active');
  } else {
    btnCrust.classList.remove('active');
  }
}

function renderPrice() {
  // Get the price list container and the total price element
  const priceList = document.querySelector('.panel.price ul');
  const totalPriceElement = document.querySelector('.panel.price strong');
  const titleElement = document.querySelector('.panel.price b')

  // Start with the base price
  let totalPrice = basePrice;

  // Clear the price list
  priceList.innerHTML = '';

  // Loop over each ingredient in the state and add the respective item to the price list if it's selected
  for (const ingredientKey in state) {
    if (state[ingredientKey]) {
      // Add the ingredient's price to the total
      totalPrice += ingredients[ingredientKey].price;

      // Create a list item for this ingredient and append it to the price list
      const listItem = document.createElement('li');
      listItem.innerText = `$${ingredients[ingredientKey].price} ${ingredients[ingredientKey].name}`;
      priceList.appendChild(listItem);
    }
  }


  titleElement.innerText = `$${totalPrice} cheese pizza`
  totalPriceElement.innerText = `$${totalPrice}`

}



// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
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

renderEverything();