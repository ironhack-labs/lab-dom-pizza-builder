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
  document.querySelectorAll(`.pep`).forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = `visible`;
    } else {
      onePep.style.visibility = `hidden`;
    }
  });
}

function renderMushrooms() {
 document.querySelectorAll(`.mushroom`).forEach((oneMushroom) => {
   if (state.mushrooms) {
     oneMushroom.style.visibility = `visible`;
   } else {
     oneMushroom.style.visibility = `hiden`;
   }
 });
}

function renderGreenPeppers() {
  document.querySelectorAll(`.green-pepper`).forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = `visible`;
    } else {
      onePepper.style.visibility = `hiden`;
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll (`.sauce`).forEach ((sauce) => {
    if (state.whiteSauce) {
      sauce.classList.add (`sauce-white`);
    } else {
      sauce.classList.remove (`sauce-white`);
    }
  });
}

function renderGlutenFreeCrust() {
  const crust = document.querySelectorAll (`.crust`)
  if (state.glutenFreeCrust) {
    crust.classList.add (`crust-gluten-free`);
  } else {
    crust.className.remove (`crust-gluten-free`);
  }
}

function renderButtons() {
  document.querySelectorAll(`.btn`).forEach((button) => {
    switch (button.className.split(` `)[1]) {
      case `btn-pepperoni`:
        if (state.pepperoni === true) {
          button.classList.replace(`inactive`, `active`);
        } else {
          button.classList.replace(`active`, `inactive`);
        }
        break;
      case `btn-mushrooms`:
        if (state.mushrooms === true) {
          button.classList.replace(`inactive', 'active`);
        } else {
          button.classList.replace(`active`, `inactive`);
        }
        break;
      case `btn-green-peppers`:
        if (state.greenPeppers === true) {
          button.classList.replace(`inactive`, `active`);
        } else {
          button.classList.replace(`active`, `inactive`);
        }
        break;
      case `btn-sauce`:
        if (state.whiteSauce === true) {
          button.classList.replace(`inactive`, `active`);
        } else {
          button.classList.replace(`active`, `inactive`);
        }
        break;
      case `btn-crust`:
        if (state.glutenFreeCrust === true) {
          button.classList.replace(`inactive`, `active`);
        } else {
          button.classList.replace(`active`, `inactive`);
        }
        break;
      default:
        console.error(`Butão errado maluco :p`);
        break;
    }
  });
}
}
  

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
