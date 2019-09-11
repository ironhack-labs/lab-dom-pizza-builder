// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
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
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenpep) {
    if (state.greenPeppers) {
      $greenpep.style.visibility = 'visible';
    } else {
      $greenpep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($sauce) {
    if (state.whiteSauce) {
      $sauce.style.visibility = 'visible';
    } else {
      $sauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($crust) {
    // let crust = getElementsByClassName('.crust')
    if (state.glutenFreeCrust) {
      // $crust.style.visibility = 'visible';
      $crust.classList.add('crust-gluten-free');
    } else {
      // $crust.style.visibility = 'hidden';
      $crust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pep = document.querySelector('.btn.btn-pepperonni');
  if (state.pepperonni) {
    pep.classList.remove('active');
  } else {
    pep.classList.add('active');
  }

  const mush = document.querySelector('.btn.btn-mushrooms');
  if (state.mushrooms) {
    mush.classList.remove('active');
  } else {
    mush.classList.add('active');
  }

  const greenP = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    greenP.classList.remove('active');
  } else {
    greenP.classList.add('active');
  }

  const whiteSauce = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    whiteSauce.classList.remove('active');
  } else {
    whiteSauce.classList.add('active');
  }

  const crust = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    crust.classList.remove('active');
  } else {
    crust.classList.add('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const list = document.getElementsByTagName('ul')[1];
  list.innerHTML = '';
  let count = 10;
  if (state.pepperonni) {
    list.innerHTML += `<li>$1 pepperonni</li>`;
    count += 1;
  }
  if (state.mushrooms) {
    list.innerHTML += `<li>$1 mushrooms</li>`;
    count += 1;
  }
  if (state.greenPeppers) {
    list.innerHTML += `<li>$1 green peppers</li>`;
    count += 1;
  }
  if (state.whiteSauce) {
    list.innerHTML += `<li>$3 white sauce</li>`;
    count += 3;
  }
  if (state.glutenFreeCrust) {
    list.innerHTML += `<li>$5 gluten-free crust</li>`;
    count += 5;
  }
  const price = document.getElementsByTagName('strong')[0];
  price.innerHTML = `$${count}`;
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
