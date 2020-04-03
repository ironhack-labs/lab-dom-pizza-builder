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

function renderMushrooms() {
    document.querySelectorAll(".mushroom").forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
    document.querySelectorAll(".green-pepper").forEach(greenPepper => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = "visible";
    } else {
      greenPepper.style.visibility = "hidden";
    }
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  const sauceElement = document.querySelector(".sauce");
    if (state.whiteSauce) {
      sauceElement.classList.add("sauce-white");
    } else {
      sauceElement.classList.remove("sauce-white");
    };
}

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  const crustElement = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crustElement.classList.add("crust-gluten-free");
  } else {
    crustElement.classList.remove("crust-gluten-free");
  }
}

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {

  document.querySelectorAll(".btn").forEach(button => {
    if (button.className.includes("pepperoni")) {
      if (state.pepperoni) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    } else if (button.className.includes("mushrooms")) {
      if (state.mushrooms) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    } else if (button.className.includes("green-peppers")) {
      if (state.greenPeppers) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    }  else if (button.className.includes("sauce")) {
      if (state.whiteSauce) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    } else if (button.className.includes("crust")) {
      if (state.glutenFreeCrust) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    }
  })

}


    // Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  const list = document.querySelector(".panel.price ul");
  let listItems = "";
  let totalPrice = basePrice;
  for (let ingredient in state) {
    if (state[ingredient]) {
      listItems += `<li>+ $${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
      totalPrice += ingredients[ingredient].price;
    }
  }
  document.querySelector(".panel.price strong").textContent = `$${totalPrice}`;
  list.innerHTML = listItems;
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