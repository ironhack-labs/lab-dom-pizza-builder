// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green peppers', price: 1 },
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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
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
  document.querySelectorAll('.sauce-white').forEach((oneSauceWhite) => {
    if (state.whiteSauce) {
      oneSauceWhite.style.visibility = 'visible';
    } else {
      oneSauceWhite.style.visibility = 'hidden';
    }
  });

}

function renderGlutenFreeCrust() {
  const crustBase = document.querySelector('.crust')

    if (state.glutenFreeCrust) {
      crustBase.classList.add('crust-gluten-free')
    }else {
      crustBase.classList.remove('crust-gluten-free')
    }
  }


function renderButtons() {
  const allButtons = document.querySelectorAll(".btn");
  Array.from(allButtons).forEach((button) => {
    const buttonText = button.innerText;
    const key = Object.keys(ingredients).find(key => {
      return ingredients[key].name === buttonText;
    })
    const ingredientState = state[key];
    if (ingredientState) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  })
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
   const priceUl = document.querySelector('aside.price ul')
  priceUl.innerHTML = '';

  const activeIngredients = Object.keys(state).filter(( key ) => {
    return state[key] === true;
  })
  let price = basePrice;
  activeIngredients.forEach( (key) => {
    const value = ingredients[key];
    price += value.price;
    const priceItem = document.createElement('li')
    priceItem.textContent = `$${value.price} ${value.name}`
    priceUl.appendChild(priceItem);
  } )
  const priceElement = document.querySelector('aside.price strong')
  priceElement.textContent = `$${price}`;

 
  
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