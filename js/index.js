// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
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
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushroom) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPepper) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauceElement = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauceElement.classList.add("sauce-white");
  } else {
    sauceElement.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustElement = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crustElement.classList.add("crust-gluten-free");
  } else {
    crustElement.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // if (button.class)
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
    } else if (button.className.includes("sauce")) {
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
// if (state.btn) {
//   btn.classList.add(".btn");
// } else {
//   btn.classList.remove(".btn");
// }


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const list = document.querySelector(".panel.price ul");
  let totalPrice = basePrice;
  let listItems = "";
  for (let ingredient in state) {
    if (state[ingredient]) {
      listItems += `<li> + $${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`
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
document.querySelector(`.btn.btn-mushrooms`).addEventListener('click', () => {
  state.mushroom = !state.mushroom;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(`.btn.btn-green-peppers`).addEventListener('click', () => {
  state.greenPepper = !state.greenPepper;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(`.btn.btn-sauce`).addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(`.btn.btn-crust`).addEventListener(`click`, () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});