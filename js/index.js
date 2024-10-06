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
  document.querySelectorAll('.sauce').forEach((oneWhiteSauce) => {
    if (state.whiteSauce === true) {
      oneWhiteSauce.classList.add("sauce-white")
    } else {
      oneWhiteSauce.classList.remove("sauce-white")
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll('.crust').forEach((oneGluttenFree) => {
    if (state.glutenFreeCrust === true) {
      oneGluttenFree.classList.add("crust-gluten-free")
    } else {
      oneGluttenFree.classList.remove("crust-gluten-free")
    }
  });
}

function renderButtons() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    if (button.classList.contains("btn-pepperoni")) {
      button.classList.toggle("active", state.pepperoni);
    } else if (button.classList.contains("btn-mushrooms")) {
      button.classList.toggle("active", state.mushrooms);
    } else if (button.classList.contains("btn-green-peppers")) {
      button.classList.toggle("active", state.greenPeppers);
    } else if (button.classList.contains("btn-sauce")) {
      button.classList.toggle("active", state.whiteSauce);
    } else if (button.classList.contains("btn-crust")) {
      button.classList.toggle("active", state.glutenFreeCrust);
    }
    button.addEventListener("click", () => {
      button.classList.toggle("active");
    });
  });
}


function renderPrice() {
  // Iteration 4: change the HTML of <aside class="panel price">
  const priceList = document.querySelector(".panel.price ul"); 
  const strong = document.querySelector("strong"); 
  let totalPrice = basePrice; 
  priceList.innerHTML = ""; 
  
  // Iterate over each ingredient in the ingredients object
  for (const ingredient in ingredients) {
    if (state[ingredient]) { 
      totalPrice += ingredients[ingredient].price; 
      priceList.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
    }
  }

  // Update the total price in the HTML
  strong.innerHTML = `$${totalPrice}`;
}
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
  renderButtons()
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  renderButtons()
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
  renderButtons()
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
  renderButtons()
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  renderButtons()
});