// Write your Pizza Builder JavaScript in this file.

// Constants

//var basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};
// Initial value for the price Tag
//const totalPrice  = basePrice;

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
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
      document.getElementById('pricePepp').hidden = false;
    } else {
      onePep.style.visibility = 'hidden';
      document.getElementById('pricePepp').hidden = true;
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
      document.getElementById('priceMush').hidden = false;
    } else {
      oneMush.style.visibility = 'hidden';
      document.getElementById('priceMush').hidden = true;
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((Onepepper) => {
    if (state.greenPeppers) {
      Onepepper.style.visibility = 'visible';
      document.getElementById('priceGreen').hidden = false;
    } else {
      Onepepper.style.visibility = 'hidden';
      document.getElementById('priceGreen').hidden = true;
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
      document.getElementById('priceWhite').hidden = false;
    } else {
      sauce.style.visibility = 'hidden';
      document.getElementById('priceWhite').hidden = true;
    }
  });
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crumb) => {
    if (state.glutenFreeCrust) {
      crumb.style.visibility = 'visible';
      document.getElementById('priceGluten').hidden = false;
    } else {
      crumb.style.visibility = 'hidden';
      document.getElementById('priceGluten').hidden = true;
    }
  });
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnPepperonni = document.querySelector('.btn.btn-pepperoni')
  const btnMushrooms = document.querySelector('.btn.btn-mushrooms')
  const btnPeppers = document.querySelector(".btn.btn-green-peppers")


  if(state.pepperoni) {
    btnPepperonni.classList.add('active')
  } else {
    btnPepperonni.classList.remove('active')
  }


  if(state.mushrooms) {
    btnMushrooms.classList.add('active')
  } else {
    btnMushrooms.classList.remove('active')
  }

  if(state.greenPeppers) {
    btnPeppers.classList.add('active')
  } else {
    btnPeppers.classList.remove('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const totalPrice = document.querySelector("#priceTag")
  let initalPrice = 10
  if(state.pepperoni) {
    initalPrice += 1
  }
  if(state.mushrooms) {
    initalPrice += 1
  }
  if (state.greenPeppers) {
    initalPrice += 1
  }
  if (state.whiteSauce) {
    initalPrice += 3
  }
  if (state.glutenFreeCrust) {
    initalPrice += 5
  }
  totalPrice.textContent = initalPrice

 
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