// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
};

// Initial value of the state (the state values can change over time)
let state = {
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
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(mush => {
    if (state.mushrooms) {
      mush.style.visibility = 'visible';
    } else {
      mush.style.visibility = 'hidden';
    }
  });
}


function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(green => {
    if (state.greenPeppers) {
      green.style.visibility = 'visible';
    } else {
      green.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(sauce => {
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white");
    } else {
      sauce.classList.remove("sauce-white");
    }
  });
}


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust => {
    if (state.glutenFreeCrust) {
      crust.classList.add("crust-gluten-free");
    } else {
      crust.classList.remove("crust-gluten-free");
    }
  });
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnPep = document.querySelector(".btn-pepperoni");
  const btnMush = document.querySelector(".btn-mushrooms");
  const btnGreen = document.querySelector(".btn-green-peppers");
  const btnSauce = document.querySelector(".btn-sauce");
  const btnCrust = document.querySelector(".btn-crust");
  if (state.pepperoni) {
    btnPep.classList.add("active");
  } else btnPep.classList.remove("active");
  if (state.mushrooms) {
    btnMush.classList.add("active");
  } else btnMush.classList.remove("active");
  if (state.greenPeppers) {
    btnGreen.classList.add("active");
  } else btnGreen.classList.remove("active");
  if (state.whiteSauce) {
    btnSauce.classList.remove("active");
  } else btnSauce.classList.add("active");
  if (state.glutenFreeCrust) {
    btnCrust.classList.remove("active");
  } else btnCrust.classList.add("active");
}

// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  let pepLi = document.querySelector(".price li:nth-child(1)");
  let mushLi = document.querySelector(".price li:nth-child(2)");
  let greenLi = document.querySelector(".price li:nth-child(3)");
  let sauceLi = document.querySelector(".price li:nth-child(4)");
  let crustLi = document.querySelector(".price li:nth-child(5)");
  let totalPrice = basePrice;
  if (!state.pepperoni) {
    pepLi.style.display = 'none';
  } else {
    pepLi.style.display = 'block';
    totalPrice += 1;
  }
  if (!state.mushrooms) {
    mushLi.style.display = 'none';
  } else {
    mushLi.style.display = 'block';
    totalPrice += 1;
  }
  if (!state.greenPeppers) {
    greenLi.style.display = 'none';
  } else {
    greenLi.style.display = 'block';
    totalPrice += 1;
  }
  if (!state.whiteSauce) {
    sauceLi.style.display = 'none';
  } else {
    sauceLi.style.display = 'block';
    totalPrice += 3;
  }
  if (!state.glutenFreeCrust) {
    crustLi.style.display = 'none';
  } else {
    crustLi.style.display = 'block';
    totalPrice += 5;
  }
  document.querySelector('aside.panel.price strong').innerHTML = "$" + totalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
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