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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible'
    } else {
      oneMushroom.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible'
    } else {
      onePepper.style.visibility = 'hidden'
    }
  })
}

function renderWhiteSauce() {
  const whiteSauceSelect = document.querySelector('.sauce-white')
  if (state.whiteSauce) {
    whiteSauceSelect.style.visibility = 'visible'
  } else {
    whiteSauceSelect.style.visibility = 'hidden'
  }
}

function renderGlutenFreeCrust() {
  const crustElement = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crustElement.classList.add("crust-gluten-free")
  } else {
    crustElement.classList.remove("crust-gluten-free")
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const allBtns = document.querySelectorAll(".btn").forEach((btn) => {
    if (btn.classList.contains("btn-pepperoni")) {
      btn.classList.toggle("active", state.pepperoni)
    } else if (btn.classList.contains('btn-mushrooms')) {
      btn.classList.toggle("active", state.mushrooms)
    } else if (btn.classList.contains('btn-green-peppers')) {
      btn.classList.toggle("active", state.greenPeppers)
    } else if (btn.classList.contains('btn-sauce')) {
      btn.classList.toggle("active", state.whiteSauce)
    } else if (btn.classList.contains('btn-crust')) {
      btn.classList.toggle("active", state.glutenFreeCrust)
    }

  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const panelPrice = document.querySelector('.price')
  const totalPrice = basePrice + (state.pepperoni ? ingredients.pepperoni.price : 0)
    + (state.mushrooms ? ingredients.mushrooms.price : 0)
    + (state.greenPeppers ? ingredients.greenPeppers.price : 0)
    + (state.whiteSauce ? ingredients.whiteSauce.price : 0)
    + (state.glutenFreeCrust ? ingredients.glutenFreeCrust.price : 0)
  panelPrice.innerHTML = `
      <h2>Your pizza's price</h2>

      <b>$10 cheese pizza</b>
      <ul>
        ${state.pepperoni ? `<li>$${ingredients.pepperoni.price} pepperoni</li>` : ''}
        ${state.mushrooms ? `<li>$${ingredients.mushrooms.price} mushrooms</li>` : ''}
        ${state.greenPeppers ? `<li>$${ingredients.greenPeppers.price} green peppers</li>` : ''}
        ${state.whiteSauce ? `<li>$${ingredients.whiteSauce.price} white sauce</li>` : ''}
        ${state.glutenFreeCrust ? `<li>$${ingredients.glutenFreeCrust.price} gluten-free crust</li>` : ''}
      </ul>
      <strong>$${totalPrice}</strong>`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const btnMushroom = document.querySelector('.btn-mushrooms')
btnMushroom.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
const btnPepper = document.querySelector('.btn-green-peppers')
btnPepper.addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
const btnSauce = document.querySelector('.btn-sauce')
btnSauce.addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
const btnCrust = document.querySelector('.btn-crust')
btnCrust.addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})
