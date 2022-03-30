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
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function (oneMushroom) {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function (oneGreenPepper) {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceWhite = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceWhite.classList.add('sauce-white');
  }
  else {
    sauceWhite.classList.remove('sauce-white');
  }
  }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let glFree = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    glFree.classList.add('crust-gluten-free');
  }
  else {
    glFree.classList.remove('crust-gluten-free');
  }
}
const classFor = {
  pepperoni: '.btn-pepperoni',
  mushrooms: '.btn-mushrooms',
  greenPeppers: '.btn-green-peppers',
  whiteSauce: '.btn-sauce',
  glutenFreeCrust: '.btn-crust'
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // for (let ingredient in state) {
  // const button = document.querySelector(classFor[ingredient]);
  // if (state[ingredient]){
  //   button.classList.add('active')
  // }
  // else {
  //   button.classList.remove('active')
  // }
  // }

  //'.btn-' + ingredient from the state
  // if (state.pepperonni) {
  //   document.querySelector('.btn-pepperoni').classList.add('active')
  // } else {
  //   document.querySelector('.btn-pepperoni').classList.remove('active')
  // }


  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active')
  }
  else {
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }
  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active')
  }
  else {
    document.querySelector('.btn-mushrooms').classList.remove('active')
  }
  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active')
  }
  else {
    document.querySelector('.btn-green-peppers').classList.remove('active')
  }
  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active')
  }
  else {
    document.querySelector('.btn-sauce').classList.remove('active')
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active')
  }
  else {
    document.querySelector('.btn-crust').classList.remove('active')
  }
  //console.log(state.whiteSauce);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = '';
  let price = basePrice;
  for (let ingredient in state) {
    if (state[ingredient]) {
      list += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
      price += ingredients[ingredient].price
    }
  }

  document.querySelector('.panel.price ul').innerHTML = list;
  document.querySelector('.panel.price strong').innerText = '$ ' + price;
}
renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('cick', function() {
  state.whiteSauce = !state.whiteSauce;
  console.log('click')
  renderEverything()
})


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('cick', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
})