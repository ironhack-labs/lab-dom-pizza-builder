// Write your Pizza Builder JavaScript in this file.

// Constants
let btnPep = document.querySelector('.btn.btn-pepperoni');
let btnMush = document.querySelector('.btn.btn-mushrooms');
let btnGP = document.querySelector('.btn.btn-green-peppers');
let btnSauce = document.querySelector('.btn.btn-sauce');
let btnMasa = document.querySelector('.btn.btn-crust');
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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(gPepper => {
    if (state.greenPeppers) {
      gPepper.style.visibility = 'visible';
    } else {
      gPepper.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let masa = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    masa.classList.add('crust-gluten-free');
  } else {
    masa.classList.remove('crust-gluten-free');
  }

}

function renderButtons(e) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperoni) {
    btnPep.classList.add('active');
  } else {
    btnPep.classList.remove('active');
  }
  if (state.mushrooms) {
    btnMush.classList.add('active');
  } else {
    btnMush.classList.remove('active');
  }
  if (state.greenPeppers) {
    btnGP.classList.add('active');
  } else {
    btnGP.classList.remove('active');
  }
  if (state.whiteSauce) {
    btnSauce.classList.add('active');
  } else {
    btnSauce.classList.remove('active');
  }
  if (state.glutenFreeCrust) {
    btnMasa.classList.add('active');
  } else {
    btnMasa.classList.remove('active');
  }



}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let displayTotal = document.querySelector('.panel.price strong');
  let items = document.querySelector('.panel.price ul');
  items.innerHTML = '';
  let finalPrice = basePrice;


  for (let item in ingredients) {
    if (state[item]) {

      items.innerHTML += `<li>$${ingredients[item].price} ${ingredients[item].name}</li>`;

      finalPrice += ingredients[item].price;
    }
    displayTotal.innerHTML = `$${finalPrice}`;

  }

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
btnPep.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
btnMush.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
btnGP.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
btnSauce.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
btnMasa.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})