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

const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else document.querySelector('.sauce').classList.remove('sauce-white');
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else document.querySelector('.crust').classList.remove('crust-gluten-free');
}

function renderButtons() {
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  } else
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');

  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else document.querySelector('.btn.btn-sauce').classList.remove('active');
  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else document.querySelector('.btn.btn-crust').classList.remove('active');
}

function renderPrice() {
  let code = '';
  let price = basePrice;
  if (state.pepperoni) {
    code += `<li>$1 pepperoni</li>`;
    price += ingredients.pepperoni.price;
  }
  if (state.mushrooms) {
    code += `<li>$1 mushrooms</li>`;
    price += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    code += `<li>$1 green peppers</li>`;
    price += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    code += `<li>$3 white sauce</li>`;
    price += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    code += `<li>$5 gluten-free crust</li>`;
    price += ingredients.glutenFreeCrust.price;
  }
  document.querySelector('.prices').innerHTML = code;
  document.querySelector('.total').textContent = price;
}

renderEverything();

document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;

  renderEverything();
});
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;

  renderEverything();
});
