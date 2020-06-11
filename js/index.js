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

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(function (pep) {
    if (state.pepperoni) {
      pep.style.visibility = 'visible';
    } else {
      pep.style.visibility = 'hidden';
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class='mushroom'>`
  document.querySelectorAll('.mushroom').forEach(function (mush) {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers(event) {
  // Iteration 1: set the visibility of `<section class='green-pepper'>`
  document.querySelectorAll('.green-pepper').forEach(function (gp) {
    if (state.greenPeppers) {
      gp.style.visibility = 'visible';
    } else {
      gp.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class 'sauce-white' of `<section class='sauce'>`
  document.querySelectorAll('.sauce').forEach(function (sauce) {
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white');
    } else {
      sauce.classList.remove('sauce-white');
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class 'crust-gluten-free' of `<section class='crust'>`
  document.querySelectorAll('.crust').forEach(function (crust) {
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free');
    } else {
      crust.classList.remove('crust-gluten-free');
    }
  })
}

function renderButtons() {
  var ingArr = Object.keys(state);
  document.querySelectorAll(".btn").forEach(function (item, index) {
    console.log(ingArr);
    console.log(ingArr[index]);
    if (state[ingArr[index]]) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class='panel price'>`
  let list = '';
  let price = basePrice;
  for (let ingredient in state) {
    if (state[ingredient]) {
      list += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
      price += ingredients[ingredient].price;
    }
  }
  document.querySelector('.panel.price ul').innerHTML = list;
  document.querySelector('.panel.price strong').innerText = `$${price}`;
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class='btn btn-pepperonni'>`
document.querySelector('.btn.btn-pepperoni').onclick = function () {
  state.pepperoni = !state.pepperoni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class='btn btn-mushrooms'>`

document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class='btn btn-green-peppers'>`

document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class='btn btn-sauce'>`

document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class='btn btn-crust'>`

document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}
