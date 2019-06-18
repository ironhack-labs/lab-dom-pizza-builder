// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: false,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: true
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers){
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = "visible";
    }
    else {
      $greenPeppers.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($whiteSauce){
    if (state.whiteSauce) {
      $whiteSauce.style.visibility = "visible";
    }
    else {
      $whiteSauce.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($glutenFreeCrust){
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.style.visibility = "visible";
    }
    else {
      $glutenFreeCrust.style.visibility = "hidden";
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const activeButtonPep = document.getElementsByClassName('btn-pepperonni')
  if (state.pepperonni) {
    activeButtonPep[0].setAttribute('class', 'active btn btn-pepperonni');
  } else {
    activeButtonPep[0].setAttribute('class', 'btn btn-pepperonni')
  }
  const activeButtonMushroom = document.getElementsByClassName('btn-mushrooms')
  if (state.mushrooms) {
    activeButtonMushroom[0].setAttribute('class', 'active btn btn-mushrooms')
  } else {
    activeButtonMushroom[0].setAttribute('class', 'btn btn-mushrooms')
  }
  const activeButtonGreenPep = document.getElementsByClassName('btn-green-peppers')
  if (state.greenPeppers) {
    activeButtonGreenPep[0].setAttribute('class', 'active btn btn-green-peppers')
  } else {
    activeButtonGreenPep[0].setAttribute('class', 'btn btn-green-peppers')
  }
  const activeButtonWhiteSauce = document.getElementsByClassName('btn-sauce')
  if (state.whiteSauce) {
    activeButtonWhiteSauce[0].setAttribute('class', 'active btn btn-sauce')
  } else {
    activeButtonWhiteSauce[0].setAttribute('class', 'btn btn-sauce')
  }
  const activeButtonGFC = document.getElementsByClassName('btn-crust')
  if (state.glutenFreeCrust) {
    activeButtonGFC[0].setAttribute('class', 'active btn btn-crust')
  } else {
    activeButtonGFC[0].setAttribute('class', 'btn btn-crust')
  }
}

function renderPrice() {
  // // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = 10;
  const list = document.getElementsByClassName('panel price');
  list[0].innerHTML = '';
  const h2 = document.createElement('h2');
  h2.innerHTML = `Your pizza's price`;
  const bTag = document.createElement('b');
  bTag.innerHTML = `$10 cheese pizza`;
  list[0].appendChild(h2);
  list[0].appendChild(bTag);
  const newUl = document.createElement('ul');
  newUl.innerHTML = ``;
  if (state.pepperonni) {
    const liPep = document.createElement('li');
    liPep.innerHTML = `${ingredients.pepperonni.price} ${ingredients.pepperonni.name}`;
    newUl.appendChild(liPep);
    price += ingredients.pepperonni.price;
  } 
  if (state.greenPeppers) {
    const liPep = document.createElement('li');
    liPep.innerHTML = `${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
    newUl.appendChild(liPep);
    price += ingredients.greenPeppers.price;
  }
  if (state.mushrooms) {
    const liPep = document.createElement('li');
    liPep.innerHTML = `${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
    newUl.appendChild(liPep);
    price += ingredients.mushrooms.price;
  }
  if (state.whiteSauce) {
    const liPep = document.createElement('li');
    liPep.innerHTML = `${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
    newUl.appendChild(liPep);
    price += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    const liPep = document.createElement('li');
    liPep.innerHTML = `${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
    newUl.appendChild(liPep);
    price += ingredients.glutenFreeCrust.price;
  }
  list[0].appendChild(newUl);
  const strong = document.createElement('strong');
  strong.innerHTML = `$${price}`;
  list[0].appendChild(strong);
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}