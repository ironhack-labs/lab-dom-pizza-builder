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
function renderEverything(event) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons(event);
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
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (state.whiteSauce) {
      oneSauce.classList.add('sauce-white');
    } else {
      oneSauce.classList.remove('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (state.glutenFreeCrust) {
      oneCrust.classList.add('crust-gluten-free');
    } else {
      oneCrust.classList.remove('crust-gluten-free');
    }
  });
}

function renderButtons(event) {
  if (event) {
    event.target.className.includes('active') ? event.target.classList.remove('active') : event.target.classList.add('active')
  } else {
    document.querySelectorAll('.btn').forEach((btn) => {
      for (let ingredient of Object.keys(ingredients)) {
        if (ingredients[ingredient].name.toLowerCase() === btn.innerText.toLowerCase()) {
          state[ingredient] ? btn.classList.add('active') : btn.classList.remove('active');
        }
      } 
    });
  }  
}

function renderPrice() {
  const list = Array.from(document.querySelectorAll('.panel.price ul li'));
  for (let element of list) {
    element.remove();
  }
  const typeIngredients = Object.keys(ingredients);
  let lastPrice = 0;
  for (let i = 0; i < typeIngredients.length; i++) {
    if (state[typeIngredients[i]]) {
      const itemList = document.createElement('li');
      itemList.innerText = `$${ingredients[typeIngredients[i]].price} ${ingredients[typeIngredients[i]].name}`
      document.querySelector('.panel.price ul').append(itemList);
    }
    lastPrice += state[typeIngredients[i]] ? ingredients[typeIngredients[i]].price : 0;
  }
  document.querySelector('.panel.price strong').innerText = `$${lastPrice + 10}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function (event) {
  state.pepperoni = !state.pepperoni;
  renderEverything(event);
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (event) {
  state.mushrooms = !state.mushrooms;
  renderEverything(event);
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (event) {
  state.greenPeppers = !state.greenPeppers;
  renderEverything(event);
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function (event) {
  state.whiteSauce = !state.whiteSauce;
  renderEverything(event);
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function (event) {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(event);
});