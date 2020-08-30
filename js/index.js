// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
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

document.querySelectorAll(".mushroom").forEach((oneMush) => {
  if (state.mushrooms) {
    oneMush.style.visibility = "visible";
  } else {
    oneMush.style.visibility = "hidden";
  }
});
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGP) => {
    if (state.greenPeppers) {
      oneGP.style.visibility = "visible";
    } else {
      oneGP.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  if (state.whiteSauce) {
    document.querySelector(".sauce").classList.add("sauce-white");
  } else {
    document.querySelector(".sauce").classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  if (state.peperoni) {
    document.querySelector(".btn-pepperoni").classList.add("active");
  } else {
    document.querySelector(".btn-pepperoni").classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector("btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn-mushrooms").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn-sauce").classList.remove("active");
  }
  if (state.glutenFreeCrrust) {
    document.querySelector(".btn-crust").classList.add("active");
  } else {
    document.querySelector("btn-crust").classList.remove("active");
  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const ul = document.querySelector(".price ul");
  let pricePepperoni,
    priceMushrooms,
    priceGreenPeppers,
    priceWhiteSauce,
    priceGlutenFreeCrust;

  let priceTotal = basePrice;

  if (state.pepperoni) {
    pricePepperoni = `<li>$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}</li>`;
    priceTotal += ingredients.pepperoni.price;
  } else {
    pricePepperoni = "";
  }
  if (state.mushrooms) {
    priceMushrooms = `<li>$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}</li>`;
    priceTotal += ingredients.mushrooms.price;
  } else {
    priceMushrooms = "";
  }
  if (state.greenPeppers) {
    priceGreenPeppers = `<li>$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}</li>`;
    priceTotal += ingredients.greenPeppers.price;
  } else {
    priceGreenPeppers = "";
  }
  if (state.whiteSauce) {
    priceWhiteSauce = `<li>$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}</li>`;
    priceTotal += ingredients.whiteSauce.price;
  } else {
    priceWhiteSauce = "";
  }
  if (state.glutenFreeCrust) {
    priceGlutenFreeCrust = `<li>$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}</li>`;
    priceTotal += ingredients.glutenFreeCrust.price;
  } else {
    priceGlutenFreeCrust = "";
  }

  ul.innerHTML =
    pricePepperoni +
    priceMushrooms +
    priceGreenPeppers +
    priceWhiteSauce +
    priceGlutenFreeCrust;

  const totalDisplay = document.querySelector(".price strong");
  totalDisplay.innerText = `$${priceTotal}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`


document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
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
  console.log("sauce!");
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  console.log("crust!");
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
