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
  
  document.querySelectorAll('.btn').forEach((btn, i) => {
    if (Object.values(state)[i]) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderPrice() {
  
  const myList = document.querySelector('.panel.price ul');
  myList.innerHTML = '';
  let pizzaPrice = basePrice;

  for (let i in ingredients) {
    if (state[i]) {
      myList.innerHTML += `<li>$${ingredients[i].price} ${ingredients[i].name}</li>`;
      pizzaPrice += ingredients[i].price;
    }
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