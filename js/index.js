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
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  //console.log(sauce)
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white')
    } else {
      sauce.classList.remove('sauce-white')
    }
};

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  //console.log(crust)
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free')
    } else {
      crust.classList.remove('crust-gluten-free')
    }
};

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  //console.log(document.querySelector('.btn.btn-pepperoni'))
  
  if(state.pepperoni === true)
    document.querySelector('.btn.btn-pepperoni').classList.add('active')
  else
    document.querySelector('.btn.btn-pepperoni').classList.remove('active')

  if(state.mushrooms === true)
    document.querySelector('.btn.btn-mushrooms').classList.add('active')
  else
    document.querySelector('.btn.btn-mushrooms').classList.remove('active')

  if(state.greenPeppers === true)
    document.querySelector('.btn.btn-green-peppers').classList.add('active')
  else
    document.querySelector('.btn.btn-green-peppers').classList.remove('active')

  if(state.whiteSauce === true)
    document.querySelector('.btn.btn-sauce').classList.add('active')
  else
    document.querySelector('.btn.btn-sauce').classList.remove('active')

  if(state.glutenFreeCrust === true)
    document.querySelector('.btn.btn-crust').classList.add('active')
  else
    document.querySelector('.btn.btn-crust').classList.remove('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
  let price = 10; 

  const list = document.querySelector('body > aside > ul');
  list.innerHTML = '';
  const totalPrice = document.querySelector('body > aside > strong');
  if (state.pepperoni) {
    list.innerHTML += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    price += ingredients.pepperoni.price;
  }
  if (state.mushrooms) {
    list.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    price += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    list.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    price += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    list.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    price += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    list.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    price += ingredients.glutenFreeCrust.price;
  }
  totalPrice.innerHTML = `$${price}`;
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
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
