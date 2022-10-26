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
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    }
    else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    }
    else {
      onePepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const whiteSauce = document.querySelector('.sauce');
  const whiteSauceClasses = whiteSauce.classList
  if (state.whiteSauce) {
    whiteSauceClasses.add("sauce-white");
  }
  else {
    whiteSauceClasses.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  const glutenFree = document.querySelector('.crust');
  const glutenFreeClasses = glutenFree.classList
  if (state.glutenFreeCrust) {
    glutenFreeClasses.add("crust-gluten-free");
  }
  else {
    glutenFreeClasses.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(button => {
    button.classList.remove("active");
    let textNoSpace = button.innerHTML.replace(" ", "");
    let textStripped = textNoSpace.replace("-", "");
    let btnText = textStripped.toLowerCase();

    for (let key in state) {
      if (btnText === key.toLowerCase() && state[key]) {
        button.classList.add("active");
      }
    }
  });
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const ingredientList = document.querySelector(".panel.price ul");
  const totalPriceDisplay = document.querySelector(".panel.price strong");

  let totalPrice = basePrice;
  let selected = "";

  for (let key in state) {
    if (state[key]) {
      selected += `<li>$${ingredients[key]["price"]} ${ingredients[key]["name"]}</li>`;
      totalPrice += ingredients[key]["price"];
    }
  }

  ingredientList.innerHTML = selected;
  totalPriceDisplay.innerHTML = `$${totalPrice}`;
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