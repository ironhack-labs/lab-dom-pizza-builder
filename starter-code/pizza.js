// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 },
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

var classMatchState = {
  pepperonni: 'btn-pepperonni',
  mushrooms: 'btn-mushrooms',
  greenPeppers: 'btn-green-peppers',
  whiteSauce: 'btn-sauce',
  glutenFreeCrust: 'btn-crust',
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mush) {
    if (state.mushrooms) {
      $mush.style.visibility = 'visible';
    } else {
      $mush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">
  document.querySelectorAll('.green-pepper').forEach(function($greenPep) {
    if (state.greenPeppers) {
      $greenPep.style.visibility = 'visible';
    } else {
      $greenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sauce) {
    if (state.whiteSauce) {
      $sauce.classList.add('sauce-white');
    } else {
      $sauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  document.querySelectorAll('.crust').forEach(function($crust) {
    if (state.glutenFreeCrust) {
      $crust.classList.add('crust-gluten-free');
    } else {
      $crust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  /* var state = {
    pepperonni: true,
    mushrooms: true,
    greenPeppers: true,
    whiteSauce: false,
    glutenFreeCrust: false,
  }; */

  //go through every state key (Object.key)

  Object.keys(state).forEach((item) => {
    // check the state
    // console.log(item, state[item], classMatchState[item]);
    //select button
    let btn = document.querySelector('.' + classMatchState[item]);
    // console.log(btn);

    //if state of item is true, than
    if (state[item]) {
      //add active
      btn.classList.add('active');
    } else {
      //remove active
      btn.classList.remove('active');
    }
  });
}
const showOrHidePriceElement = (listElement, show) => {
  document.querySelectorAll('.panel.price > ul > li').forEach((element) => {
    if (
      element.innerHTML.indexOf(ingredients[listElement].name.toLowerCase()) !==
      -1
    ) {
      // console.log(element.style.visibility);
      element.style.visibility = show ? 'visible' : 'hidden';
    }
  });
};

function renderPrice() {
  

  const sumPriceElement = document.querySelector('.panel.price > strong');
  // console.log(sumPriceElement);
  let sumPrice = basePrice;

  Object.keys(state).forEach((ingredient) => {
    //check every ingredient if its true

    if (state[ingredient]) {
      // add ingredient price to base price
      sumPrice += ingredients[ingredient].price;

      showOrHidePriceElement(ingredient, true);
    } else {
      showOrHidePriceElement(ingredient, false);
    }
  });

  // rewrite priceElement
  sumPriceElement.innerHTML = sumPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
