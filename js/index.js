//// Write your Pizza Builder JavaScript in this file.

//// Constants
const basePrice = 10;
/////Important!!!
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

const pepBtn = document.querySelector('.btn-pepperoni');
const mushBtn = document.querySelector('.btn-mushrooms');
const greenPepBtn = document.querySelector('.btn-green-peppers');
const sauBtn = document.querySelector('.btn-sauce');
const cruBtn = document.querySelector('.btn-crust');

// const pepPrice = ingredients.pepperoni.price;
// const mushPrice = ingredients.mushrooms.price;
// const greenPepPrice = ingredients.greenPeppers.price;
// const sauPrice = ingredients.whiteSauce.price;
// const cruPrice = ingredients.glutenFreeCrust.price;

// const liPep = document.querySelector('aside ul :first-child');
// const liMush = document.querySelector('aside ul :nth-child(2)');
// const liGreenPep = document.querySelector('aside ul :nth-child(3)');
// const liSauce = document.querySelector('aside ul :nth-child(4)');
// const liCrust = document.querySelector('aside ul :last-child');

////////instead of creating everything manually line by line, create an object with all keys (same as the state and ingredient keys)
///////allows me to loop over inner elements later
const elements = {
  pepperoni: document.querySelector('aside ul :first-child'),
  mushrooms: document.querySelector('aside ul :nth-child(2)'),
  greenPeppers: document.querySelector('aside ul :nth-child(3)'),
  whiteSauce: document.querySelector('aside ul :nth-child(4)'),
  glutenFreeCrust: document.querySelector('aside ul :last-child')
};

const totalPriceElement = document.querySelector('aside strong');

//// Initial value of the state (the state values can change over time)
/////Important!!!
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

//// This function takes care of rendering the pizza based on the state
//// This function is triggered once at the beginning and every time the state is changed
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
    // if (state.pepperoni) {
    //   onePep.style.visibility = 'visible';
    // } else {
    //   onePep.style.visibility = 'hidden';
    // }
    state.pepperoni
      ? (onePep.style.visibility = 'visible')
      : (onePep.style.visibility = 'hidden');
  });
}

function renderMushrooms() {
  //// Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    // if (state.mushrooms) {
    //   oneMushroom.style.visibility = 'visible';
    // } else {
    //   oneMushroom.style.visibility = 'hidden';
    // }
    state.mushrooms
      ? (oneMushroom.style.visibility = 'visible')
      : (oneMushroom.style.visibility = 'hidden');
  });
}

function renderGreenPeppers() {
  //// Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    // if (state.greenPeppers) {
    //   onePepper.style.visibility = 'visible';
    // } else {
    //   onePepper.style.visibility = 'hidden';
    // }
    state.greenPeppers
      ? (onePepper.style.visibility = 'visible')
      : (onePepper.style.visibility = 'hidden');
  });
}

function renderWhiteSauce() {
  ////Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  /////////document.querySelector('.sauce').classList.toggle('white-sauce');
  /////This caused the event bubbling////////event.stopPropagation() ?????????
  state.whiteSauce
    ? document.querySelector('.sauce').classList.remove('sauce-white')
    : document.querySelector('.sauce').classList.add('sauce-white');
}

function renderGlutenFreeCrust() {
  ////Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  /////////document.querySelector('.crust').classList.toggle('crust-gluten-free');
  /////This caused the event bubbling////////event.stopPropagation() ?????????
  state.glutenFreeCrust
    ? document.querySelector('.crust').classList.remove('crust-gluten-free')
    : document.querySelector('.crust').classList.add('crust-gluten-free');
}

function renderButtons() {
  //// Iteration 3: add/remove the class "active" of each `<button class="btn">`
  ///////////wanted to do a forEach loop, tried soooo many times but failed in the end/////////

  state.pepperoni
    ? pepBtn.classList.remove('active')
    : pepBtn.classList.add('active');

  state.mushrooms
    ? mushBtn.classList.remove('active')
    : mushBtn.classList.add('active');

  state.greenPeppers
    ? greenPepBtn.classList.remove('active')
    : greenPepBtn.classList.add('active');

  state.whiteSauce
    ? sauBtn.classList.remove('active')
    : sauBtn.classList.add('active');

  state.glutenFreeCrust
    ? cruBtn.classList.remove('active')
    : cruBtn.classList.add('active');
}

function renderPrice() {
  //// Iteration 4: change the HTML of `<aside class="panel price">`

  // state.pepperoni
  //   ? (liPep.innerHTML = `$${pepPrice} pepperoni`)
  //   : (liPep.innerHTML = `$0 pepperoni`);

  // state.mushrooms
  //   ? (liMush.innerHTML = `$${mushPrice} mushrooms`)
  //   : (liMush.innerHTML = `$0 mushrooms`);

  // state.greenPeppers
  //   ? (liGreenPep.innerHTML = `$${greenPepPrice} green peppers`)
  //   : (liGreenPep.innerHTML = `$0 green peppers`);

  // state.whiteSauce
  //   ? (liSauce.innerHTML = `$${sauPrice} white sauce`)
  //   : (liSauce.innerHTML = `$0 white sauce`);

  // state.glutenFreeCrust
  //   ? (liCrust.innerHTML = `$${cruPrice} gluten-free crust`)
  //   : (liCrust.innerHTML = `$0 gluten-free crust`);

  let totalPrice = basePrice;

  //The Object.keys() method returns an array of a given object's own enumerable property names!!!!!!!!
  Object.keys(state).forEach((ingredient) => {
    if (state[ingredient]) {
      /////if true, add price into each ingredient price
      elements[
        ingredient
      ].innerHTML = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      /////if true, add price into total price
      totalPrice += ingredients[ingredient].price;
    } else {
      elements[ingredient].innerHTML = `$0 ${ingredients[ingredient].name}`;
    }
  });

  totalPriceElement.innerHTML = `$${totalPrice}`;
}

renderEverything();

//// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

//// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

//// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
//// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  //event.stopPropagation(); ??????
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
//// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  //event.stopPropagation(); ????????
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
