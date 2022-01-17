// Write your Pizza Builder JavaScript in this file.
let btnClickedClassName;
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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible'
    } else {
      oneMushroom.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible'
    } else {
      oneGreenPepper.style.visibility = 'hidden'
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce')
  if (!state.whiteSauce) {
    sauce.classList.remove('sauce-white')
  } else {
    sauce.classList.add('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust')
  if (!state.glutenFreeCrust) {
    crust.classList.remove('crust-gluten-free')
  } else {
    crust.classList.add('crust-gluten-free')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepBtn = document.querySelector('.btn.btn-pepperoni')
  const mushBtn = document.querySelector('.btn.btn-mushrooms')
  const greenPeppersBtn = document.querySelector('.btn.btn-green-peppers')
  const sauceBtn = document.querySelector('.btn.btn-sauce')
  const crustBtn = document.querySelector('.btn.btn-crust')


  if (state.pepperoni) {
    pepBtn.classList.add('active')
  } else {
    pepBtn.classList.remove('active')
  }
  if (state.mushrooms) {
    mushBtn.classList.add('active')
  } else {
    mushBtn.classList.remove('active')
  }
  if (state.greenPeppers) {
    greenPeppersBtn.classList.add('active')
  } else {
    greenPeppersBtn.classList.remove('active')
  }
  if (state.whiteSauce) {
    sauceBtn.classList.add('active')
  } else {
    sauceBtn.classList.remove('active')
  }
  if (state.glutenFreeCrust) {
    crustBtn.classList.add('active')
  } else {
    crustBtn.classList.remove('active')
  }
}




function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const pepLi = document.querySelector('body > aside > ul > li:nth-child(1)')
  const mushLi = document.querySelector('body > aside > ul > li:nth-child(2)')
  const greenPeppersLi = document.querySelector('body > aside > ul > li:nth-child(3)')
  const sauceLi = document.querySelector('body > aside > ul > li:nth-child(4)')
  const crustLi = document.querySelector('body > aside > ul > li:nth-child(5)')
  const totalPrice = document.querySelector('body > aside > strong')
  let totalIngredientsPrice = 0

  if (state.pepperoni) {
    pepLi.style.display = 'block'
    pepLi.innerHTML = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
    totalIngredientsPrice += ingredients.pepperoni.price
  } else {
    pepLi.style.display = 'none'
  }
  if (state.mushrooms) {
    mushLi.style.display = 'block'
    mushLi.innerHTML = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
    totalIngredientsPrice += ingredients.mushrooms.price
  } else {
    mushLi.style.display = 'none'
  }
  if (state.greenPeppers) {
    greenPeppersLi.style.display = 'block'
    greenPeppersLi.innerHTML = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
    totalIngredientsPrice += ingredients.greenPeppers.price
  } else {
    greenPeppersLi.style.display = 'none'
  }
  if (state.whiteSauce) {
    sauceLi.style.display = 'block'
    sauceLi.innerHTML = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
    totalIngredientsPrice += ingredients.whiteSauce.price
  } else {
    sauceLi.style.display = 'none'
  }
  if (state.glutenFreeCrust) {
    crustLi.style.display = 'block'
    crustLi.innerHTML = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`
    totalIngredientsPrice += ingredients.glutenFreeCrust.price
  } else {
    crustLi.style.display = 'none'
  }
  totalPrice.innerText = `$${basePrice + totalIngredientsPrice}`
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})