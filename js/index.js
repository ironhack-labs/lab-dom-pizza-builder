// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
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
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.setAttribute('class', 'sauce sauce-white');
  } else {
    sauce.setAttribute('class', 'sauce');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.setAttribute('class', 'crust crust-gluten-free');
  } else {
    crust.setAttribute('class', 'crust');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnPepperoni = document.querySelector('.btn-pepperoni');
  const btnMushrooms = document.querySelector('.btn-mushrooms');
  const btnGreenPeppers = document.querySelector('.btn-green-peppers');
  const btnSauce = document.querySelector('.btn-sauce');
  const btnCrust = document.querySelector('.btn-crust');

  if (state.pepperoni) {
    btnPepperoni.setAttribute('class', 'btn btn-pepperoni active');
  } else {
    btnPepperoni.setAttribute('class', 'btn btn-pepperoni');
  }
  if (state.mushrooms) {
    btnMushrooms.setAttribute('class', 'btn btn-mushrooms active');
  } else {
    btnMushrooms.setAttribute('class', 'btn btn-mushrooms');
  }
  if (state.greenPeppers) {
    btnGreenPeppers.setAttribute('class', 'btn btn-green-peppers active');
  } else {
    btnGreenPeppers.setAttribute('class', 'btn btn-green-peppers');
  }
  if (state.whiteSauce) {
    btnSauce.setAttribute('class', 'btn btn-sauce active');
  } else {
    btnSauce.setAttribute('class', 'btn btn-sauce');
  }
  if (state.glutenFreeCrust) {
    btnCrust.setAttribute('class', 'btn btn-crust active');
  } else {
    btnCrust.setAttribute('class', 'btn btn-crust');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  let priceIngredientsLi = '';

  for (const ingredient in ingredients){
    if (state[ingredient]){
      priceIngredientsLi +=
      `<li>$${ingredients[ingredient].name} $${ingredients[ingredient].price}</li>`;

      totalPrice += ingredients[ingredient].price
    }
  }
  const pricePanelHtml = 
    `
    <h2>Your pizza's price</h2>
    <b>$${basePrice} cheese pizza</b>
    <ul>
      ${priceIngredientsLi}
    </ul>
    <strong>$${totalPrice}</strong>
    `
    ;
    document.querySelector('.panel.price').innerHTML = pricePanelHtml;

}

renderEverything();

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