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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });

  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const whiteSauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    whiteSauce.style.visibility = 'visible';
  } else {
    whiteSauce.style.visibility = 'hidden';
  }
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  if (!state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.remove('active');
  } else {
    document.querySelector('.btn-pepperoni').classList.add('active');
  }

  if (!state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.remove('active');
  } else {
    document.querySelector('.btn-mushrooms').classList.add('active');
  }

  if (!state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.remove('active');
  } else {
    document.querySelector('.btn-green-peppers').classList.add('active');
  }

  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn-sauce').classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn-crust').classList.remove('active');
  }
}

function renderPrice() {
  // changing the element to hidden
  // doesn't remove the space from the list.
  // trying display none instead.

  // switch visibility
  state.pepperoni
    ? (document.querySelector('.cart-pepperoni').style.display = 'block')
    : (document.querySelector('.cart-pepperoni').style.display = 'none');
  state.mushrooms
    ? (document.querySelector('.cart-mushrooms').style.display = 'block')
    : (document.querySelector('.cart-mushrooms').style.display = 'none');
  state.greenPeppers
    ? (document.querySelector('.cart-green-peppers').style.display = 'block')
    : (document.querySelector('.cart-green-peppers').style.display = 'none');
  state.whiteSauce
    ? (document.querySelector('.cart-sauce').style.display = 'block')
    : (document.querySelector('.cart-sauce').style.display = 'none');
  state.glutenFreeCrust
    ? (document.querySelector('.cart-crust').style.display = 'block')
    : (document.querySelector('.cart-crust').style.display = 'none');

  let list = document.querySelectorAll('#cart li');
  let visibleCart = [];

  // Put all the visible prices in array

  list.forEach((el) => {
    el.style.display === 'block' ? visibleCart.push(el.innerText[1]) : null;
  });

  // Sum the array

  let price = visibleCart.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);

  return (document.querySelector('aside strong').innerText = `$${price + 10}`);

  // switch (ingredient) {
  //   case 'pepperoni':
  //     let li = document.createElement('li');
  //     li.appendChild(document.createTextNode('$1 pepperoni'));
  //     li.classList = 'cart-pepperoni';

  //     document.querySelector('.cart-pepperoni')
  //       ? document.querySelector('.cart-pepperoni').remove()
  //       : ingredientsUL.appendChild(li);
  //     break;
  //   case 'sauce':
  //     // let li = document.createElement('li');
  //     // li.appendChild(document.createTextNode('$3 white sauce'));
  //     // li.classList = 'cart-sauce';

  //     document.querySelector('.cart-sauce')
  //       ? document.querySelector('.cart-sauce').remove()
  //       : ingredientsUL.appendChild(li);
  //     break;

  //   default:
  //     break;
  // }

  // true check
  // let pepperoniOnList = document.querySelector('.ingredient-pepperoni');
  // let mushroomsOnList = document.querySelector('.ingredient-mushrooms');
  // let greenPepOnList = document.querySelector('.ingredient-greenPeppers');
  // let sauceOnList = document.querySelector('.ingredient-whiteSauce');
  // let crustOnList = document.querySelector('.ingredient-glutenFreeCrust');
  //
  // if (state.pepperoni && !pepperoniOnList) {
  //   let li = document.createElement('li');
  //   li.appendChild(document.createTextNode('$1 pepperoni'));
  //   li.classList = 'ingredient-pepperoni';
  //   ingredientsUL.appendChild(li);
  // } else {
  //   pepperoniOnList
  //     ? document.querySelector('.ingredient-pepperoni').remove()
  //     : null;
  // }

  // if (state.mushrooms && !mushroomsOnList) {
  //   let li = document.createElement('li');
  //   li.appendChild(document.createTextNode('$1 mushrooms'));
  //   li.classList = 'ingredient-mushrooms';
  //   ingredientsUL.appendChild(li);
  // } else {
  //   document.querySelector('.ingredient-mushrooms').remove();
  // }

  // if (state.greenPeppers && !greenPepOnList) {
  //   let li = document.createElement('li');
  //   li.appendChild(document.createTextNode('$1 green pepper'));
  //   li.classList = 'ingredient-greenPeppers';
  //   ingredientsUL.appendChild(li);
  // } else {
  //   document.querySelector('.ingredient-greenPeppers').remove();
  // }

  // if (state.whiteSauce && !sauceOnList) {
  //   let li = document.createElement('li');
  //   li.appendChild(document.createTextNode('$3 white sauce'));
  //   li.classList = 'ingredient-whiteSauce';
  //   ingredientsUL.appendChild(li);
  // } else if (sauceOnList) {
  //   document.querySelector('.ingredient-whiteSauce').remove();
  // }

  // if (state.glutenFreeCrust && !crustOnList) {
  //   let li = document.createElement('li');
  //   li.appendChild(document.createTextNode('$5 gluten-free crust'));
  //   li.classList = 'ingredient-glutenFreeCrust';
  //   ingredientsUL.appendChild(li);
  // } else if (crustOnList) {
  //   document.querySelector('.ingredient-glutenFreeCrust').remove();
  // }

  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderPrice('pepperoni');
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
