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
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneShroom => {
    if (state.mushrooms) {
      oneShroom.style.visibility = 'visible';
    } else {
      oneShroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
    if (state.pepperoni) {
      document.querySelector('.btn.btn-pepperoni').classList.add('active');
    } else {
      document.querySelector('.btn.btn-pepperoni').classList.remove('active');
    }
    if (state.mushrooms) {
      document.querySelector('.btn.btn-mushrooms').classList.add('active');
    } else {
      document.querySelector('.btn.btn-mushrooms').classList.remove('active');
    }
    if (state.greenPeppers) {
      document.querySelector('.btn.btn-green-peppers').classList.add('active');
    } else {
      document.querySelector('.btn.btn-green-peppers').classList.remove('active');
    }
    if (state.whiteSauce) {
      document.querySelector('.btn.btn-sauce').classList.add('active');
    } else {
      document.querySelector('.btn.btn-sauce').classList.remove('active');
    }
    if (state.glutenFreeCrust) {
      document.querySelector('.btn.btn-crust').classList.add('active');
    } else {
      document.querySelector('.btn.btn-crust').classList.remove('active');
    }
}

function renderPrice() {
  let sumOfPrice = basePrice;
  let priceList = "";
  if (state.pepperoni) {
    priceList += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    sumOfPrice += ingredients.pepperoni.price;
  } 
  if (state.mushrooms) {
    priceList += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    sumOfPrice += ingredients.mushrooms.price;
  } 
  if (state.greenPeppers) {
    priceList += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    sumOfPrice += ingredients.greenPeppers.price;
  } 
  if (state.whiteSauce) {
    priceList += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    sumOfPrice += ingredients.whiteSauce.price;
  } 
  if (state.glutenFreeCrust) {
    priceList += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    sumOfPrice += ingredients.glutenFreeCrust.price;
  } 
  document.querySelector('.panel.price ul').innerHTML = priceList;
  document.querySelector('strong').innerHTML = `$${sumOfPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});