
// COPY FROM FRANCIS
// Write your Pizza Builder JavaScript in this file.
// Constants
let $total = document.querySelector('.total');
let $li = document.querySelectorAll('.extra');
let $ul = document.querySelectorAll('.panel ul')[0];
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
  // Iteration 1: set the visibility of `<section class="mushroom">
  document.querySelectorAll('.mushroom').forEach(function($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = 'visible';
    } else {
      $mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($greenPeppers) {
    if (state.greenPeppers) {
      $greenPeppers.style.visibility = 'visible';
    } else {
      $greenPeppers.style.visibility = 'hidden';
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
  document.querySelectorAll('.crust').forEach(function($glutenFreeCrust) {
    if (state.glutenFreeCrust) {
      $glutenFreeCrust.classList.add('crust-gluten-free');
    } else {
      $glutenFreeCrust.classList.remove('crust-gluten-free');
    }
  });
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
    let $buttons = document.querySelectorAll('.btn');
    for (let i = 0; i < $buttons.length; i++) {
      for (let key in ingredients) {
        if (
          ingredients[key].name === $buttons[i].innerHTML &&
          state[key] === true
        ) {
          $buttons[i].classList.toggle('active');
        }
      }
    }
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = basePrice;
  let $li = document.querySelector('aside.panel.price ul');
  $li.innerHTML = '"';
  for (let key in ingredients) {
      if (state[key]) {
        total += ingredients[key].price;
        $li.innerHTML += `<li>$${ingredients[key].price} ${ingredients[key].name.toLowerCase()}</li>`;
      }
    }
  document.querySelector('aside.panel.price strong').innerHTML = '$' + total;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni')
  .addEventListener('click', function() {
    state.pepperonni = !state.pepperonni;

    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function() {
    state.mushrooms = !state.mushrooms;

    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function() {
    state.greenPeppers = !state.greenPeppers;
    
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce;
  
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  
  renderEverything();
});