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
  document.querySelectorAll('.mushroom').forEach(mushroom => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  };
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust')
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  };
}

function renderButtons() {
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active')
  } else {
    document.querySelector('.btn-pepperoni').classList.remove('active')
  }

  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active')
  } else {
    document.querySelector('.btn-green-peppers').classList.remove('active')
  }

  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active')
  } else {
    document.querySelector('.btn-mushrooms').classList.remove('active')
  }

  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active')
  } else {
    document.querySelector('.btn-sauce').classList.remove('active')
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active')
  } else {
    document.querySelector('.btn-crust').classList.remove('active')
  }
}

function renderPrice() {
  let totalPrice = basePrice;

  let priceList = document.querySelector(".price ul");
  priceList.innerHTML = "";

  if (state.pepperoni) {
    const pep = document.createElement("li");
    pep.innerText = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
 
    priceList.append(pep);
    totalPrice += ingredients.pepperoni.price;
  }

  if (state.mushrooms) {
    const mush = document.createElement("li");
    mush.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;

    priceList.append(mush);
    totalPrice += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    const pepper = document.createElement("li");
    pepper.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;

    priceList.append(pepper);
    totalPrice += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    const sauce = document.createElement("li");
    sauce.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;

    priceList.append(sauce);
    totalPrice += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    const crust = document.createElement("li");
    crust.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
    
    priceList.append(crust);
    totalPrice += ingredients.glutenFreeCrust.price;
  }

  let totalPriceRender = document.querySelector(".price strong");
  totalPriceRender;
  totalPriceRender.innerText = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
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