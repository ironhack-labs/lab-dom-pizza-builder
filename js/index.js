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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  mushroomObjects = document.querySelectorAll(".mushroom");
  mushroomObjects.forEach((oneMush) => (state.mushrooms) ? oneMush.style.visibility = "visible" : oneMush.style.visibility = "hidden");
  }

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  greenPepperObjects = document.querySelectorAll(".green-pepper");
  greenPepperObjects.forEach((oneGreenPep) => (state.greenPeppers) ? oneGreenPep.style.visibility = "visible" : oneGreenPep.style.visibility = "hidden");
  }

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  sauceObject = document.querySelector(".sauce");
  (state.whiteSauce) ? sauceObject.className = "sauce sauce-white" : sauceObject.className = "sauce";
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  crustObject = document.querySelector(".crust");
  (state.glutenFreeCrust) ? crustObject.classList.add("crust-gluten-free") : crustObject.classList.remove("crust-gluten-free");
}

function renderButtons() {
  const pepperoniButton = document.querySelector('.btn.btn-pepperoni');
  const mushroomButton = document.querySelector('.btn.btn-mushrooms');
  const greenPeppersButton = document.querySelector('.btn.btn-green-peppers');
  const sauceButton = document.querySelector('.btn.btn-sauce');
  const crustButton = document.querySelector('.btn.btn-crust');

  
  if (state.pepperoni) {
    pepperoniButton.classList.add('active');
  } else {
    pepperoniButton.classList.remove('active');
  }

  if (state.mushrooms) {
    mushroomButton.classList.add('active');
  } else {
    mushroomButton.classList.remove('active');
  }

  if (state.greenPeppers) {
    greenPeppersButton.classList.add('active');
  } else {
    greenPeppersButton.classList.remove('active');
  }

  if (state.whiteSauce) {
    sauceButton.classList.add('active');
  } else {
    sauceButton.classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    crustButton.classList.add('active');
  } else {
    crustButton.classList.remove('active');
  }
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let pepperoniPriceObject = document.querySelector("#pepperoni-price");
  let mushroomPriceObject = document.querySelector("#mushroom-price");
  let greenPepperPriceObject = document.querySelector("#greenpepper-price");
  let whiteSaucePriceObject = document.querySelector("#whitesauce-price");
  let glutenFreeCrustPriceObject = document.querySelector("#glutenfreecrust-price");
  let totalPriceObject = document.querySelector("#totalPrice");

  (state.pepperoni) ? pepperoniPriceObject.style.visibility = "visible":pepperoniPriceObject.style.visibility = "hidden";
  (state.mushrooms) ? mushroomPriceObject.style.visibility = "visible" : mushroomPriceObject.style.visibility = "hidden";
  (state.greenPeppers) ? greenPepperPriceObject.style.visibility = "visible" : greenPepperPriceObject.style.visibility = "hidden";
  (state.whiteSauce) ? whiteSaucePriceObject.style.visibility = "visible" : whiteSaucePriceObject.style.visibility = "hidden";
  (state.glutenFreeCrust) ? glutenFreeCrustPriceObject.style.visibility = "visible" : glutenFreeCrustPriceObject.style.visibility = "hidden";

  let totalPrice = basePrice +
  (state.pepperoni * ingredients.pepperoni.price) +
  (state.mushrooms * ingredients.mushrooms.price) +
  (state.greenPeppers * ingredients.greenPeppers.price) +
  (state.whiteSauce * ingredients.whiteSauce.price) +
  (state.glutenFreeCrust * ingredients.glutenFreeCrust.price);

  totalPriceObject.innerText = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
  renderButtons();
  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
mushroomButton = document.querySelector(".btn.btn-mushrooms");
mushroomButton.addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderMushrooms();
  renderButtons();
  renderPrice();
  }
);

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
greenPeppersButton = document.querySelector(".btn.btn-green-peppers");
greenPeppersButton.addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers;
  renderGreenPeppers();
  renderButtons();
  renderPrice();
  }
);

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
sauceButton = document.querySelector(".btn.btn-sauce");
sauceButton.addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderButtons();
  renderPrice();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
crustButton = document.querySelector(".btn.btn-crust");
crustButton.addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
})
  