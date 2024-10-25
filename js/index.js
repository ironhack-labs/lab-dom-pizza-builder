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
      sauce.classList.add('sauce-white');
    } else {
      sauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free');
    } else {
      crust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((button) => {
    const activeClass = 'active';
    const name = button.dataset.stateName;

    if (state[name]) button.classList.add(activeClass);
    if (!state[name]) button.classList.remove(activeClass);
  });
}

// function renderPrice() {
//   // Iteration 4: change the HTML of `<aside class="panel price">`
//   const priceTagTotal = document.querySelector('#total-price');

//   const priceTotal = [...Object.keys(ingredients)].reduce(
//     (sum, key) => (sum += state[key] ? ingredients[key].price : 0),
//     10
//   );

//   priceTagTotal.textContent = asCurrency(priceTotal);

//   // Query Selectors for price list
//   const priceTagPepperoni = document.querySelector('#price-tag-pepperoni');
//   const priceTagMushrooms = document.querySelector('#price-tag-mushrooms');
//   const priceTagGreenPeppers = document.querySelector(
//     '#price-tag-green-peppers'
//   );
//   const priceTagSauce = document.querySelector('#price-tag-sauce');
//   const priceTagCrust = document.querySelector('#price-tag-crust');

//   document.querySelectorAll('.panel.price ul li').forEach((li) => {
//     const key = li.dataset.stateName;

//     switch (key) {
//       case 'pepperoni':
//       case 'mushrooms':
//       case 'greenPeppers':
//         if (state[key]) li.classList.add('show');
//         if (!state[key]) li.classList.remove('show');
//         break;
//       case 'whiteSauce':
//         if (state[key]) li.classList.add('sauce-white');
//         if (!state[key]) li.classList.remove('sauce-white');
//         break;
//       case 'glutenFreeCrust':
//         if (state[key]) li.classList.add('crust-gluten-free');
//         if (!state[key]) li.classList.remove('crust-gluten-free');
//         break;

//       default:
//         break;
//     }
//   });

// function asCurrency(number) {
//   return number.toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     maximumFractionDigits: 0
//   });
// }}

// Lab solution
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;

  let priceIngredientLi = '';

  for (const ingredient in ingredients) {
    if (state[ingredient]) {
      priceIngredientLi += `
          <li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>
        `;
      totalPrice += ingredients[ingredient].price;
    }
  }

  const pricePanelHTML = `
      <h2>Your Pizza's price</h2>
      <b>$${basePrice} cheese pizza</b>
      <ul>
        ${priceIngredientLi}
      </ul>
      <strong>$ ${totalPrice}</strong>
    `;

  document.querySelector('.panel.price').innerHTML = pricePanelHTML;
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
