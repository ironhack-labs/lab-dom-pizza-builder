// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
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
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = "visible";
    } else {
      oneGreenPep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  document.querySelector(".sauce").classList.toggle("sauce-white");
}

function renderGlutenFreeCrust() {
  document.querySelector(".crust").classList.toggle("crust-gluten-free");
}

function renderButtons() {
  const buttonPep = document.querySelector(".btn-pepperoni");

  if (state.pepperoni) {
    buttonPep.classList.add("active");
  } else if (!state.pepperoni) {
    buttonPep.classList.remove("active");
  }

  const buttonMush = document.querySelector(".btn-mushrooms");

  if (state.mushrooms) {
    buttonMush.classList.add("active");
  } else if (!state.mushrooms) {
    buttonMush.classList.remove("active");
  }

  const buttonGreenPep = document.querySelector(".btn-green-peppers");

  if (state.greenPeppers) {
    buttonGreenPep.classList.add("active");
  } else if (!state.greenPeppers) {
    buttonGreenPep.classList.remove("active");
  }

  const buttonSauce = document.querySelector(".btn-sauce");

  if (state.whiteSauce) {
    buttonSauce.classList.add("active");
  } else if (!state.whiteSauce) {
    buttonSauce.classList.remove("active");
  }

  const buttonCrust = document.querySelector(".btn-crust");

  if (state.glutenFreeCrust) {
    buttonCrust.classList.add("active");
  } else if (!state.whiteSauce) {
    buttonCrust.classList.remove("active");
  }
}

function renderPrice() {
  let panelPrices = document.querySelector(".price ul");
  let total = basePrice;
  let totalIng = document.querySelector(".price.panel strong");
  panelPrices.innerHTML = "";

  for (let key in ingredients) {
    if (state[key]) {
      total += ingredients[key].price;
      panelPrices.innerHTML += `<li>$ ${ingredients[key].price} ${ingredients[key].name}</li>`;
    }
  }
  totalIng.textContent = `$ ${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderPepperoni();
  renderButtons();
  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms ").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  renderButtons();
  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderGreenPeppers();
    renderButtons();
    renderPrice();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce ").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderButtons();
  renderPrice();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
});
