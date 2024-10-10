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
  const sauce = document.getElementsByClassName('sauce')[0];
  if (state.whiteSauce) {
    sauce.setAttribute('class', 'sauce sauce-white');
  } else {
    sauce.setAttribute('class', 'sauce');
  }

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crust = document.getElementsByClassName('crust')[0];
  if (state.glutenFreeCrust) {
    crust.setAttribute('class', 'crust crust-gluten-free')
  } else {
    crust.setAttribute('class', 'crust')
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`´
  const arrayOfStates = [];
  for (const key in state) {
      arrayOfStates.push(state[key]);
  }
  // console.log(arrayOfStates);
  const buttons = Array.from(document.getElementsByClassName("btn"));
  // console.log(buttons);
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const state = arrayOfStates[i];
    // console.log(button, state);
    const newClases= button.getAttribute('class');
    if (!state && newClases.includes('active')) {
      button.setAttribute('class', newClases.slice(0, newClases.indexOf('active')));
    } else if (state && !newClases.includes('active')) {
      button.setAttribute('class', `${newClases.trimEnd()} active`)
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const list = document.querySelectorAll('.panel.price li');
  const parentList = document.querySelectorAll('.panel.price ul')[0];
  const parentStrong = document.querySelectorAll('.panel.price strong')[0];
  const tagLi = document.createElement('li');
  
  // console.log(parentStrong);
  // Removing all data
  parentStrong.innerHTML = "";
  // parentList.innerHTML = "";
  // console.log(parentList);
  // console.log(list);
  const arrayOfStates = [];
  const arrayOfNames = [];
  const arrayOfPrices = []
  let finalprice = 10;
  for (const key in state) {
      arrayOfStates.push(state[key]);
      arrayOfNames.push(key)
  }
  for (const key in ingredients) {
   arrayOfPrices.push(ingredients[key].price);
  }
  // console.log(arrayOfPrices);
  for (let i = 0; i < arrayOfStates.length; i++) {
    const state = arrayOfStates[i];
    if (!state) {
     list[i].style.display = 'none'
    } else {
      finalprice += arrayOfPrices[i];
      list[i].style.display = 'block'
    }
  }
  const text = document.createTextNode(`$${finalprice}`);
  parentStrong.appendChild(text);
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
  state.greenPeppers= !state.greenPeppers;
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
