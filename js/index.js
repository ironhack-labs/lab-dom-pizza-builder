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
  document.querySelectorAll(`.mushroom`).forEach((oneMush) => {
    if (state.mushrooms){
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((oneGp) => {
    if (state.greenPeppers){
      oneGp.style.visibility = "visible"
    } else {
      oneGp.style.visibility = "hidden"
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const whiteSauceElement = document.querySelector(".sauce")
    if(state.whiteSauce){
      whiteSauceElement.classList.add("sauce-white")
    } else {
      whiteSauceElement.classList.remove("sauce-white")
    }
  }

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustElement = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustElement.classList.add('crust-gluten-free');
  } else {
    crustElement.classList.remove('crust-gluten-free');
  }
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnPep = document.querySelector(".btn-pepperoni")
  const btnMush = document.querySelector(".btn-mushrooms")
  const btnGpep = document.querySelector(".btn-green-peppers")
  const btnSauce = document.querySelector(".btn-sauce")
  const btnCrust = document.querySelector(".btn-crust")

  if (state.pepperoni) {
    btnPep.classList.add("active")
  } else {
    btnPep.classList.remove("active")
  }

  if (state.mushrooms) {
    btnMush.classList.add("active")
  } else {
    btnMush.classList.remove("active")
  }

  if (state.greenPeppers) {
    btnGpep.classList.add("active")
  } else {
    btnGpep.classList.remove("active")
  }

  if (state.whiteSauce) {
    btnSauce.classList.add("active")
  } else {
    btnSauce.classList.remove("active")
  }

  if (state.glutenFreeCrust) {
    btnCrust.classList.add("active")
  } else {
    btnCrust.classList.remove("active")
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceCard = document.querySelector('.panel.price ul');
  priceCard.innerHTML = '';

  let totalPrice = basePrice;
  for (let item in state) {
    if (state[item]) {
      totalPrice += ingredients[item].price;
      const li = document.createElement('li');
      li.textContent = `$${ingredients[item].price} ${ingredients[item].name}`;
      priceCard.append(li);
    }
  }

  document.querySelector('.panel.price strong').textContent = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn-mushrooms").addEventListener("click", () =>  {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").addEventListener("click", () =>  {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").addEventListener("click", () =>  {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").addEventListener("click", () =>  {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything();
})
