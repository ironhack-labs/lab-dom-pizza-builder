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

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.classList.add('crust-gluten-free');
  } else {
    crust.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const allButtons = document.querySelectorAll('.btn');
  
  allButtons.forEach(eachButton => {
    if (eachButton.classList.contains('btn-pepperoni')) {
      eachButton.classList.toggle('active', state.pepperoni);
    } else if (eachButton.classList.contains('btn-mushrooms')) {
      eachButton.classList.toggle('active', state.mushrooms);
    } else if (eachButton.classList.contains('btn-green-peppers')) {
      eachButton.classList.toggle('active', state.greenPeppers);
    } else if (eachButton.classList.contains('btn-sauce')) {
      eachButton.classList.toggle('active', state.whiteSauce);
    } else if (eachButton.classList.contains('btn-crust')) {
      eachButton.classList.toggle('active', state.glutenFreeCrust);
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = basePrice;
  let ingredientList = document.querySelector('.panel.price ul');
  ingredientList.innerHTML = ''; // Limpiar la lista antes de agregar los ingredientes

  // Recorrer los ingredientes con querySelectorAll
  document.querySelectorAll('.btn').forEach(eachButton => {
    if (eachButton.classList.contains('btn-pepperoni') && state.pepperoni) {
      total += ingredients.pepperoni.price;
      ingredientList.innerHTML += `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    } else if (eachButton.classList.contains('btn-mushrooms') && state.mushrooms) {
      total += ingredients.mushrooms.price;
      ingredientList.innerHTML += `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    } else if (eachButton.classList.contains('btn-green-peppers') && state.greenPeppers) {
      total += ingredients.greenPeppers.price;
      ingredientList.innerHTML += `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    } else if (eachButton.classList.contains('btn-sauce') && state.whiteSauce) {
      total += ingredients.whiteSauce.price;
      ingredientList.innerHTML += `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    } else if (eachButton.classList.contains('btn-crust') && state.glutenFreeCrust) {
      total += ingredients.glutenFreeCrust.price;
      ingredientList.innerHTML += `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    }
  });

  // Actualizar el precio total
  document.querySelector('.panel.price strong').textContent = `$${total}`;


}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
  console.log("pepperoni!");
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  console.log("mushrooms!");
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  console.log("greeen peppers!");
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
  console.log("sauce!");
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  console.log("crust!");
});