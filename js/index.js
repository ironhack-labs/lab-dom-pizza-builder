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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPapper) => {
    if (state.greenPeppers) {
      oneGreenPapper.style.visibility = 'visible';
    } else {
      oneGreenPapper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    if (state.whiteSauce) {
      document.querySelector('.sauce').classList.add('sauce-white')
    } else{
      document.querySelector('.sauce').classList.remove('sauce-white')
    }
  }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  } else{
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
  
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active')
  } else if (!state.pepperoni){
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }
  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active')
  } else if (!state.mushrooms){
    document.querySelector('.btn-mushrooms').classList.remove('active')
  }
  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active')
  } else if (!state.greenPeppers){
    document.querySelector('.btn-green-peppers').classList.remove('active')
  }
  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active')
  } else if (!state.whiteSauce){
    document.querySelector('.btn-sauce').classList.remove('active')
  }
  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active')
  } else if (!state.glutenFreeCrust){
    document.querySelector('.btn-crust').classList.remove('active')
  }
}


function renderPrice() {
  
  let list = ''
 let price = 10
    if (state.mushrooms) {
      list += `<li>${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`
      price = price + 1
    }
    if (state.pepperoni) {
      list += `<li>${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`
      price = price + 1
    }
    if (state.whiteSauce) {
      list += `<li>${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`
      price = price + 3
    }
    if (state.glutenFreeCrust) {
      list += `<li>${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`
      price = price + 1
    }
    if (state.greenPeppers) {
      list += `<li>${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`
      price = price + 1
    }


  
  document.querySelector('aside.panel ul').innerHTML = list
  document.querySelector('aside.panel.price strong').innerHTML = `$${price}`
}
renderEverything();


  
  

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
