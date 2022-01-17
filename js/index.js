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
   state = {
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
 // Iteration 1: set the visibility of `<section class="pepperoni">`
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

  document.querySelectorAll('.mushroom').forEach((mushroom) => {

    mushroom.style.visibility = state.mushrooms ? 'visible' : 'hidden';
  });
}
 


 // Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {

  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {

    greenPepper.style.visibility = state.greenPeppers ? 'visible' : 'hidden';
  });
}
 


 // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

 function renderWhiteSauce() {
  const whiteSauces = document.querySelector('.sauce');
    if (state.whiteSauce) {
    whiteSauces.classList.add('sauce-white');
  } else {
    whiteSauces.classList.remove('sauce-white');
  }
}

    


 // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  const crusts = document.querySelector('.crust');
    if (state.glutenFreeCrust) {
      crusts.classList.add('crust-gluten-free');
    } else {
      crusts.classList.remove('crust-gluten-free');
    }
}



// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn-pepperoni').classList.remove('active');
  }

  if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn-green-peppers').classList.remove('active');
  }

  if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn-mushrooms').classList.remove('active');
  }

  if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn-sauce').classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn-crust').classList.remove('active');
  }
} 


// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;

  const ingredientsList = document.querySelector('.panel.price ul');
  ingredientsList.innerHTML = '';

  for (let ingredient in state) {
    if (state[ingredient]) {
      const unit = document.createElement('li');
      unit.innerText = `${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      ingredientsList.append(unit);
      totalPrice += ingredients[ingredient].price;
    }
  }

  const price = document.querySelector('.panel.price strong');
  price.textContent = `$ ${totalPrice}`;
}


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

renderEverything();
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
}); 

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers ;
  renderEverything();
});



// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
