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

  //  renderButtons();
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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    state.mushrooms
      ? (oneMush.style.visibility = "visible")
      : (oneMush.style.visibility = "hidden");
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((oneGreenPep) => {
    state.greenPeppers
      ? (oneGreenPep.style.visibility = "visible")
      : (oneGreenPep.style.visibility = "hidden");
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  state.whiteSauce
    ? document.querySelector(".sauce").classList.add("sauce-white")
    : document.querySelector(".sauce").classList.remove("sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  state.glutenFreeCrust
    ? document.querySelector(".crust").classList.add("crust-gluten-free")
    : document.querySelector(".crust").classList.remove("crust-gluten-free");
  console.log(state.glutenFreeCrust);
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
const btnListener = document.querySelectorAll(".btn"); // I create a const with nodelist containing all the button

function renderButtons(event) {
  // add event to hande the listeneer
  event.target.classList.toggle("active"); //if active toggle will "remove" this class if not toggle will add the class
}
btnListener.forEach((button) =>
  button.addEventListener("click", renderButtons)
); //for each btn we will aplly the function renderbuttons

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let calcPrice = basePrice;
  let priceList = document.querySelector(".panel.price ul");
  let totalPrice = document.querySelector(".panel.price strong");
  priceList.innerHTML = "";
  totalPrice.innerHTML = "";
  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      priceList.innerHTML += "<li>" + "$" + ingredients[ingredient].price + " " + ingredients[ingredient].name.toLowerCase() + "" + "</li>";
      totalPrice.innerHTML = "$" + "" + (calcPrice += ingredients[ingredient].price);
    } else {
      // 10$ just for a classic crust expensive pizza!!
      totalPrice.innerHTML = "$" + calcPrice;
    }
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
