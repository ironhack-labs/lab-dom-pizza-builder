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

// Initial value of the state (the state values can change over time)
const state = {
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
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((element) => {
    if (state.mushrooms) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden';
    }
  });
}



// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((element) => {
    if (state.greenPeppers) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden';
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  document.querySelectorAll('.sauce-white').forEach((element) => {
    if (state.whiteSauce) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden';
    }
  });

}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust-gluten-free').forEach((element) => {
    if (state.glutenFreeCrust) {
      element.style.visibility = 'visible';
    } else {
      element.style.visibility = 'hidden';
    }
  });
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  const btnP = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    btnP.classList.add('active');
  }
  else {
    btnP.classList.remove('active');
  }

  const btnM = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    btnM.classList.add('active');
  }
  else {
    btnM.classList.remove('active');
  }

  const btnG = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    btnG.classList.add('active');
  }
  else {
    btnG.classList.remove('active');
  }

  const btnS = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    btnS.classList.add('active');
  }
  else {
    btnS.classList.remove('active');
  }

  const btnC = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    btnC.classList.add('active');
  }
  else {
    btnC.classList.remove('active');
  }

}


// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  let sum = 10;
  const liste = document.querySelector('.panel.price ul');
  const price = document.querySelector('.panel.price strong');
  liste.innerHTML = '';
  if (state.pepperoni) {
    liste.innerHTML += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    sum += ingredients.pepperoni.price;
  }

  if (state.mushrooms) {
    liste.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    sum += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    liste.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    sum += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    liste.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    sum += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    liste.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    sum += ingredients.glutenFreeCrust.price;
  }
  price.innerHTML = `$${sum}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

