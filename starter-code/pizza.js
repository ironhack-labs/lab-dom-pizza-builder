// Write your Pizza Builder JavaScript in this file.

// Constants 
const basePrice = 10
const ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

const renderPepperonni = () => {
  document.querySelectorAll('.pep').forEach(($pep) => {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  });
};

const renderMushrooms = () => {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(($mush) => {
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  });
};

const renderGreenPeppers = () => {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(($pepper) => {
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
    }
    else {
      $pepper.style.visibility = "hidden";
    }
  });
}

const renderWhiteSauce = () => {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const addRemoveSauce = document.querySelector('.sauce');

  if (state.whiteSauce) {
    addRemoveSauce.classList.add('sauce-white');
  } else {
    addRemoveSauce.classList.remove('sauce-white');
  }
}

const renderGlutenFreeCrust = () => {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const addRemoveGlutenFreeCrust = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    addRemoveGlutenFreeCrust.classList.add('crust-gluten-free');
  } else {
    addRemoveGlutenFreeCrust.classList.remove('crust-gluten-free');
  }
}

const renderButtons = () => {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // make the buttons using forEach
  const addRemoveButtonClickPepperonni = document.querySelector('.btn-pepperonni');
  const addRemoveButtonClickMushrooms = document.querySelector('.btn-mushrooms');
  const addRemoveButtonClickGreenPepper = document.querySelector('.btn-green-peppers');
  const addRemoveButtonClickWhiteSauce = document.querySelector('.btn-sauce');
  const addRemoveButtonClickGlutenFreeCrust = document.querySelector('.btn-crust');

  if (state.pepperonni) {
    addRemoveButtonClickPepperonni.classList.add('active');
  } else {
    addRemoveButtonClickPepperonni.classList.remove('active');
  }

  if(state.mushrooms) {
    addRemoveButtonClickMushrooms.classList.add('active');
  } else {
    addRemoveButtonClickMushrooms.classList.remove('active');
  }

  if(state.greenPeppers) {
    addRemoveButtonClickGreenPepper.classList.add('active');
  } else {
    addRemoveButtonClickGreenPepper.classList.remove('active');
  }

  if(state.whiteSauce) {
    addRemoveButtonClickWhiteSauce.classList.add('active');
  } else {
    addRemoveButtonClickWhiteSauce.classList.remove('active');
  }

  if(state.glutenFreeCrust) {
    addRemoveButtonClickGlutenFreeCrust.classList.add('active');
  } else {
    addRemoveButtonClickGlutenFreeCrust.classList.remove('active');
  }
}

const renderPrice = () => {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let choosenIngredients = '';
  if (state.pepperonni) {
    choosenIngredients += '<li>$1 pepperonni</li>';
  }
  if (state.mushrooms) {
    choosenIngredients += '<li>$1 mushrooms</li>';
  }
  if (state.greenPeppers) {
    choosenIngredients += '<li>$1 green peppers</li>';
  }
  if (state.whiteSauce) {
    choosenIngredients += '<li>$3 white sauce</li>';
  }
  if (state.glutenFreeCrust) {
    choosenIngredients += '<li>$5 gluten-free crust</li>';
  }

  document.querySelector('.price > ul').innerHTML = choosenIngredients;

  // rever pq nao esta dando certo o remove
  // let parent = document.querySelector('.price > ul');
  // let childPepperonni = document.getElementById('price-pepperonni');
  // let childMushrooms = document.getElementById('price-mushrooms');
  // if (state.pepperonni) {
  //   parent.appendChild(childPepperonni);
  // } else {
  //   // parent.appendChild(childMushrooms);
  //   parent.appendChild(a);
  // }

  // total price
  let totalPrice = basePrice + (ingredients.pepperonni.price * state.pepperonni) + (ingredients.mushrooms.price * state.mushrooms) + (ingredients.greenPeppers.price * state.greenPeppers) + (ingredients.whiteSauce.price * state.whiteSauce) + (ingredients.glutenFreeCrust.price * state.glutenFreeCrust);
  let totalPriceElement = document.getElementById('total-price');
  totalPriceElement.innerHTML = `$${totalPrice}`;

  // console.log(totalPrice);
}

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
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = () => {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
// se deixar só btn-mushroom funciona???????????????????

document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}