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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGP => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
    } else {
      oneGP.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(whiteSauce => {
    if (state.whiteSauce) {
      whiteSauce.style.visibility = 'visible';
    } else {
      whiteSauce.style.visibility = 'hidden';
    }
  });

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crustGF => {
    if (state.glutenFreeCrust) {
      crustGF.classList.remove('crust-gluten-free')
    } else {
      crustGF.classList.add('crust-gluten-free')
    }
  });

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let btnPep = document.querySelector('.btn.btn-pepperoni')
  let btnMush = document.querySelector('.btn.btn-mushrooms')
  let btnGP = document.querySelector('.btn.btn-green-peppers')
  let btnWS = document.querySelector('.btn.btn-sauce')
  let btnCrust = document.querySelector('.btn.btn-crust')
  
  // Rendering pepperoni button
  if (!state.pepperoni) {
    btnPep.classList.remove('active')
  }
  else if (state.pepperoni) {
    btnPep.classList.add('active')
  }

  // Rendering Mushroom button
  if (!state.mushrooms) {
    btnMush.classList.remove('active')
  }
  else if (state.mushrooms) {
    btnMush.classList.add('active')
  }

  // Rendering Green Pepper button
  if (!state.greenPeppers) {
    btnGP.classList.remove('active')
  }
  else if (state.greenPeppers) {
    btnGP.classList.add('active')
  }

  // Renderin White Sauce button
  if (!state.whiteSauce) {
    btnWS.classList.remove('active')
  }
  else if (state.whiteSauce) {
    btnWS.classList.add('active')
  }

  // Rendering Gluten-Free Crust Button
  if (!state.glutenFreeCrust) {
    btnCrust.classList.remove('active')
  }
  else if (state.glutenFreeCrust) {
    btnCrust.classList.add('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = document.querySelector('#topList')
  let totPrice = document.querySelector('#totPrice')
  let pepElem = document.querySelector('#pepElem')
  let mushElem = document.querySelector('#mushElem')
  let gpElem = document.querySelector('#gpElem')
  let wsElem = document.querySelector('#wsElem')
  let crustElem = document.querySelector('#crustElem')
  let currPrice = 10

  if (!state.pepperoni) {
    pepElem.style.visibility = 'hidden'
  }
  else if (state.pepperoni) {
    pepElem.style.visibility = 'visible'
    currPrice += 1
  }

  if (!state.mushrooms) {
    mushElem.style.visibility = 'hidden'
  }
  else if (state.mushrooms) {
    mushElem.style.visibility = 'visible'
    currPrice += 1
  }

  if (!state.greenPeppers) {
    gpElem.style.visibility = 'hidden'
  }
  else if (state.greenPeppers) {
    gpElem.style.visibility = 'visible'
    currPrice += 1
  }

  if (!state.whiteSauce) {
    wsElem.style.visibility = 'hidden'
  }
  else if (state.whiteSauce) {
    wsElem.style.visibility = 'visible'
    currPrice += 3
  }

  if (!state.glutenFreeCrust) {
    crustElem.style.visibility = 'hidden'
  }
  else if (state.glutenFreeCrust) {
    crustElem.style.visibility = 'visible'
    currPrice += 5
  }

  totPrice.innerHTML = '$' + currPrice

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
