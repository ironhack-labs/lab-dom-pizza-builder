// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushroom: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
const renderEverything = () => {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
};

const renderPepperonni = () => {
  document.querySelectorAll('.pep').forEach(($pep) => {
    if (state.pepperonni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
};

const renderMushrooms = () => {
  document.querySelectorAll('.mushroom').forEach(($mushroom) => {
    if (state.mushroom) {
      $mushroom.style.visibility = 'visible';
    } else {
      $mushroom.style.visibility = 'hidden';
    }
  });
};

const renderGreenPeppers = () => {
  document.querySelectorAll('.green-pepper').forEach(($green) => {
    if (state.greenPeppers) {
      $green.style.visibility = 'visible';
    } else {
      $green.style.visibility = 'hidden';
    }
  });
};

// Iteration 2: add/remove the class 'sauce-white' of `<section class='sauce'>`
const renderWhiteSauce = () => {
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
};

// Iteration 2: add/remove the class 'crust-gluten-free' of `<section class='crust'>`
const renderGlutenFreeCrust = () => {
  document.querySelectorAll('.crust').forEach(($crust) => {
    if (state.glutenFreeCrust) {
      $crust.classList.add('crust-gluten-free');
    } else {
      $crust.classList.remove('crust-gluten-free');
    }
  });
}

const renderButtons = () => {
  // Iteration 3: add/remove the class 'active' of each `<button class='btn'>`

  const buttonPepperoni = document.querySelector('.btn.btn-pepperonni');
  if (state.pepperonni) {
    buttonPepperoni.classList.add('active');
  } else {
    buttonPepperoni.classList.remove('active');
  }

  const buttonMushrooms = document.querySelector('.btn.btn-mushrooms');
  if (state.mushroom) {
    buttonMushrooms.classList.add('active');
  } else {
    buttonMushrooms.classList.remove('active');
  }

  const buttonGreen = document.querySelector('.btn.btn-green-peppers');
  if (state.greenPeppers) {
    buttonGreen.classList.add('active');
  } else {
    buttonGreen.classList.remove('active');
  }

  const buttonSauce = document.querySelector('.btn.btn-sauce');
  if (state.whiteSauce) {
    buttonSauce.classList.add('active');
  } else {
    buttonSauce.classList.remove('active');
  }

  const buttonGlutenFree = document.querySelector('.btn.btn-crust');
  if (state.glutenFreeCrust) {
    buttonGlutenFree.classList.add('active');
  } else {
    buttonGlutenFree.classList.remove('active');
  }
}

const renderPrice = () => {
  // Iteration 4: change the HTML of `<aside class='panel price'>`
  let totalPrice = 10;
  const cart = document.querySelector('aside.panel.price ul');
  cart.innerHTML = '';

  const price = document.querySelector('aside strong');
  price.innerHTML = totalPrice;

  if (state.pepperonni) {
    const pepperoniLi = document.createElement('li');
    pepperoniLi.innerHTML = '$1 pepperonni';
    cart.appendChild(pepperoniLi);
    totalPrice += ingredients.pepperonni.price;
    price.innerHTML = totalPrice;
  }

  if (state.mushroom) {
    const mushroomLi = document.createElement('li');
    mushroomLi.innerHTML = '$1 mushrooms';
    cart.appendChild(mushroomLi);
    totalPrice += ingredients.mushrooms.price;
    price.innerHTML = totalPrice;
  }

  if (state.greenPeppers) {
    const greenLi = document.createElement('li');
    greenLi.innerHTML = '$1 green peppers';
    cart.appendChild(greenLi);
    totalPrice += ingredients.greenPeppers.price;
    price.innerHTML = totalPrice;
  }

  if (state.whiteSauce) {
    const sauceLi = document.createElement('li');
    sauceLi.innerHTML = '$3 white sauce';
    cart.appendChild(sauceLi);
    totalPrice += ingredients.whiteSauce.price;
    price.innerHTML = totalPrice;
  }

  if (state.glutenFreeCrust) {
    const crustLi = document.createElement('li');
    crustLi.innerHTML = '$5 gluten-free crust';
    cart.appendChild(crustLi);
    totalPrice += ingredients.glutenFreeCrust.price;
    price.innerHTML = totalPrice;
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class='btn btn-pepperonni'>`
document.querySelector('.btn.btn-pepperonni').onclick = () => {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class='btn btn-mushrooms'>`

document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushroom = !state.mushroom;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class='btn btn-green-peppers'>`

document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class='btn btn-sauce'>`
document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class='btn btn-crust'>`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
