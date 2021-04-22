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
  document.querySelectorAll('.pep').forEach(pep => {
    if (state.pepperoni) {
      pep.style.visibility = "visible"
    } else {
      pep.style.visibility = "hidden"
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(pepper => {
      if (state.greenPeppers) {
        pepper.style.visibility = "visible"
      } else {
        pepper.style.visibility = "hidden"
      }
    })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    const sauces = document.querySelectorAll('.sauce')
    if (state.whiteSauce) {
      sauces.forEach(sauce => sauce.classList.add('sauce-white'))
    } else {
      sauces.forEach(sauce => sauce.classList.remove('sauce-white'))
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    const crusts = document.querySelectorAll('.crust')
    if (state.glutenFreeCrust) {
      crusts.forEach(crust => crust.classList.add('crust-gluten-free'))
    } else {
      crusts.forEach(crust => crust.classList.remove('crust-gluten-free'))
    }

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    document.getElementById("btn-pepperoni").classList.add('active')
  } else {
    document.getElementById("btn-pepperoni").classList.remove('active')
  }
  if (state.mushrooms) {
    document.getElementById('btn-mushrooms').classList.add('active')
  } else {
    document.getElementById('btn-mushrooms').classList.remove('active')
  }
  if (state.greenPeppers) {
    document.getElementById('btn-green-peppers').classList.add('active')
  } else {
    document.getElementById('btn-green-peppers').classList.remove('active')
  }
  if (state.whiteSauce) {
    document.getElementById('btn-sauce').classList.add('active')
  } else {
    document.getElementById('btn-sauce').classList.remove('active')
  }
  if (state.glutenFreeCrust) {
    document.getElementById('btn-crust').classList.add('active')
  } else {
    document.getElementById('btn-crust').classList.remove('active')
  }
}



function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = basePrice
  let extras = ""
  for (let ingredient in state) {
    if (state[ingredient]) {
      extras += `<li>$${ingredients[ingredient]['price']} ${ingredient}</li>` 
      total += ingredients[ingredient]['price']
    }
  }
  let priceList = document.querySelector(".price ul");
  priceList.innerHTML = extras
  let totalPriceRender = document.querySelector(".price strong");
  totalPriceRender;
  totalPriceRender.innerText = `$${total}`;
  
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})