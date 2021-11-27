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
  document.querySelectorAll('.mushroom').forEach((fungi) => {
    if (state.mushrooms) {
      fungi.style.visibility = 'visible';
    } else {
      fungi.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((greenPe) => {
    if (state.greenPeppers) {
      greenPe.style.visibility = 'visible';
    } else {
      greenPe.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce-white').forEach((wSauce) => {
    if (state.whiteSauce) {
      wSauce.style.visibility = 'visible';
    } else {
      wSauce.style.visibility = 'hidden';
    }
  });
}


function renderGlutenFreeCrust() {
  if(state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  if ( state.pepperoni === true ) {
    document.querySelector('.btn.btn-pepperoni').classList.add('active')
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active')
  }

  if ( state.mushrooms === true ) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active')
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active')
  }

  if ( state.greenPeppers === true ) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active')
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active')
  }

  if ( state.whiteSauce === true ) {
    document.querySelector('.btn.btn-sauce').classList.add('active')
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active')
  }

    if ( state.glutenFreeCrust === true ) {
    document.querySelector('.btn.btn-crust').classList.add('active')
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active')
  }
}

function renderPrice() {
  const selectedIngredients = document.querySelector('.price ul')
  let result = 10;

  // Create li 
  selectedIngredients.innerHTML = ''
  const newIngredients = []
  if ( state.pepperoni === true ) {
    newIngredients.push(`<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`)
    result += ingredients.pepperoni.price
  }
  if ( state.mushrooms === true ) {
    newIngredients.push(`<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`)
    result += ingredients.mushrooms.price
  }
  if ( state.greenPeppers === true ) {
    newIngredients.push(`<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`)
    result += ingredients.greenPeppers.price
  }
  if ( state.whiteSauce === true ) {
    newIngredients.push(`<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`)
    result += ingredients.whiteSauce.price
  }
  if ( state.glutenFreeCrust === true ) {
    newIngredients.push(`<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`)
    result += ingredients.glutenFreeCrust.price
  }

  selectedIngredients.innerHTML = newIngredients.join('')
  document.querySelector('.price strong').innerHTML = `$${result}`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function (event) {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (event) {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (event) {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function (event) {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function (event) {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

