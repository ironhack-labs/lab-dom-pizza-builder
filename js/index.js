// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: false,
  mushrooms: false,
  greenPeppers: false,
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

  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  
  if(state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  
  if(state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  
  if (!state.pepperoni) {
    document.querySelector(".btn-pepperoni").classList.remove("active");
  } else {
    document.querySelector(".btn-pepperoni").classList.add("active");
  };

  if (!state.mushrooms) {
    document.querySelector(".btn-mushrooms").classList.remove("active");
  } else {
    document.querySelector(".btn-mushrooms").classList.add("active");
  };

  if (!state.greenPeppers) {
    document.querySelector(".btn-green-peppers").classList.remove("active");
  } else {
    document.querySelector(".btn-green-peppers").classList.add("active");
  };

  if (state.whiteSauce) {
    document.querySelector(".btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn-sauce").classList.remove("active");
  };

  if (state.glutenFreeCrust) {
    document.querySelector(".btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn-crust").classList.remove("active");
  };
}

function renderPrice() {
  
  const myList = document.querySelector('.panel.price ul');
  myList.innerHTML = '';
  let pizzaPrice = basePrice;

  if (state.pepperoni) {
    myList.innerHTML += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    pizzaPrice += ingredients.pepperoni.price;
  } 

  if (state.mushrooms) {
    myList.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    pizzaPrice += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    myList.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    pizzaPrice += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    myList.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    pizzaPrice += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    myList.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    pizzaPrice += ingredients.glutenFreeCrust.price;
  }

  document.querySelector('aside strong').innerHTML = `Total $${pizzaPrice}`;
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