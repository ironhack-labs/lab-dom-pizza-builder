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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white')
  } else {
    sauce.classList.remove('sauce-white')
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free')
  } else {
    crust.classList.remove('crust-gluten-free')
  }
}

function renderButtons() {
  const pepperoniButton = document.querySelector('.btn-pepperoni')
  state.pepperoni ? pepperoniButton.classList.add('active') : pepperoniButton.classList.remove('active')

  const mushroomButton = document.querySelector('.btn-mushrooms')
  state.mushrooms ? mushroomButton.classList.add('active') : mushroomButton.classList.remove('active')

  const greenPepperButton = document.querySelector('.btn-green-peppers')
  state.greenPeppers ? greenPepperButton.classList.add('active') : greenPepperButton.classList.remove('active')

  const whiteSauceButton = document.querySelector('.btn-sauce')
  state.whiteSauce ? whiteSauceButton.classList.add('active') : whiteSauceButton.classList.remove('active')

  const noGlutenButton = document.querySelector('.btn-crust')
  state.glutenFreeCrust ? noGlutenButton.classList.add('active') : noGlutenButton.classList.remove('active')
}

function renderPrice() {  
  let pizzaPrice = basePrice
  let priceList = document.querySelector('aside.panel.price ul')
  priceList.innerHTML = ""

  for (let i in ingredients) {
    if (state[i]) {
      pizzaPrice += ingredients[i].price
      priceList.innerHTML += `<li>$${ingredients[i].price} ${ingredients[i].name}</li>`
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = "$" + pizzaPrice
}


renderEverything();

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