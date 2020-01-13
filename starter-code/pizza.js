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
  console.log('functionCalled');
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
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenP) {
    if (state.greenPeppers) {
      $greenP.style.visibility = 'visible';
    } else {
      $greenP.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(function($sauce) {
    if (state.whiteSauce) {
      $sauce.style.visibility = 'visible';
    } else {
      $sauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(function($gluten) {
    if (state.glutenFreeCrust) {
      $gluten.style.visibility = 'visible';
    } else {
      $gluten.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  return document.querySelectorAll('.btn').forEach(function(element, index) {
    let keyArr = Object.keys(state); // ["pepperonni", "mushrooms","greenPeppers", "whiteSauce", "glutenFreeCrust"]

    if (state[keyArr[index]]) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });

  //   if (state.) {
  //     currentTarget.classList.add('active');
  //   } else {
  //     currentTarget.classList.remove('active');
  //   }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  // const price = document.querySelector('.panel price strong');
  const ingredientList = document.querySelector('.price ul');
  ingredientList.innerHTML = '';
  let totalPrice = document.querySelector('.price strong');
  totalPrice.innerHTML = '';
  // totalPrice = parseInt(totalPrice);
  console.log(totalPrice);
  let keyArr = Object.keys(state); // ["pepperonni", "mushrooms","greenPeppers", "whiteSauce", "glutenFreeCrust"]

  // console.log(document.querySelectorAll('.btn'));
  return document.querySelectorAll('.btn').forEach(function(element, index) {
    if (state[keyArr[index]]) {
      console.log(ingredients[keyArr[index]].price);
      let li = document.createElement('li');
      li.innerHTML = `$${ingredients[keyArr[index]].price} ${ingredients[keyArr[index]].name}`;
      ingredientList.appendChild(li);
      totalPrice.innerHTML = `$${ingredients[keyArr[index]].price + ingredients[keyArr[index]].price + basePrice}`;
    }
  });
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
