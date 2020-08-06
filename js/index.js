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
  document.querySelectorAll('.mushroom').forEach(shroom => {
    if (state.mushrooms) {
      shroom.style.visibility = 'visible';
    } else {
      shroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white')
  }
  else {
    document.querySelector('.sauce').classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free')
  }
  else {
    document.querySelector('.crust').classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  [pepperoni, mushrooms, peppers, sauce, crust] = document.querySelectorAll('.panel ul .btn');

  if (state.pepperoni) {
    pepperoni.classList.add('active') 
  } else {
    pepperoni.classList.remove('active')
  }

  if (state.mushrooms) {
    mushrooms.classList.add('active') 
  } else {
    mushrooms.classList.remove('active')
  }

  if (state.greenPeppers) {
    peppers.classList.add('active') 
  } else {
    peppers.classList.remove('active')
  }

  if (state.whiteSauce) {
    sauce.classList.add('active') 
  } else {
    sauce.classList.remove('active')
  }

  if (state.glutenFreeCrust) {
    crust.classList.add('active') 
  } else {
    crust.classList.remove('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  [pepperoni,mushrooms,peppers,sauce,crust] = document.querySelectorAll('aside.panel.price ul li');
  let total = document.querySelector('aside.panel.price strong');


  let price = 10;

  if (state.pepperoni) {
    pepperoni.style.visibility = 'visible'
    price += 1;
  } else {
    pepperoni.style.visibility = 'hidden'
  }

  if (state.mushrooms) {
    mushrooms.style.visibility = 'visible'
    price += 1;
  } else {
    mushrooms.style.visibility = 'hidden'
  }

  if (state.greenPeppers) {
    peppers.style.visibility = 'visible'
    price += 1;
  } else {
    peppers.style.visibility = 'hidden'
  }

  if (state.whiteSauce) {
    sauce.style.visibility = 'visible'
    price += 3;
  } else {
    sauce.style.visibility = 'hidden'
  }

  if (state.glutenFreeCrust) {
    crust.style.visibility = 'visible'
    price += 5;
  } else {
    crust.style.visibility = 'hidden'
  }

  total.textContent = `$${price}`
  
}

renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
