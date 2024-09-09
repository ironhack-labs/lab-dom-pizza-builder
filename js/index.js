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
  document.querySelectorAll(".mushroom").forEach((mush) => {
    if (state.mushrooms) {
      mush.style.visibility = "visible"
    }
    else {
      mush.style.visibility = "hidden"
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((pepper) => {
    if(state.greenPeppers) {
      pepper.style.visibility = "visible"
    }
    else {
      pepper.style.visibility = "hidden"

    }
  })
}

function renderWhiteSauce() {
  const sauceElement = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceElement.classList.add('sauce-white');
  } else {
    sauceElement.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
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
  if (state.pepperoni) {
    btnPep.classList.add("active")
  }
  else {
    btnPep.classList.remove("active")
  }


  const btnMush = document.querySelector(".btn-mushrooms")
  if(state.mushrooms) {
    btnMush.classList.add("active")
  }
  else {
    btnMush.classList.remove("active")
  }


  const btnGreen = document.querySelector(".green-pepper")
  if(state.greenPeppers) {
    btnGreen.classList.add("active")
  }
  else {
    btnGreen.classList.remove("active")

  }


  const btnWhite = document.querySelector(".sauce")
  if (state.whiteSauce) {
    btnWhite.classList.add("active")
  }
  else {
    btnWhite.classList.remove("active")
  }


  const btnGlutenFree = document.querySelector(".crust")
  if(state.glutenFreeCrust) {
    btnGlutenFree.classList.add("active")
  }
  else {
    btnGlutenFree.classList.remove("active")

  }

}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const precios = document.querySelector('.panel.price ul');
  const totalPrecioSuma = document.querySelector('.panel.price strong');
  let totalPrice = basePrice;
  
  precios.innerHTML = '';
  for (let ingrediente in ingredients) {
    if (state[ingrediente]) {
      totalPrice += ingredients[ingrediente].price;
    
      const ticket = document.createElement('li');
      ticket.textContent = `$${ingredients[ingrediente].price} ${ingredients[ingrediente].name.toLowerCase()}`;
      precios.appendChild(ticket);
    }
  }
  
  totalPrecioSuma.textContent = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
})
