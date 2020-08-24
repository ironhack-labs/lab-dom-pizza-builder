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
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = "visible";
    } else {
      pepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white");
    } else {
      sauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.classList.add("crust-gluten-free");
    } else {
      crust.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttonPepperoni = document.querySelector(".btn.btn-pepperoni");
  buttonPepperoni.onclick = () => {
    if (state.pepperoni) {
      buttonPepperoni.classList.remove("active");
    } else {
      buttonPepperoni.classList.add("active");
    }
  };

  let buttonMushroom = document.querySelector(".btn.btn-mushrooms");
  buttonMushroom.onclick = () => {
    if (state.mushrooms) {
      buttonMushroom.classList.remove("active");
    } else {
      buttonMushroom.classList.add("active");
    }
  };

  let buttonGreenpeppers = document.querySelector(".btn.btn-green-peppers");
  buttonGreenpeppers.onclick = () => {
    if (state.greenPeppers) {
      buttonGreenpeppers.classList.remove("active");
    } else {
      buttonGreenpeppers.classList.add("active");
    }
  };

  let buttonWhitesauce = document.querySelector(".btn.btn-sauce");
  buttonWhitesauce.onclick = () => {
    if (state.whiteSauce) {
      buttonWhitesauce.classList.remove("active");
    } else {
      buttonWhitesauce.classList.add("active");
    }
  };

  let buttonGlutenFreeCrust = document.querySelector(".btn.btn-crust");
  buttonGlutenFreeCrust.onclick = () => {
    if (state.glutenFreeCrust) {
      buttonGlutenFreeCrust.classList.remove("active");
    } else {
      buttonGlutenFreeCrust.classList.add("active");
    }
  };
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let count = 10;
  let pepperoniPrice = document.querySelectorAll("ul")[1];
  pepperoniPrice.innerHTML = "";
  if (state.pepperoni) {
    count += ingredients.pepperoni.price;
    pepperoniPrice.innerHTML += "<li>$1 pepperoni</li>";
  }
  if (state.mushrooms) {
    count += ingredients.mushrooms.price;
    pepperoniPrice.innerHTML += "<li>$1 mushrooms</li>";
  }
  if (state.greenPeppers) {
    count += ingredients.greenPeppers.price;
    pepperoniPrice.innerHTML += "<li>$1 green peppers</li>";
  }
  if (state.whiteSauce) {
    count += ingredients.whiteSauce.price;
    pepperoniPrice.innerHTML += "<li>$3 white sauce</li>";
  }
  if (state.glutenFreeCrust) {
    count += ingredients.glutenFreeCrust.price;
    pepperoniPrice.innerHTML += "<li>$5 gluten-free crust</li>";
  }
  let totalPrice = document.querySelector("strong");
  totalPrice.innerHTML = count;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
