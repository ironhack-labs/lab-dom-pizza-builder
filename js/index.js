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
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = "visible";
    } else {
      onePepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector(".sauce.sauce-white");
  if (state.whiteSauce) {
    sauce.style.visibility = "visible";
  } else {
    sauce.style.visibility = "hidden";
  }
}

function renderGlutenFreeCrust() {
  const gluten = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    gluten.classList.remove("crust-gluten-free");
  } else {
    gluten.classList.add("crust-gluten-free");
  }
}

function renderButtons() {
  const btnPepperoni = document.querySelector(".btn.btn-pepperoni");
  if (!state.pepperoni) {
    btnPepperoni.classList.remove("active");
  } else {
    btnPepperoni.classList.add("active");
  }
  const btnMushrooms = document.querySelector(".btn.btn-mushrooms");
  if (!state.mushrooms) {
    btnMushrooms.classList.remove("active");
  } else {
    btnMushrooms.classList.add("active");
  }
  btnGreenPeppers = document.querySelector(".btn.btn-green-peppers");
  if (!state.greenPeppers) {
    btnGreenPeppers.classList.remove("active");
  } else {
    btnGreenPeppers.classList.add("active");
  }
  btnWhiteSauce = document.querySelector(".btn.btn-sauce");
  if (!state.whiteSauce) {
    btnWhiteSauce.classList.remove("active");
  } else {
    btnWhiteSauce.classList.add("active");
  }
  btnGlutenFree = document.querySelector(".btn.btn-crust");
  if (!state.glutenFreeCrust) {
    btnGlutenFree.classList.remove("active");
  } else {
    btnGlutenFree.classList.add("active");
  }
}

function renderPrice() {
  const ingredientsP = document.querySelector("strong");
  const pepperoni = document.querySelector("#pepperoni-price");
  const mushrooms = document.querySelector("#mushrooms-price");
  const peppers = document.querySelector("#peppers-price");
  const sauce = document.querySelector("#sauce-price");
  const gluten = document.querySelector("#gluten-price");
  const pepperoniP = ingredients.pepperoni.price;
  const mushroomsP = ingredients.mushrooms.price;
  const peppersP = ingredients.greenPeppers.price;
  const sauceP = ingredients.whiteSauce.price;
  const glutenP = ingredients.glutenFreeCrust.price;
  if (state.pepperoni) {
    pepperoni.style.display = "block";
    basePrice += pepperoniP;
  } else {
    pepperoni.style.display = "none";
  }
  if (state.mushrooms) {
    mushrooms.style.display = "block";
    basePrice += mushroomsP;
  } else {
    mushrooms.style.display = "none";
  }
  if (state.greenPeppers) {
    peppers.style.display = "block";
    basePrice += peppersP;
  } else {
    peppers.style.display = "none";
  }
  if (state.whiteSauce) {
    sauce.style.display = "block";
    basePrice += sauceP;
  } else {
    sauce.style.display = "none";
  }
  if (state.glutenFreeCrust) {
    gluten.style.display = "block";
    basePrice += glutenP;
  } else {
    gluten.style.display = "none";
  }
  ingredientsP.innerText = `$${basePrice}`;
  basePrice = 10;
}

renderPrice()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
