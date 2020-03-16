// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: false,
  whiteSauce: false,
  glutenFreeCrust: false,
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
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = "hidden";
    }
  })
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach(greepepper => {
    if (state.greenPeppers) {
      greepepper.style.visibility = "visible";
    } else {
      greepepper.style.visibility = "hidden";
    }
  })
}
// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderWhiteSauce() {
  if (!state.whiteSauce) {
    document.getElementsByClassName('sauce')[0].classList.remove('sauce-white')
  } else {
    document.getElementsByClassName('sauce')[0].classList.add('sauce-white')
  }
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.getElementsByClassName('crust')[0].classList.add('crust-gluten-free')
  } else {
    document.getElementsByClassName('crust')[0].classList.remove('crust-gluten-free');
  }
}
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  if (state.pepperoni) {
    document.getElementsByClassName('btn btn-pepperoni')[0].classList.add('active')
  } else {
    document.getElementsByClassName('btn btn-pepperoni')[0].classList.remove('active')
  };
  if (state.mushrooms) {
    document.getElementsByClassName('btn btn-mushrooms')[0].classList.add('active')
  } else {
    document.getElementsByClassName('btn btn-mushrooms ')[0].classList.remove('active');
  };
  if (state.greenPeppers) {
    document.getElementsByClassName('btn btn-green-peppers')[0].classList.add('active')
  } else {
    document.getElementsByClassName('btn btn-green-peppers')[0].classList.remove('active')
  };
  if (state.whiteSauce) {
    document.getElementsByClassName('btn btn-sauce')[0].classList.add('active')
  } else {
    document.getElementsByClassName('btn btn-sauce')[0].classList.remove('active')
  }
  if (state.glutenFreeCrust) {
    document.getElementsByClassName('btn btn-crust')[0].classList.add('active')
  } else {
    document.getElementsByClassName('btn btn-crust')[0].classList.remove('active')
  }
}




function renderPrice() {
  let priceList = document.querySelectorAll(".panel.price ul")[0];
  priceList.innerHTML = "";
  Subtotal = 0 + basePrice
  let totalPrice = document.querySelector(".panel.price strong");
  if (state.pepperoni) {
    Subtotal += 1
    let extraPepperoni = document.createElement("LI")
    extraPepperoni.innerHTML = `$ ${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
    priceList.appendChild(extraPepperoni)
  }
  if (state.mushrooms) {
    let extraMushrooms = document.createElement("LI")
    extraMushrooms.textContent = `$ ${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
    priceList.appendChild(extraMushrooms)
    Subtotal += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    let extraPeppers = document.createElement("LI")
    extraPeppers.textContent = `$ ${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
    priceList.appendChild(extraPeppers)
    Subtotal += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    let extraWhiteSauce = document.createElement("LI")
    extraWhiteSauce.textContent = `$ ${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
    priceList.appendChild(extraWhiteSauce)
    Subtotal += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    let extraGlutenFreeCrust = document.createElement("LI")
    extraGlutenFreeCrust.textContent = `$ ${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`
    priceList.appendChild(extraGlutenFreeCrust)
    Subtotal += ingredients.glutenFreeCrust.price;
  }
  totalPrice.innerHTML = "$" + Subtotal
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
$pepperoniExtra = document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
$mushroomExtra = document.querySelector(".btn.btn-mushrooms").addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
$greenPeppersExtra = document.querySelector(".btn.btn-green-peppers").addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything()
})