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
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((greenpep) => {
    if (state.greenPeppers) {
      greenpep.style.visibility = 'visible';
    } else {
      greenpep.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  (state.whiteSauce) ? sauce.classList.add('sauce-white') : sauce.classList.remove('sauce-white')
}

function renderGlutenFreeCrust() {
   // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  (state.glutenFreeCrust) ? crust.classList.add('crust-gluten-free') : crust.classList.remove('crust-gluten-free')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.classList.contains('active') ? btn.classList.remove('active') 
                                     : btn.classList.add('active'); 
    });   
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const finalPriceElement = document.querySelector('.panel strong');
  const listOfIngr = document.querySelector('.panel.price ul');
  let costumizedIng = "";
  let finalPrice = basePrice;
  for (let el in state) {
    if (state[el]) {
      finalPrice += ingredients[el].price;
      costumizedIng += `<li>$${ingredients[el].price} ${ingredients[el].name}</li>`;
    }
  }
  listOfIngr.innerHTML = costumizedIng;
  finalPriceElement.innerHTML = `$${finalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything(); 
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
