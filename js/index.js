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

// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  });
}

// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = "visible";
    } else {
      oneGreenPep.style.visibility = "hidden";
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }
}

// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderButtons() {
  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  }
  if (state.pepperoni) {
    document.querySelector(".btn.btn-pepperoni").classList.add("active");
  } else {
    document.querySelector(".btn.btn-pepperoni").classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn.btn-sauce").classList.remove("active");
  }
}

// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  let sum = basePrice;

  let priceList = document.querySelector(".price ul");
  priceList.innerHTML = "";
  if (state.pepperoni === true) {
    const pep = document.createElement("li");
    pep.innerText =
      "$" + ingredients.pepperoni.price + " " + ingredients.pepperoni.name;
    //`$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`;

    priceList.appendChild(pep);
    sum += ingredients.pepperoni.price;
  }

  if (state.mushrooms === true) {
    const mush = document.createElement("li");
    mush.innerText = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
    //"$" +mush.innerText = ingredients.mushrooms.price + " " + ingredients.mushrooms.name;

    priceList.appendChild(mush);
    sum += ingredients.mushrooms.price;
  }

  if (state.greenPeppers === true) {
    const green = document.createElement("li");
    green.innerText = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
    //"$" +green.innerText = ingredients.greenPeppers.price + " " + ingredients.greenPeppers.name;

    priceList.appendChild(green);
    sum += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce === true) {
    const sauce = document.createElement("li");
    sauce.innerText = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
    //"$" +sauce.innerText = ingredients.whiteSauce.price + " " + ingredients.whiteSauce.name;

    priceList.appendChild(sauce);
    sum += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust === true) {
    const crust = document.createElement("li");
    crust.innerText = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
    //"$" +crust.innerText = ingredients.glutenFreeCrust.price + " " + ingredients.glutenFreeCrust.name;

    priceList.appendChild(crust);
    sum += ingredients.glutenFreeCrust.price;
  }

  let sumRender = document.querySelector(".price strong");
  sumRender;
  sumRender.innerText = `$${sum}`;
}

renderPrice();

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
