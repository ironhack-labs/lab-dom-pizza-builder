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
  document.querySelectorAll(".green-pepper").forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = "visible";
    } else {
      onePepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  document.querySelectorAll(".sauce").forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = "visible";
    } else {
      sauce.style.visibility = "hidden";
    }
  });
}

function renderGlutenFreeCrust() {
  document.querySelectorAll(".crust").forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.classList.add("crust-gluten-free");
    } else {
      crust.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {}

function renderPrice() {
  let ulPrice = document.querySelector(".price ul");
  let finalPrice = document.querySelector(".price span");
  let precioInicial = 10;
  finalPrice.innerHTML = precioInicial;
  ulPrice.innerHTML = "";

  if (state.pepperoni) {
    let pepperoniLi = document.createElement("li");
    ulPrice.appendChild(pepperoniLi).innerHTML = "$1 pepperoni";
    finalPrice.innerHTML = ++precioInicial;
  }

  if (state.mushrooms) {
    let mushroomLi = document.createElement("li");
    ulPrice.appendChild(mushroomLi).innerHTML = "$1 mushroom";
    finalPrice.innerHTML = ++precioInicial;
  }

  if (state.greenPeppers) {
    let peppersLi = document.createElement("li");
    ulPrice.appendChild(peppersLi).innerHTML = "$1 green peppers";
    finalPrice.innerHTML = ++precioInicial;
  }

  if (state.whiteSauce) {
    let sauceLi = document.createElement("li");
    ulPrice.appendChild(sauceLi).innerHTML = "$3 white sauce";
    finalPrice.innerHTML = precioInicial + 3;
  }

  if (state.glutenFreeCrust) {
    let crustLi = document.createElement("li");
    ulPrice.appendChild(crustLi).innerHTML = "$5 gluten-free crust";
    finalPrice.innerHTML = precioInicial + 5;
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
