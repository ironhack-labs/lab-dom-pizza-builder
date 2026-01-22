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
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
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
  let sauceNode = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauceNode.classList.add("sauce-white")
  } else {
    sauceNode.classList.remove("sauce-white")
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustNode = document.querySelector('.crust')
  if (state.whiteSauce) {
    crustNode.classList.add("crust-gluten-free")
  } else {
    crustNode.classList.remove("crust-gluten-free")
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepperoniButtonNode = document.querySelector(".btn-pepperoni")
  let mushroomsButtonNode = document.querySelector(".btn-mushrooms")
  let greenPeppersiButtonNode = document.querySelector(".btn-green-peppers")
  let sauceButtonNode = document.querySelector(".btn-sauce")
  let crustButtonNode = document.querySelector(".btn-crust")
  if (state.pepperoni) {
      pepperoniButtonNode.classList.add("active")
  } else {
    pepperoniButtonNode.classList.remove("active")
  }
  if (state.mushrooms) {
      mushroomsButtonNode.classList.add("active")
  } else {
      mushroomsButtonNode.classList.remove("active")
  }
  if (state.greenPeppers) {
      greenPeppersiButtonNode.classList.add("active")
  } else {
      greenPeppersiButtonNode.classList.remove("active")
  }
  if (state.whiteSauce) {
      sauceButtonNode.classList.add("active")
  } else {
      sauceButtonNode.classList.remove("active")
  }
  if (state.glutenFreeCrust) {
      crustButtonNode.classList.add("active")
  } else {
      crustButtonNode.classList.remove("active")
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrize = 10
  const asideNode = document.querySelector(".panel.price")
  const totalPriceNode = asideNode.querySelector("strong")
  const listNode = document.querySelector(".panel.price ul")
  listNode.querySelectorAll("li").forEach((eachNode) => {
    eachNode.remove()
  })
  if (state.pepperoni) {
    let newListElement = document.createElement("li")
    newListElement.innerText = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`
    listNode.appendChild(newListElement)
    totalPrize += ingredients.pepperoni.price
  }
  if (state.mushrooms) {
    let newListElement = document.createElement("li")
    newListElement.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`
    listNode.appendChild(newListElement)
    totalPrize += ingredients.mushrooms.price
  }
  if (state.greenPeppers) {
    let newListElement = document.createElement("li")
    newListElement.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`
    listNode.appendChild(newListElement)
    totalPrize += ingredients.greenPeppers.price
  }
  if (state.whiteSauce) {
    let newListElement = document.createElement("li")
    newListElement.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`
    listNode.appendChild(newListElement)
    totalPrize += ingredients.whiteSauce.price
  }
  if (state.glutenFreeCrust) {
    let newListElement = document.createElement("li")
    newListElement.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`
    listNode.appendChild(newListElement)
    totalPrize += ingredients.glutenFreeCrust.price
  }
  totalPriceNode.innerText = `${totalPrize}`
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
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});