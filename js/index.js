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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {

  //0 = pepperoni, 1 = mushrooms, 2 = peppers, 3 = sauce, 4 = crust
  const buttons = document.querySelectorAll('.btn');

  state.pepperoni ? buttons[0].classList.add('active') : buttons[0].classList.remove('active');
  state.mushrooms ? buttons[1].classList.add('active') : buttons[1].classList.remove('active');
  state.greenPeppers ? buttons[2].classList.add('active') : buttons[2].classList.remove('active');
  state.whiteSauce ? buttons[3].classList.add('active') : buttons[3].classList.remove('active');
  state.glutenFreeCrust ? buttons[4].classList.add('active') : buttons[4].classList.remove('active');
}

function renderPrice() {

  const cart = document.querySelector('.panel.price ul');
  cart.innerHTML = '';
  let total = 10;
  const totalPrice = document.querySelector('aside strong');


  if (state.pepperoni) {
    cart.innerHTML += `<li>$ ${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    total += ingredients.pepperoni.price;
  }
  if (state.mushrooms) {
    cart.innerHTML += `<li>$ ${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    total += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    cart.innerHTML += `<li>$ ${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    total += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    cart.innerHTML += `<li>$ ${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    total += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    cart.innerHTML += `<li>$ ${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    total += ingredients.glutenFreeCrust.price;
  }
  totalPrice.innerHTML = `$ ${total}`;
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
})

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})