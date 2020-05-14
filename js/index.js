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
  renderPrice(event);
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    state.pepperoni
      ? (onePep.style.visibility = "visible")
      : (onePep.style.visibility = "hidden");
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((mush) => {
    state.mushrooms
      ? (mush.style.visibility = "visible")
      : (mush.style.visibility = "hidden");
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((pepper) => {
    state.greenPeppers
      ? (pepper.style.visibility = "visible")
      : (pepper.style.visibility = "hidden");
  });
}

function renderWhiteSauce() {
  let whiteSauceSection = document
    .querySelector(".crust")
    .querySelector(".sauce");

  state.whiteSauce
    ? whiteSauceSection.classList.remove("sauce-white")
    : whiteSauceSection.classList.add("sauce-white");
}

function renderGlutenFreeCrust() {
  let crustSection = document.querySelector(".crust");

  state.glutenFreeCrust
    ? crustSection.classList.remove("crust-gluten-free")
    : crustSection.classList.add("crust-gluten-free");
}

function renderButtons() {
  let btnPepperoni = document.querySelector(".btn.btn-pepperoni");
  state.pepperoni
    ? btnPepperoni.classList.add("active")
    : btnPepperoni.classList.remove("active");

  let btnMushrooms = document.querySelector(".btn.btn-mushrooms");
  state.mushrooms
    ? btnMushrooms.classList.add("active")
    : btnMushrooms.classList.remove("active");

  let btnGreenPeppers = document.querySelector(".btn.btn-green-peppers");
  state.greenPeppers
    ? btnGreenPeppers.classList.add("active")
    : btnGreenPeppers.classList.remove("active");

  let btnSauce = document.querySelector(".btn.btn-sauce");
  state.whiteSauce
    ? btnSauce.classList.add("active")
    : btnSauce.classList.remove("active");

  let btnCrust = document.querySelector(".btn.btn-crust");
  state.glutenFreeCrust
    ? btnCrust.classList.add("active")
    : btnCrust.classList.remove("active");
}

function renderPrice(event) {
  let asideElement = document.querySelector("aside");
  let ulElement = asideElement.querySelector("ul");
  ulElement.innerText = "";

  let totalPrice = 10;

  for (var prop in state) {
    totalPrice += appendPriceHtml(prop, ulElement);
  }

  document.querySelector("aside").querySelector("strong").innerText =
    "$" + totalPrice;
}

function appendPriceHtml(topping, ulElement) {
  let liElement = document.createElement("li");
  let totalPrice = 0;

  if (state[topping]) {
    totalPrice += ingredients[topping].price;
    liElement.innerText = `$${ingredients[topping].price} ${topping}`;
    ulElement.appendChild(liElement);
  } else {
    if (ulElement.contains(liElement)) {
      ulElement.removeChild(liElement);
      totalPrice -= ingredients[topping].price;
    }
  }

  return totalPrice;
}

renderEverything();

document
  .querySelector(".btn.btn-pepperoni")
  .addEventListener("click", (event) => {
    state.pepperoni = !state.pepperoni;
    renderEverything(event);
  });

document
  .querySelector(".btn.btn-mushrooms")
  .addEventListener("click", (event) => {
    state.mushrooms = !state.mushrooms;
    renderEverything(event);
  });

document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", (event) => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything(event);
  });

document.querySelector(".btn.btn-sauce").addEventListener("click", (event) => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything(event);
});

document.querySelector(".btn.btn-crust").addEventListener("click", (event) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(event);
});
